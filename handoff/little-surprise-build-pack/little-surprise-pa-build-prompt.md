# PA Build Prompt — Little Surprise Website Demo

I want you to build a speculative website demo for **Little Surprise / little.surprise_hk**, a Hong Kong cake and dessert shop.

## Goal

Create a polished, conversion-focused dessert ordering/catalog website concept that upgrades Little Surprise's current simple Canva page into a more professional website. The demo should help customers browse dessert categories, understand ordering rules, trust the business, and contact via WhatsApp/Signal quickly.

This is a **speculative sales demo**, not a confirmed client project.

## Important context

- Business: Little Surprise / `little.surprise_hk`
- Category: handmade French desserts / cake and dessert shop
- Area: Tsuen Wan, Hong Kong
- Dedicated Telegram workspace topic: **Sloppy HQ / Little Surprise**, topic ID **1852**. Use that topic for build updates, previews, screenshots, files, design-reference images, and follow-up questions.
- Current Canva site: https://littlesurprisehk.my.canva.site
- Instagram: https://www.instagram.com/little.surprise_hk/?hl=en
- Facebook/search result: https://www.facebook.com/people/littlesurprise_hk/100063725274798/
- SHOP100 listing: https://shop100.hk/listing/little-surprise_hk/
- Search snippets also mention an old Weebly presence: `littlesurprisehk.weebly.com`

Do **not** pitch this as “they have no website.” They already have a Canva site and possibly an older Weebly page. The pitch is:

> “Your desserts and Instagram are strong, but the current Canva page is too basic. I made a more polished ordering/catalog website concept to help customers browse products, understand ordering details, and WhatsApp you faster.”

## Design reference images

Sloppy will provide one or more **design reference images/screenshots** together with this prompt. Treat those images as the **primary visual direction** for the demo.

Use the images to match as closely as practical:

- overall layout and section order,
- spacing and rhythm,
- typography scale and hierarchy,
- colour palette and contrast,
- card styles, buttons, borders, shadows,
- hero composition, product/gallery layout,
- mobile/desktop proportions if screenshots show them.

Important rules for using the references:

- Do **not** ignore the attached screenshots and make a generic dessert landing page.
- Do **not** copy unrelated brand names, private text, or fake business details from the references unless Sloppy explicitly says to.
- Preserve Little Surprise’s real/public business information while using the screenshots for visual design.
- If a reference image shows a component that conflicts with Little Surprise’s actual ordering flow, adapt the component visually but keep the content accurate.
- If multiple images are provided, identify which screenshot controls which page/section before building.
- In the final report, say how closely the implementation follows the references and list any intentional deviations.

## Public evidence to use carefully

Use only public evidence. Do not invent private details.

Known public details from review:

- Instagram profile showed about **21.5K followers**, **228 posts**, and **679 following** at review time.
- Instagram bio: handmade French desserts, WhatsApp enquiries/orders via **55310947** or DM.
- Current Canva site says:
  - “Little Surprise .”
  - “CAKE & DESSERT”
  - Product categories: `MOUSSE / TART / ROLL / BUTTERCAKE / BUTTERMOCHICAKE / SOFTCOOKIES / CHEESECAKE`
  - Minimum order: **最低消費 $250 (+運費)**
  - Contact/order: WhatsApp / Signal / Call
  - Address: **荃灣德士古道大廈B座 5樓 07室 F房**
  - Email: **littlesurprisehk0912@gmail.com**
  - Phone: **(+852) 55310947**
  - Social handle: **Little.surprise_hk**
- Search snippets mention:
  - handmade French desserts
  - no artificial colouring / 無添加任何人工色素
  - licensed food workshop / food manufacturing licence references
  - 散水餅, 升職餅, 到會甜品
  - media/directory recommendations for farewell cakes / 散水餅

If a detail is not directly visible while building, label it as “based on public search snippets” or omit it.

## Safety / honesty rules

- Do not contact the business.
- Do not claim affiliation with Little Surprise.
- Do not claim this is their official site.
- Add a visible disclaimer in the footer: **“Speculative website concept only — not affiliated with Little Surprise.”**
- Do not use private or copyrighted images unless they are clearly allowed. If you use public Instagram/product visuals as placeholders, label them as placeholders and explain they should be replaced with licensed/owner-approved images.
- Do not invent prices, menu items, delivery zones, live stock, reviews, or licence numbers.
- If exact product photos/prices cannot be used safely, use elegant placeholder cards with category names and generic dessert copy.

## Build requirements

Build an actual working local website demo. Do not just write a plan.

Preferred implementation:

- Use a simple modern static site or Vite/React project depending on the current workspace.
- Mobile-first design.
- Fast, clean, and easy to screenshot/share.
- No paid APIs.
- No backend required.
- WhatsApp CTA should link to `https://wa.me/85255310947` with a short prefilled enquiry message if implemented.

Before creating files:

1. Inspect the current project folder.
2. If it is already a web project, integrate without overwriting unrelated files.
3. If the folder is empty or no project exists, create a clean new static/Vite project.
4. Initialize git if the project is not already a git repository.

## Design direction

The attached design reference images are the main design direction. Build the Little Surprise demo by adapting those references into a dessert-ordering/catalogue site.

If the images do not specify a detail, use this fallback style:

- Premium but friendly dessert/patisserie feel.
- Soft cream / warm beige / blush pink / chocolate brown / berry accent palette.
- Elegant, appetising, local HK, and approachable.
- Strong hero section with dessert imagery/illustration.
- Rounded cards, soft shadows, editorial product grid, and clear CTA buttons.
- Avoid generic corporate SaaS design.
- Make it feel like an upgrade from a Canva poster into a real order-focused website.

## Required page sections

Create a single-page website with these sections:

1. **Hero**
   - Brand: Little Surprise
   - Headline around handmade French desserts in Hong Kong.
   - Mention occasions: 散水餅 / 升職餅 / 到會甜品 / party desserts.
   - Primary CTA: WhatsApp order/enquiry.
   - Secondary CTA: browse dessert categories.

2. **Why customers choose Little Surprise**
   - Handmade desserts.
   - No artificial colouring if using snippet evidence; phrase carefully.
   - Tsuen Wan workshop / pickup or ordering base.
   - Suitable for office farewell, promotion, gatherings, parties.

3. **Dessert categories / catalogue preview**
   Cards for:
   - Mousse
   - Tart
   - Roll
   - Butter Cake
   - Butter Mochi Cake
   - Soft Cookies
   - Cheesecake

   Each card should include short attractive copy and a “Ask on WhatsApp” or “Enquire” button.
   Do not invent exact prices unless public evidence clearly shows them.

4. **Occasion-based ordering**
   - Farewell cakes / 散水餅
   - Promotion cakes / 升職餅
   - Catering desserts / 到會甜品
   - Birthday / party desserts

5. **How to order**
   Simple 3–4 step flow:
   - Choose dessert type / quantity.
   - Send date and pickup/delivery requirement.
   - Confirm availability and payment.
   - Pickup/delivery arrangement.

6. **Order details**
   - Minimum order: HK$250 + delivery, based on Canva site.
   - WhatsApp / Signal / Call: +852 55310947.
   - Email: littlesurprisehk0912@gmail.com.
   - Address: 荃灣德士古道大廈B座 5樓 07室 F房.
   - Add a note that details should be verified with the shop before real launch.

7. **Social proof / trust**
   - Mention 21K+ Instagram followers as public profile evidence if still visible.
   - Mention customer review/highlight style without inventing quotes.
   - Mention media/directory snippets carefully if used: “Featured in public dessert/farewell cake recommendation listings” rather than naming awards.

8. **FAQ**
   Include practical questions:
   - How early should I order?
   - Can I order for office farewell/promotion?
   - Is there a minimum order?
   - Do you offer delivery/pickup?
   - Can I ask about flavours on WhatsApp?

   If answers are not public, phrase as “Please confirm on WhatsApp.”

9. **Sticky CTA / footer**
   - Persistent WhatsApp button on mobile.
   - Footer with disclaimer: “Speculative website concept only — not affiliated with Little Surprise.”

## UX details

- The current Canva page’s “Order Now” should become a real action in the demo.
- Make WhatsApp buttons obvious and repeated.
- Use bilingual microcopy where useful: English headings with Traditional Chinese support, or vice versa.
- Prioritize mobile ordering flow: most customers likely come from Instagram.
- Make tap targets large.
- Avoid cluttered menus/filters.

## Deliverables

Create:

1. Working website demo files.
2. README with:
   - what this demo is,
   - how to run locally,
   - what public information was used,
   - what is placeholder/demo-only,
   - suggested outreach angle.
3. Optional `OUTREACH.md` with short outreach messages in Traditional Chinese and English.
4. Screenshots if possible.

## Suggested outreach message

Traditional Chinese:

```text
你好，我見到 Little Surprise 嘅甜品款式同 IG 都好吸引，散水餅、升職餅同到會甜品好適合用網站整理清楚。我試整咗一個簡單網站 demo，方便客人睇甜品分類、落單方法、最低消費同直接 WhatsApp 查詢。呢個只係免費概念，無壓力，想唔想我 send 畀你睇？
```

English:

```text
Hi, I came across Little Surprise and really liked your handmade dessert range. I made a quick website concept that makes it easier for customers to browse dessert categories, understand ordering details, and WhatsApp you directly. It’s just a free demo, no obligation — would you like me to send it over?
```

## Verification requirements

Before final response:

1. Run the app locally.
2. Open it in a browser if possible.
3. Verify the page renders correctly on desktop and mobile-sized viewport if possible.
4. Compare the implementation visually against the provided design reference images and fix obvious mismatches in layout, spacing, colour, typography, and section composition.
5. Check WhatsApp links format correctly.
6. Check there is a visible disclaimer.
7. Check no private/invented data is presented as fact.
8. Commit changes to git if this is a project repository and the demo is working.

## Final response format

Reply with:

- What you built.
- Local preview URL.
- Files created/changed.
- What was verified in browser.
- How closely the result matches the provided design reference images, including any intentional deviations.
- What information is real public evidence vs placeholder/demo-only.
- Any risks or follow-up items.
- One clear next action for Sloppy.
