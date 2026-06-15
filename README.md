# Little Surprise Website Demo

Speculative website concept for **Little Surprise / little.surprise_hk**, a Hong Kong handmade French dessert shop.

This demo is a **Canva-site upgrade / dessert ordering catalogue concept**, not an official website and not an affiliation claim.

## Run locally

```bash
npm install
npm run dev -- --port 51852 --strictPort
```

Open: http://127.0.0.1:51852/

Build check:

```bash
npm run build
```

## What was built

- Single-page ordering/catalogue website inspired closely by the provided reference screenshots.
- Homepage hero matching the supplied layout: top announcement bar, logo/nav/action icons, warm cream hero, large Little Surprise title, right-side dessert board, trust/service strip.
- Product catalogue section matching the supplied catalogue screenshot: banner, left filter sidebar, selected tags/sort row, product grid cards, badges, and load-more button.
- Product-detail inspired section matching the detail screenshot: large gallery image, thumbnails, right-hand product info, quantity controls, primary/secondary CTA buttons, trust strip, tabbed description panel.
- Required business sections: why choose, occasions, how to order, order details, FAQ, sticky WhatsApp CTA, disclaimer footer.

## Public information used

From the handoff prompt / public evidence:

- Business name: Little Surprise / little.surprise_hk
- Category: handmade French desserts / cake and dessert shop
- Area: Tsuen Wan, Hong Kong
- Current Canva site: https://littlesurprisehk.my.canva.site
- Instagram: https://www.instagram.com/little.surprise_hk/?hl=en
- Phone / WhatsApp / Signal / Call: +852 5531 0947
- Email: littlesurprisehk0912@gmail.com
- Address: 荃灣德士古道大廈B座 5樓 07室 F房
- Minimum order: HK$250 + delivery, based on Canva site
- Product categories: Mousse, Tart, Roll, Butter Cake, Butter Mochi Cake, Soft Cookies, Cheesecake
- IG follower count and handmade/no-artificial-colouring/licensed-workshop claims are treated as handoff/public-snippet evidence, not independently re-confirmed in this build.

## Placeholder / demo-only items

- Product images are local crops from the supplied design reference screenshots, used only to match visual direction in this internal speculative demo.
- Product prices, stock, flavour details, availability, delivery zones, and licence details are not invented; the UI asks customers to confirm on WhatsApp.
- Final launch would need Little Surprise approval and owner-licensed product images/copy.

## Reference match notes

- `design-03-homepage.jpg` controls the homepage: announcement bar, large logo/nav, hero split with dessert image, four trust icons, popular-products row, bottom trust strip.
- `design-02-product-catalogue.jpg` controls the catalogue: top banner, left filters, product grid, gold badges, sort/dropdown rhythm.
- `design-01-product-detail.jpg` controls the product-detail block: large gallery, thumbnails, right-side info, quantity selector, add/buy buttons, info strip, tabbed description.

Intentional deviations:

- This is a single-page demo per prompt, so catalogue/detail are sections rather than separate pages.
- Exact prices from the reference screenshots were removed because the prompt says not to invent or present unverified prices.
- Some icons are CSS/text approximations to avoid extra icon libraries and keep the demo static/local.

## Suggested outreach angle

Use the Canva-upgrade angle:

> Your desserts and Instagram are strong, but the current Canva page is too basic. I made a more polished ordering/catalog website concept to help customers browse products, understand ordering details, and WhatsApp you faster.
