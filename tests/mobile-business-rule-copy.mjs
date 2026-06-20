import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true });
const errors = [];
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
page.on('pageerror', (err) => errors.push(err.message));
await page.goto('http://127.0.0.1:4175/products.html', { waitUntil: 'networkidle' });
const result = await page.evaluate(() => {
  const text = document.body.innerText;
  return {
    hasMinSpend: text.includes('最低消費 HK$250'),
    hasDeliveryFee: text.includes('送貨另加運費'),
    hasSignalCall: text.includes('WhatsApp / Signal / Call'),
    topbar: [...document.querySelectorAll('.catalogue-topbar span')].map((span) => span.innerText),
    orderCards: document.querySelectorAll('#orderHelp article').length,
    overflow: document.documentElement.scrollWidth - window.innerWidth,
  };
});
await browser.close();

if (errors.length) throw new Error(`Console errors: ${errors.join('\n')}`);
for (const key of ['hasMinSpend', 'hasDeliveryFee', 'hasSignalCall']) {
  if (!result[key]) throw new Error(`Missing business rule flag: ${key}`);
}
if (result.orderCards !== 5) throw new Error(`Expected 5 order help cards, found ${result.orderCards}`);
if (result.overflow > 1) throw new Error(`Horizontal overflow detected: ${result.overflow}px`);
console.log(JSON.stringify(result, null, 2));
