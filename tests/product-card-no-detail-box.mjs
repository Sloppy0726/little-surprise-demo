import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const main = readFileSync(resolve(root, 'src/main.js'), 'utf8');
const styles = readFileSync(resolve(root, 'src/styles.css'), 'utf8');

const failures = [];

if (main.includes('card-detail')) {
  failures.push('Product card template should not render the old small card-detail box.');
}

if (main.includes('▢')) {
  failures.push('Product card template should not render the old square glyph.');
}

if (/\.catalogue-reference\s+\.card-detail|\.card-detail\s*\{/.test(styles)) {
  failures.push('Stylesheet should not keep visible card-detail box styles.');
}

if (!/class="card-line"><span class="ask-price">\$\{p\.price\}<\/span><\/div>/.test(main)) {
  failures.push('Product card price row should contain only the price span.');
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Product cards no longer render the small detail box.');
