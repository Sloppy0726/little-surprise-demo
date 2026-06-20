import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const files = ['index.html', 'products.html', 'about.html', 'privacy-policy.html', 'terms-and-conditions.html', 'src/main.js'];
const contents = Object.fromEntries(files.map((file) => [file, readFileSync(resolve(root, file), 'utf8')]));
const failures = [];

const requiredSnippets = [
  ['products.html', '最低消費 HK$250'],
  ['products.html', '送貨另加運費'],
  ['products.html', 'WhatsApp / Signal / Call'],
  ['index.html', '最低消費 HK$250'],
  ['index.html', 'WhatsApp / Signal / Call'],
  ['about.html', '最低消費 HK$250'],
  ['about.html', 'WhatsApp / Signal / Call: 5531 0947'],
  ['terms-and-conditions.html', '查詢及落單最低消費為 HK$250'],
  ['terms-and-conditions.html', '送貨費另計'],
  ['privacy-policy.html', 'WhatsApp / Signal / 電話：+852 5531 0947'],
  ['src/main.js', '最低消費：HK$250（送貨另加運費）'],
  ['src/main.js', '聯絡方式：WhatsApp / Signal / Call'],
];

for (const [file, snippet] of requiredSnippets) {
  if (!contents[file].includes(snippet)) failures.push(`${file} missing: ${snippet}`);
}

for (const file of ['index.html', 'products.html', 'reviews.html', 'about.html', 'privacy-policy.html', 'terms-and-conditions.html']) {
  const text = readFileSync(resolve(root, file), 'utf8');
  if (!text.includes('最低消費 HK$250（另加運費）')) failures.push(`${file} topbar missing minimum-spend delivery rule`);
  if (!text.includes('☏ WhatsApp / Signal / Call: 5531 0947')) failures.push(`${file} topbar missing WhatsApp / Signal / Call contact copy`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Business rule copy is present across order surfaces.');
