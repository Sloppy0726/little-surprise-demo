const products = [
  { name: '檸檬撻', type: 'tart', img: '/assets/lemon-tart.jpg', detail: '/assets/detail-hero-tart.jpg', copy: '清爽檸檬香氣，適合下午茶與派對分享。', badge: '熱賣', notes: ['酸甜平衡', '法式撻底', '適合 4–6 人分享'] },
  { name: '朱古力布朗尼撻', type: 'tart', img: '/assets/chocolate-tart.jpg', detail: '/assets/chocolate-tart.jpg', copy: '濃郁朱古力，適合朱古力控。', badge: '熱賣', notes: ['濃厚可可', '布朗尼口感', '派對人氣款'] },
  { name: '焦糖海鹽朱古力撻', type: 'tart', img: '/assets/caramel-tart.jpg', detail: '/assets/detail-hero-tart.jpg', copy: '焦糖、海鹽與朱古力的經典層次。', badge: '熱賣', notes: ['自家焦糖', '海鹽點綴', '參考詳情頁主打'] },
  { name: '藍莓芝士撻', type: 'tart', img: '/assets/blueberry-tart.jpg', detail: '/assets/blueberry-tart.jpg', copy: '酸甜莓果配芝士口感，資料需確認。', badge: '', notes: ['莓果香氣', '芝士口感', '供應需確認'] },
  { name: '法式焦糖燉蛋撻', type: 'tart', img: '/assets/egg-tart.jpg', detail: '/assets/egg-tart.jpg', copy: '法式 custard inspiration，價格不作展示。', badge: '', notes: ['焦糖面', '幼滑 custard', '冷藏享用'] },
  { name: '抹茶紅豆忌廉卷', type: 'roll', img: '/assets/matcha-roll.jpg', detail: '/assets/matcha-roll.jpg', copy: '抹茶與紅豆，適合茶味甜品客人。', badge: '', notes: ['茶香忌廉', '紅豆層次', '辦公室分享'] },
  { name: '伯爵茶忌廉卷', type: 'roll', img: '/assets/earl-roll.jpg', detail: '/assets/earl-roll.jpg', copy: '茶香輕盈，適合辦公室分享。', badge: '', notes: ['伯爵茶香', '輕盈忌廉', '適合下午茶'] },
  { name: '海鹽朱古力慕絲蛋糕', type: 'mousse', img: '/assets/choco-cake.jpg', detail: '/assets/choco-cake.jpg', copy: '慕絲蛋糕類別示意，供應需 WhatsApp 確認。', badge: '熱賣', notes: ['幼滑慕絲', '朱古力主調', '生日派對'] },
  { name: '芒果熱情果芝士蛋糕', type: 'cake', img: '/assets/mango-cheesecake.jpg', detail: '/assets/mango-cheesecake.jpg', copy: '水果系派對甜品概念。', badge: '', notes: ['熱帶果香', '芝士底', '季節供應'] },
  { name: '桂花黑糖蛋糕', type: 'seasonal', img: '/assets/cream-cake.jpg', detail: '/assets/cream-cake.jpg', copy: '季節限定風味示意。', badge: '', notes: ['桂花香', '黑糖層次', '限定口味'] },
  { name: 'Butter Cake', type: 'cake', img: '/assets/catalogue-banner-desserts.jpg', detail: '/assets/catalogue-banner-desserts.jpg', copy: '牛油蛋糕分類卡，正式圖文待店方提供。', badge: '', notes: ['經典牛油香', '適合送禮', '資料待確認'] },
  { name: 'Soft Cookies', type: 'seasonal', img: '/assets/hero-dessert-board.jpg', detail: '/assets/hero-dessert-board.jpg', copy: 'Soft cookies 分類，適合加進 catalogue。', badge: '', notes: ['小食分享', '口味可查詢', '適合散水餅'] },
];

const waBase = 'https://wa.me/85255310947?text=';
const encode = (name) => encodeURIComponent(`你好，想查詢 Little Surprise ${name} 訂購資料。`);
const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

function productCard(p) {
  return `
    <article class="catalogue-card product-open" data-type="${p.type}" data-product="${p.name}" tabindex="0" role="button" aria-label="查看 ${p.name} 詳情">
      <div class="image-wrap">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
        <img src="${assetPath(p.img)}" alt="${p.name} demo product image" />
      </div>
      <div class="card-copy">
        <h3>${p.name}</h3>
        <p>${p.copy}</p>
        <div><span class="ask-price">Ask price</span><span class="card-detail">詳情</span></div>
      </div>
    </article>
  `;
}

function renderProducts(filter = 'all') {
  const grid = document.querySelector('#productGrid');
  if (!grid) return;
  const selected = filter === 'all' ? products : products.filter((p) => p.type === filter);
  grid.innerHTML = selected.map(productCard).join('');
  bindProductCards();
}

function openProduct(name) {
  const p = products.find((item) => item.name === name) || products[2];
  const modal = document.querySelector('#productModal');
  if (!modal) return;
  modal.querySelector('[data-modal-img]').src = assetPath(p.detail || p.img);
  modal.querySelector('[data-modal-img]').alt = `${p.name} product detail reference image`;
  modal.querySelector('[data-modal-breadcrumb]').textContent = `首頁 › Product Catalogue › ${p.name}`;
  modal.querySelector('[data-modal-title]').textContent = p.name;
  modal.querySelector('[data-modal-copy]').textContent = `${p.copy} 這裡採用你之前提供的 product detail reference：點擊產品後彈出大圖、資料、數量與查詢 CTA。`;
  modal.querySelector('[data-modal-notes]').innerHTML = p.notes.map((note) => `<li>${note}</li>`).join('');
  modal.querySelector('[data-modal-wa]').href = `${waBase}${encode(p.name)}`;
  modal.showModal();
  document.body.classList.add('modal-open');
}

function closeProduct() {
  const modal = document.querySelector('#productModal');
  if (!modal) return;
  modal.close();
  document.body.classList.remove('modal-open');
}

function bindProductCards() {
  document.querySelectorAll('.product-open').forEach((card) => {
    card.addEventListener('click', () => openProduct(card.dataset.product));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProduct(card.dataset.product);
      }
    });
  });
}

renderProducts();

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    renderProducts(button.dataset.filter);
  });
});

document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', closeProduct));
document.querySelector('#productModal')?.addEventListener('click', (event) => {
  if (event.target.id === 'productModal') closeProduct();
});

let qty = 1;
const qtyOutput = document.querySelector('#qty');
document.querySelectorAll('[data-qty]').forEach((button) => {
  button.addEventListener('click', () => {
    qty += button.dataset.qty === 'plus' ? 1 : -1;
    qty = Math.max(1, Math.min(qty, 20));
    if (qtyOutput) qtyOutput.textContent = qty;
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

window.__littleSurpriseDemo = {
  whatsappLinks: [...document.querySelectorAll('a[href^="https://wa.me/85255310947"]')].length,
  disclaimer: document.body.textContent.includes('Speculative website concept only'),
  products: products.length,
  dedicatedProductPage: Boolean(document.querySelector('#productGrid')),
  modal: Boolean(document.querySelector('#productModal')),
};
