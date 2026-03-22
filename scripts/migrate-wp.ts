/**
 * WordPress XML Export → Astro Content Collections Migration Script
 *
 * Parses the WordPress WXR export and generates:
 * - MDX files for blog posts in src/content/blog/
 * - JSON data for services, courses, etc.
 * - A list of image URLs to download
 *
 * Usage: node --loader ts-node/esm scripts/migrate-wp.ts
 * Or simply: node scripts/migrate-wp.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { XMLParser } from 'fast-xml-parser';

const WP_EXPORT = 'noorjaxconsulting.WordPress.2026-03-21.xml';
const CONTENT_DIR = 'src/content';
const BLOG_DIR = join(CONTENT_DIR, 'blog');
const IMAGE_LIST = 'scripts/image-urls.txt';

// Ensure directories exist
[BLOG_DIR].forEach((dir) => {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
});

// Parse the XML
console.log('Reading WordPress export...');
const xml = readFileSync(WP_EXPORT, 'utf-8');

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  cdataPropName: '__cdata',
  isArray: (name) => {
    return ['item', 'wp:postmeta', 'category', 'wp:comment'].includes(name);
  },
});

const parsed = parser.parse(xml);
const channel = parsed.rss.channel;
const items = channel.item || [];

console.log(`Found ${items.length} total items`);

// Helper to extract CDATA content
function cdata(val: unknown): string {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object' && val !== null && '__cdata' in val) {
    return (val as { __cdata: string }).__cdata || '';
  }
  return String(val);
}

// Helper to get meta value by key
function getMeta(item: any, key: string): string {
  const metas = item['wp:postmeta'] || [];
  for (const m of metas) {
    if (cdata(m['wp:meta_key']) === key) {
      return cdata(m['wp:meta_value']);
    }
  }
  return '';
}

// Helper to clean WordPress shortcodes and HTML to markdown
function cleanContent(html: string): string {
  let content = html;

  // Remove Visual Composer / ThemesFlat shortcodes
  content = content.replace(/\[\/?\w+[^\]]*\]/g, '');

  // Convert basic HTML to markdown
  content = content.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n');
  content = content.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n');
  content = content.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n');
  content = content.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n');
  content = content.replace(/<strong>(.*?)<\/strong>/gi, '**$1**');
  content = content.replace(/<b>(.*?)<\/b>/gi, '**$1**');
  content = content.replace(/<em>(.*?)<\/em>/gi, '*$1*');
  content = content.replace(/<i>(.*?)<\/i>/gi, '*$1*');
  content = content.replace(/<a\s+href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');
  content = content.replace(/<img\s+[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '![$2]($1)');
  content = content.replace(/<img\s+[^>]*src="([^"]*)"[^>]*\/?>/gi, '![]($1)');
  content = content.replace(/<br\s*\/?>/gi, '\n');
  content = content.replace(/<p[^>]*>(.*?)<\/p>/gis, '$1\n\n');
  content = content.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');
  content = content.replace(/<ul[^>]*>/gi, '\n');
  content = content.replace(/<\/ul>/gi, '\n');
  content = content.replace(/<ol[^>]*>/gi, '\n');
  content = content.replace(/<\/ol>/gi, '\n');
  content = content.replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gis, '> $1\n\n');
  content = content.replace(/<pre[^>]*><code[^>]*>(.*?)<\/code><\/pre>/gis, '```\n$1\n```\n\n');
  content = content.replace(/<code>(.*?)<\/code>/gi, '`$1`');

  // Remove remaining HTML tags
  content = content.replace(/<[^>]+>/g, '');

  // Decode HTML entities
  content = content.replace(/&amp;/g, '&');
  content = content.replace(/&lt;/g, '<');
  content = content.replace(/&gt;/g, '>');
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&#039;/g, "'");
  content = content.replace(/&nbsp;/g, ' ');

  // Clean up excessive whitespace
  content = content.replace(/\n{3,}/g, '\n\n');
  content = content.trim();

  return content;
}

// Helper to create a safe slug
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 80);
}

// Separate items by type
const posts: any[] = [];
const pages: any[] = [];
const attachments: any[] = [];
const portfolios: any[] = [];
const navItems: any[] = [];
const others: any[] = [];

for (const item of items) {
  const postType = cdata(item['wp:post_type']);
  const status = cdata(item['wp:status']);

  switch (postType) {
    case 'post':
      if (status === 'publish') posts.push(item);
      break;
    case 'page':
      if (status === 'publish') pages.push(item);
      break;
    case 'attachment':
      attachments.push(item);
      break;
    case 'portfolio':
      if (status === 'publish') portfolios.push(item);
      break;
    case 'nav_menu_item':
      navItems.push(item);
      break;
    default:
      others.push(item);
  }
}

console.log(`\nContent breakdown:`);
console.log(`  Published posts: ${posts.length}`);
console.log(`  Published pages: ${pages.length}`);
console.log(`  Attachments: ${attachments.length}`);
console.log(`  Portfolios: ${portfolios.length}`);
console.log(`  Nav items: ${navItems.length}`);
console.log(`  Other: ${others.length}`);

// --- MIGRATE BLOG POSTS ---
console.log('\n--- Migrating blog posts ---');

for (const post of posts) {
  const title = cdata(post.title).replace(/"/g, '\\"');
  const slug = cdata(post['wp:post_name']) || slugify(title);
  const date = cdata(post['wp:post_date']);
  const content = cdata(post['content:encoded']);
  const excerpt = cdata(post['excerpt:encoded']);

  // Extract categories and tags
  const cats: string[] = [];
  const tags: string[] = [];
  const categories = Array.isArray(post.category) ? post.category : post.category ? [post.category] : [];
  for (const cat of categories) {
    const domain = cat?.['@_domain'];
    const name = cat?.['__cdata'] || cat?.['#text'] || '';
    if (domain === 'category' && name) cats.push(name);
    if (domain === 'post_tag' && name) tags.push(name);
  }

  const cleanedContent = cleanContent(content);
  const cleanedExcerpt = cleanContent(excerpt) || cleanedContent.substring(0, 200).replace(/\n/g, ' ');

  const frontmatter = [
    '---',
    `title: "${title}"`,
    `slug: "${slug}"`,
    `date: ${date.split(' ')[0]}`,
    `categories: [${cats.map((c) => `"${c}"`).join(', ')}]`,
    `tags: [${tags.map((t) => `"${t}"`).join(', ')}]`,
    `excerpt: "${cleanedExcerpt.substring(0, 200).replace(/"/g, '\\"').replace(/\n/g, ' ')}"`,
    '---',
    '',
  ].join('\n');

  const mdxContent = frontmatter + cleanedContent + '\n';
  const filePath = join(BLOG_DIR, `${slug}.mdx`);

  writeFileSync(filePath, mdxContent, 'utf-8');
  console.log(`  ✓ ${slug}.mdx`);
}

// --- COLLECT IMAGE URLs ---
console.log('\n--- Collecting image URLs ---');

const imageUrls: string[] = [];
for (const att of attachments) {
  const url = cdata(att['wp:attachment_url']);
  if (url && /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(url)) {
    imageUrls.push(url);
  }
}

writeFileSync(IMAGE_LIST, imageUrls.join('\n'), 'utf-8');
console.log(`  Found ${imageUrls.length} images. URLs saved to ${IMAGE_LIST}`);

// --- EXTRACT PAGE CONTENT ---
console.log('\n--- Page content summary ---');

for (const page of pages) {
  const title = cdata(page.title);
  const slug = cdata(page['wp:post_name']);
  const content = cdata(page['content:encoded']);
  const hasContent = content.length > 50;
  console.log(`  ${title} (/${slug}/) - ${hasContent ? content.length + ' chars' : 'minimal content'}`);
}

console.log('\n✅ Migration complete!');
console.log(`   Blog posts: ${posts.length} MDX files written to ${BLOG_DIR}/`);
console.log(`   Image URLs: ${imageUrls.length} saved to ${IMAGE_LIST}`);
console.log(`\nNext steps:`);
console.log(`  1. Download images using: cat ${IMAGE_LIST} | xargs -I {} curl -O {}`);
console.log(`  2. Move downloaded images to public/images/`);
console.log(`  3. Update image references in MDX files`);
