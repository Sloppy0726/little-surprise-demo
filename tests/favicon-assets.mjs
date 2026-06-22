import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const pages = ['index.html', 'products.html', 'reviews.html', 'about.html', 'privacy-policy.html', 'terms-and-conditions.html'];
const requiredHeadLinks = [
  './favicon.ico',
  './favicon-32x32.png',
  './favicon-16x16.png',
  './apple-touch-icon.png',
  './site.webmanifest',
];
const requiredFiles = [
  'public/favicon.ico',
  'public/favicon-16x16.png',
  'public/favicon-32x32.png',
  'public/favicon-48x48.png',
  'public/apple-touch-icon.png',
  'public/android-chrome-192x192.png',
  'public/android-chrome-512x512.png',
  'public/site.webmanifest',
  'public/assets/higgsfield-favicon-source.png',
  'public/assets/higgsfield-favicon-512.png',
];

const failures = [];
for (const file of requiredFiles) {
  if (!existsSync(resolve(root, file))) failures.push(`missing ${file}`);
}

for (const page of pages) {
  const html = readFileSync(resolve(root, page), 'utf8');
  for (const href of requiredHeadLinks) {
    if (!html.includes(href)) failures.push(`${page} missing ${href}`);
  }
  if (!html.includes('<meta name="theme-color" content="#fff3d6" />')) {
    failures.push(`${page} missing theme color`);
  }
}

const manifest = JSON.parse(readFileSync(resolve(root, 'public/site.webmanifest'), 'utf8'));
if (manifest.name !== 'Little Surprise') failures.push('manifest name mismatch');
if (!manifest.icons?.some((icon) => icon.src === './android-chrome-192x192.png' && icon.sizes === '192x192')) failures.push('manifest missing 192 icon');
if (!manifest.icons?.some((icon) => icon.src === './android-chrome-512x512.png' && icon.sizes === '512x512')) failures.push('manifest missing 512 icon');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Higgsfield favicon assets and head links are present.');
