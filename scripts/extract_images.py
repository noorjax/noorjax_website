#!/usr/bin/env python3
"""Extract image and YouTube URLs from WordPress XML export for blog posts."""

import xml.etree.ElementTree as ET
import re
import sys

ns = {
    'content': 'http://purl.org/rss/1.0/modules/content/',
    'wp': 'http://wordpress.org/export/1.2/',
}

xml_path = sys.argv[1] if len(sys.argv) > 1 else 'noorjaxconsulting.WordPress.2026-03-21.xml'

tree = ET.parse(xml_path)
root = tree.getroot()
channel = root.find('channel')

# Pattern to detect thumbnail variants like -1030x677, -300x200
thumb_pattern = re.compile(r'-\d+x\d+(?=\.\w+)')

post_count = 0
results = {}

for item in channel.findall('item'):
    post_type = item.find('wp:post_type', ns)
    if post_type is None or post_type.text != 'post':
        continue

    title_el = item.find('title')
    title = title_el.text if title_el is not None and title_el.text else '(no title)'

    slug_el = item.find('wp:post_name', ns)
    slug = slug_el.text if slug_el is not None and slug_el.text else '(no slug)'

    status_el = item.find('wp:status', ns)
    status = status_el.text if status_el is not None else 'unknown'

    content_el = item.find('content:encoded', ns)
    content = content_el.text if content_el is not None and content_el.text else ''

    # Extract all image URLs from img src attributes
    img_src_urls = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', content, re.IGNORECASE)

    # Also extract URLs matching wp-content/uploads pattern anywhere in content
    wp_upload_urls = re.findall(r'https?://noorjax\.com/wp-content/uploads/[^\s"\'<>)]+', content)

    # Combine and deduplicate
    all_img_urls = list(set(img_src_urls + wp_upload_urls))

    # Filter out thumbnail variants
    full_size_urls = []
    for url in all_img_urls:
        url = url.replace('&amp;', '&')
        if not thumb_pattern.search(url):
            full_size_urls.append(url)
    full_size_urls.sort()

    # Extract YouTube URLs
    youtube_urls = []
    youtube_urls += re.findall(r'https?://(?:www\.)?youtube\.com/embed/[^\s"\'<>]+', content)
    youtube_urls += re.findall(r'https?://(?:www\.)?youtu\.be/[^\s"\'<>]+', content)
    youtube_urls += re.findall(r'https?://(?:www\.)?youtube\.com/watch\?v=[^\s"\'<>&]+', content)
    # Clean up trailing quotes or attributes
    cleaned_yt = []
    for yt in youtube_urls:
        # Remove trailing quote marks if present
        yt = re.sub(r'["\'].*$', '', yt)
        cleaned_yt.append(yt)
    youtube_urls = sorted(set(cleaned_yt))

    post_count += 1
    results[slug] = {
        'title': title,
        'status': status,
        'images': full_size_urls,
        'youtube': youtube_urls,
    }

print(f"Total blog posts found: {post_count}")
print("=" * 100)

for slug in sorted(results.keys()):
    info = results[slug]
    print(f"\n## {info['title']}")
    print(f"   Slug: {slug}  |  Status: {info['status']}")
    if info['images']:
        print(f"   Images ({len(info['images'])}):")
        for url in info['images']:
            print(f"     - {url}")
    else:
        print("   Images: (none)")
    if info['youtube']:
        print(f"   YouTube ({len(info['youtube'])}):")
        for url in info['youtube']:
            print(f"     - {url}")

print("\n" + "=" * 100)
total_images = sum(len(v['images']) for v in results.values())
total_youtube = sum(len(v['youtube']) for v in results.values())
posts_with_images = sum(1 for v in results.values() if v['images'])
posts_with_youtube = sum(1 for v in results.values() if v['youtube'])
print(f"\nSUMMARY:")
print(f"  Total blog posts: {post_count}")
print(f"  Posts with images: {posts_with_images}")
print(f"  Posts with YouTube embeds: {posts_with_youtube}")
print(f"  Total full-size image URLs: {total_images}")
print(f"  Total YouTube URLs: {total_youtube}")
