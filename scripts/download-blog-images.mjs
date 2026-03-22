import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const blogDir = path.join(projectRoot, 'src', 'content', 'blog');
const outputBase = path.join(projectRoot, 'public', 'images', 'blog');

// Regex to match noorjax.com upload URLs
const urlRegex = /https:\/\/noorjax\.com\/wp-content\/uploads\/[^\s\)\]"']+/g;

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    fs.mkdirSync(dir, { recursive: true });

    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        downloadFile(redirectUrl, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(dest);
      });
      file.on('error', reject);
    }).on('error', reject);
  });
}

function extractSlug(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return null;
  const frontmatter = match[1];
  const slugMatch = frontmatter.match(/^slug:\s*["']?([^"'\n]+)["']?/m);
  return slugMatch ? slugMatch[1].trim() : null;
}

function extractUrls(content) {
  const urls = [];
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    urls.push(match[0]);
  }
  return [...new Set(urls)]; // deduplicate
}

async function main() {
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  let totalFiles = 0;
  let totalUrls = 0;
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  console.log(`Found ${files.length} blog post files\n`);

  for (const file of files) {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const slug = extractSlug(content);

    if (!slug) {
      console.log(`WARN: No slug found in ${file}, skipping`);
      continue;
    }

    const urls = extractUrls(content);
    if (urls.length === 0) continue;

    totalFiles++;
    console.log(`\n[${file}] slug="${slug}" - ${urls.length} URL(s)`);

    for (const url of urls) {
      totalUrls++;
      // Extract the filename from the URL
      const urlPath = new URL(url).pathname;
      const filename = path.basename(urlPath);
      const dest = path.join(outputBase, slug, filename);

      if (fs.existsSync(dest)) {
        console.log(`  SKIP (exists): ${filename}`);
        skipped++;
        continue;
      }

      try {
        await downloadFile(url, dest);
        console.log(`  OK: ${filename}`);
        downloaded++;
      } catch (err) {
        console.error(`  FAIL: ${filename} - ${err.message}`);
        failed++;
      }
    }
  }

  console.log(`\n========== SUMMARY ==========`);
  console.log(`Blog posts with images: ${totalFiles}`);
  console.log(`Total URLs: ${totalUrls}`);
  console.log(`Downloaded: ${downloaded}`);
  console.log(`Skipped (already exist): ${skipped}`);
  console.log(`Failed: ${failed}`);
}

main();
