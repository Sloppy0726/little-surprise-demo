const products = [
  { name: '檸檬撻', type: 'tart', img: '/assets/lemon-tart.jpg', copy: '清爽檸檬香氣，適合下午茶與派對分享。', badge: '熱賣' },
  { name: '朱古力布朗尼撻', type: 'tart', img: '/assets/chocolate-tart.jpg', copy: '濃郁朱古力，適合朱古力控。', badge: '熱賣' },
  { name: '焦糖海鹽朱古力撻', type: 'tart', img: '/assets/caramel-tart.jpg', copy: '焦糖、海鹽與朱古力的經典層次。', badge: '熱賣' },
  { name: '藍莓芝士撻', type: 'tart', img: '/assets/blueberry-tart.jpg', copy: '酸甜莓果配芝士口感，資料需確認。', badge: '' },
  { name: '法式焦糖燉蛋撻', type: 'tart', img: '/assets/egg-tart.jpg', copy: '法式 custard inspiration，價格不作展示。', badge: '' },
  { name: '抹茶紅豆忌廉卷', type: 'roll', img: '/assets/matcha-roll.jpg', copy: '抹茶與紅豆，適合茶味甜品客人。', badge: '' },
  { name: '伯爵茶忌廉卷', type: 'roll', img: '/assets/earl-roll.jpg', copy: '茶香輕盈，適合辦公室分享。', badge: '' },
  { name: '海鹽朱古力慕絲蛋糕', type: 'mousse', img: '/assets/choco-cake.jpg', copy: '慕絲蛋糕類別示意，供應需 WhatsApp 確認。', badge: '熱賣' },
  { name: '芒果熱情果芝士蛋糕', type: 'cake', img: '/assets/mango-cheesecake.jpg', copy: '水果系派對甜品概念。', badge: '' },
  { name: '桂花黑糖蛋糕', type: 'seasonal', img: '/assets/cream-cake.jpg', copy: '季節限定風味示意。', badge: '' },
  { name: 'Butter Cake', type: 'cake', img: '/assets/catalogue-banner-desserts.jpg', copy: '牛油蛋糕分類卡，正式圖文待店方提供。', badge: '' },
  { name: 'Soft Cookies', type: 'seasonal', img: '/assets/hero-dessert-board.jpg', copy: 'Soft cookies 分類，適合加進 catalogue。', badge: '' },
];

const grid = document.querySelector('#productGrid');
const waBase = 'https://wa.me/85255310947?text=';
const encode = (name) => encodeURIComponent(`你好，想查詢 Little Surprise ${name} 訂購資料。`);

function renderProducts(filter = 'all') {
  const selected = filter === 'all' ? products : products.filter((p) => p.type === filter);
  grid.innerHTML = selected.map((p) => `
    <article class="catalogue-card" data-type="${p.type}">
      <div class="image-wrap">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
        <img src="${p.img}" alt="${p.name} demo product image" />
      </div>
      <div class="card-copy">
        <h3>${p.name}</h3>
        <p>${p.copy}</p>
        <div><span class="ask-price">Ask price</span><a href="${waBase}${encode(p.name)}" aria-label="Ask about ${p.name} on WhatsApp">⌑</a></div>
      </div>
    </article>
  `).join('');
}

renderProducts();

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    renderProducts(button.dataset.filter);
  });
});

let qty = 1;
const qtyOutput = document.querySelector('#qty');
document.querySelectorAll('[data-qty]').forEach((button) => {
  button.addEventListener('click', () => {
    qty += button.dataset.qty === 'plus' ? 1 : -1;
    qty = Math.max(1, Math.min(qty, 20));
    qtyOutput.textContent = qty;
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Basic link health marker for manual browser QA.
window.__littleSurpriseDemo = {
  whatsappLinks: [...document.querySelectorAll('a[href^="https://wa.me/85255310947"]')].length,
  disclaimer: document.body.textContent.includes('Speculative website concept only'),
  products: products.length,
};
