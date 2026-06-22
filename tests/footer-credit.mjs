import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const pages = ['index.html', 'products.html', 'reviews.html', 'about.html', 'privacy-policy.html', 'terms-and-conditions.html'];
const failures = [];

for (const page of pages) {
  const html = readFileSync(resolve(root, page), 'utf8');
  if (!html.includes('class="site-credit"')) failures.push(`${page} missing site-credit class`);
  if (!html.includes('Website created by')) failures.push(`${page} missing Website created by copy`);
  if (!html.includes('https://solara.hk')) failures.push(`${page} missing Solara.hk link`);
}

const css = readFileSync(resolve(root, 'src/styles.css'), 'utf8');
if (!css.includes('.site-credit')) failures.push('styles.css missing site-credit styles');
if (!css.includes('justify-self: end')) failures.push('site-credit should align bottom/right inside footer legal column on desktop');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Footer Solara.hk credit is present on every page.');
