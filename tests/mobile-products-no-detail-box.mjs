import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true });
const errors = [];
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
page.on('pageerror', (err) => errors.push(err.message));
await page.goto('http://127.0.0.1:4175/products.html', { waitUntil: 'networkidle' });
const result = await page.evaluate(() => {
  const fixedButtons = [...document.querySelectorAll('.card-detail')].length;
  const squareGlyphs = document.body.innerText.includes('▢');
  const rows = [...document.querySelectorAll('.catalogue-card .card-line')].slice(0, 4).map((row) => row.innerHTML.trim());
  const overflow = document.documentElement.scrollWidth - window.innerWidth;
  return { fixedButtons, squareGlyphs, rows, overflow, cardCount: document.querySelectorAll('.catalogue-card').length };
});
await page.screenshot({ path: 'artifacts/mobile-products-no-detail-box.png', fullPage: true });
await browser.close();

if (errors.length) throw new Error(`Console errors: ${errors.join('\n')}`);
if (result.fixedButtons !== 0) throw new Error(`Expected no .card-detail boxes, found ${result.fixedButtons}`);
if (result.squareGlyphs) throw new Error('Square glyph still visible in page text');
if (result.overflow > 1) throw new Error(`Horizontal overflow detected: ${result.overflow}px`);
if (!result.rows.every((html) => html === '<span class="ask-price">HK$35</span>' || html === '<span class="ask-price">HK$27</span>' || html === '<span class="ask-price">HK$148</span>')) {
  throw new Error(`Unexpected price rows: ${JSON.stringify(result.rows)}`);
}
console.log(JSON.stringify(result, null, 2));
