const products = [
  { name: '檸檬撻', type: 'tart', img: '/assets/lemon-tart.jpg', detail: '/assets/detail-hero-tart.jpg', price: 'HK$32', priceNum: 32, flavors: ['fruit'], availability: 'in-stock', hot: true, sortOrder: 12, copy: '清爽檸檬香氣，適合下午茶與派對分享。', badge: '熱賣', notes: ['酸甜平衡', '法式撻底', '適合 4–6 人分享'] },
  { name: '朱古力布朗尼撻', type: 'tart', img: '/assets/chocolate-tart.jpg', detail: '/assets/chocolate-tart.jpg', price: 'HK$36', priceNum: 36, flavors: ['chocolate'], availability: 'in-stock', hot: true, sortOrder: 11, copy: '濃郁朱古力，適合朱古力控。', badge: '熱賣', notes: ['濃厚可可', '布朗尼口感', '派對人氣款'] },
  { name: '焦糖海鹽朱古力撻', type: 'tart', img: '/assets/caramel-tart.jpg', detail: '/assets/detail-hero-tart.jpg', price: 'HK$38', priceNum: 38, flavors: ['chocolate', 'caramel'], availability: 'preorder', hot: true, sortOrder: 10, copy: '焦糖、海鹽與朱古力的經典層次。', badge: '熱賣', notes: ['自家焦糖', '海鹽點綴', '參考詳情頁主打'] },
  { name: '藍莓芝士撻', type: 'tart', img: '/assets/blueberry-tart.jpg', detail: '/assets/blueberry-tart.jpg', price: 'HK$34', priceNum: 34, flavors: ['fruit', 'cheese'], availability: 'preorder', hot: false, sortOrder: 9, copy: '酸甜莓果配芝士口感，資料需確認。', badge: '', notes: ['莓果香氣', '芝士口感', '供應需確認'] },
  { name: '法式焦糖燉蛋撻', type: 'tart', img: '/assets/egg-tart.jpg', detail: '/assets/egg-tart.jpg', price: 'HK$28', priceNum: 28, flavors: ['caramel', 'other'], availability: 'in-stock', hot: false, sortOrder: 8, copy: '法式 custard inspiration，價格不作展示。', badge: '', notes: ['焦糖面', '幼滑 custard', '冷藏享用'] },
  { name: '抹茶紅豆忌廉卷', type: 'roll', img: '/assets/matcha-roll.jpg', detail: '/assets/matcha-roll.jpg', price: 'HK$34', priceNum: 34, flavors: ['matcha'], availability: 'preorder', hot: true, sortOrder: 7, copy: '抹茶與紅豆，適合茶味甜品客人。', badge: '熱賣', notes: ['茶香忌廉', '紅豆層次', '辦公室分享'] },
  { name: '伯爵茶忌廉卷', type: 'roll', img: '/assets/earl-roll.jpg', detail: '/assets/earl-roll.jpg', price: 'HK$32', priceNum: 32, flavors: ['earl-grey'], availability: 'in-stock', hot: false, sortOrder: 6, copy: '茶香輕盈，適合辦公室分享。', badge: '', notes: ['伯爵茶香', '輕盈忌廉', '適合下午茶'] },
  { name: '海鹽朱古力慕絲蛋糕', type: 'mousse', img: '/assets/choco-cake.jpg', detail: '/assets/choco-cake.jpg', price: 'HK$48', priceNum: 48, flavors: ['chocolate'], availability: 'preorder', hot: true, sortOrder: 5, copy: '慕絲蛋糕類別示意，供應需 WhatsApp 確認。', badge: '熱賣', notes: ['幼滑慕絲', '朱古力主調', '生日派對'] },
  { name: '芒果熱情果慕絲', type: 'mousse', img: '/assets/mango-cheesecake.jpg', detail: '/assets/mango-cheesecake.jpg', price: 'HK$46', priceNum: 46, flavors: ['fruit', 'cheese'], availability: 'preorder', hot: false, sortOrder: 4, copy: '水果系派對甜品概念。', badge: '', notes: ['熱帶果香', '芝士底', '季節供應'] },
  { name: '桂花黑糖蛋糕', type: 'cake', img: '/assets/cream-cake.jpg', detail: '/assets/cream-cake.jpg', price: 'HK$42', priceNum: 42, flavors: ['other'], availability: 'preorder', hot: false, sortOrder: 3, copy: '季節限定風味示意。', badge: '', notes: ['桂花香', '黑糖層次', '限定口味'] },
  { name: 'Butter Cake', type: 'cake', img: '/assets/catalogue-banner-desserts.jpg', detail: '/assets/catalogue-banner-desserts.jpg', price: 'HK$58', priceNum: 58, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 2, copy: '牛油蛋糕分類卡，正式圖文待店方提供。', badge: '', notes: ['經典牛油香', '適合送禮', '資料待確認'] },
  { name: '迷你牛角酥', type: 'croissant', img: '/assets/hero-dessert-board.jpg', detail: '/assets/hero-dessert-board.jpg', price: 'HK$30', priceNum: 30, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 2, copy: '迷你牛角酥，適合派對小食與散水餅分享。', badge: '', notes: ['酥皮口感', '適合分享', '可 WhatsApp 查詢口味'] },
  { name: 'Soft Cookies', type: 'seasonal', img: '/assets/hero-dessert-board.jpg', detail: '/assets/hero-dessert-board.jpg', price: 'HK$26', priceNum: 26, flavors: ['chocolate', 'other'], availability: 'in-stock', hot: false, sortOrder: 1, copy: 'Soft cookies 分類，適合加進 catalogue。', badge: '', notes: ['小食分享', '口味可查詢', '適合散水餅'] },
];

const waBase = 'https://wa.me/85255310947?text=';
const encode = (name) => encodeURIComponent(`你好，想查詢 Little Surprise ${name} 訂購資料。`);
const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const catalogueState = {
  category: 'all',
  price: new Set(),
  flavor: new Set(),
  availability: new Set(),
  sort: 'latest',
  visibleLimit: 10,
};

const labelMap = {
  all: '全部產品', tart: 'TART 撻類', mousse: 'MOUSSE 慕絲蛋糕', roll: 'ROLL CAKE 長條卷蛋', cake: 'CAKE 蛋糕', croissant: 'CROISSANT 牛角酥', seasonal: '季節限定',
  '0-50': 'HK$0 - HK$50', '50-100': 'HK$50 - HK$100', '100-150': 'HK$100 - HK$150', '150+': 'HK$150 或以上',
  chocolate: '朱古力', matcha: '抹茶', cheese: '芝士', fruit: '水果', caramel: '焦糖 / 咖啡', 'earl-grey': '伯爵茶', other: '其他',
  'in-stock': '現貨供應', preorder: '需預訂',
};


function countForFilter(group, value) {
  if (group === 'category') return value === 'all' ? products.length : products.filter((p) => p.type === value).length;
  if (group === 'price') return products.filter((p) => priceMatches(p, new Set([value]))).length;
  if (group === 'flavor') return products.filter((p) => p.flavors.includes(value)).length;
  if (group === 'availability') return products.filter((p) => p.availability === value).length;
  return 0;
}

function updateFilterCounts() {
  document.querySelectorAll('.filter[data-filter]').forEach((button) => {
    const count = countForFilter('category', button.dataset.filter);
    const counter = button.querySelector('em');
    if (counter) counter.textContent = count;
  });

  document.querySelectorAll('[data-filter-group]').forEach((input) => {
    const label = input.closest('label');
    const counter = label?.querySelector('em');
    if (counter) counter.textContent = `(${countForFilter(input.dataset.filterGroup, input.value)})`;
  });
}

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
        <div class="card-line"><span class="ask-price">${p.price}</span><span class="card-detail" aria-hidden="true">▢</span></div>
      </div>
    </article>
  `;
}

function priceMatches(product, ranges) {
  if (!ranges.size) return true;
  return [...ranges].some((range) => {
    if (range === '0-50') return product.priceNum >= 0 && product.priceNum < 50;
    if (range === '50-100') return product.priceNum >= 50 && product.priceNum < 100;
    if (range === '100-150') return product.priceNum >= 100 && product.priceNum < 150;
    if (range === '150+') return product.priceNum >= 150;
    return true;
  });
}

function getFilteredProducts() {
  let selected = products.filter((p) => {
    const categoryOk = catalogueState.category === 'all' || p.type === catalogueState.category;
    const priceOk = priceMatches(p, catalogueState.price);
    const flavorOk = !catalogueState.flavor.size || [...catalogueState.flavor].some((f) => p.flavors.includes(f));
    const availabilityOk = !catalogueState.availability.size || catalogueState.availability.has(p.availability);
    return categoryOk && priceOk && flavorOk && availabilityOk;
  });

  if (catalogueState.sort === 'hot') selected = selected.sort((a, b) => Number(b.hot) - Number(a.hot) || b.sortOrder - a.sortOrder);
  if (catalogueState.sort === 'price-asc') selected = selected.sort((a, b) => a.priceNum - b.priceNum);
  if (catalogueState.sort === 'latest') selected = selected.sort((a, b) => b.sortOrder - a.sortOrder);
  return selected;
}

function renderChips() {
  const chips = document.querySelector('#selectedChips');
  if (!chips) return;
  const chipItems = [];
  if (catalogueState.category !== 'all') chipItems.push({ group: 'category', value: catalogueState.category });
  ['price', 'flavor', 'availability'].forEach((group) => {
    catalogueState[group].forEach((value) => chipItems.push({ group, value }));
  });
  chips.innerHTML = '<span>已選條件:</span>' + (chipItems.length
    ? chipItems.map(({ group, value }) => `<button type="button" data-clear-group="${group}" data-clear-value="${value}">${labelMap[value] || value} ×</button>`).join('')
    : '<button type="button" data-clear-all>全部產品</button>');
}

function renderProducts(resetLimit = false) {
  const grid = document.querySelector('#productGrid');
  if (!grid) return;
  if (resetLimit) catalogueState.visibleLimit = 10;
  const selected = getFilteredProducts();
  const visible = selected.slice(0, catalogueState.visibleLimit);
  grid.innerHTML = visible.length ? visible.map(productCard).join('') : '<p class="empty-results">暫時未有符合條件的產品，請移除部分篩選。</p>';
  document.querySelector('#resultCount')?.replaceChildren(document.createTextNode(`顯示 ${visible.length} / ${selected.length} 件產品`));
  const loadMore = document.querySelector('.ref-load-more');
  if (loadMore) loadMore.hidden = visible.length >= selected.length;
  bindProductCards();
  renderChips();
}

function openProduct(name) {
  const p = products.find((item) => item.name === name) || products[2];
  const modal = document.querySelector('#productModal');
  if (!modal) return;
  modal.querySelector('[data-modal-img]').src = assetPath(p.detail || p.img);
  modal.querySelector('[data-modal-img]').alt = `${p.name} product detail reference image`;
  modal.querySelector('[data-modal-breadcrumb]').textContent = `首頁 › Product Catalogue › ${p.name}`;
  modal.querySelector('[data-modal-title]').textContent = p.name;
  modal.querySelector('.detail-price').textContent = p.price || '價格請 WhatsApp 確認';
  modal.querySelector('[data-modal-copy]').textContent = `${p.copy} 點擊產品後彈出大圖、資料、數量與查詢 CTA。`;
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

function syncFilterButtons() {
  document.querySelectorAll('.filter').forEach((button) => {
    button.classList.toggle('active', button.dataset.filter === catalogueState.category);
  });
}

updateFilterCounts();
renderProducts();

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    catalogueState.category = button.dataset.filter || 'all';
    syncFilterButtons();
    renderProducts(true);
  });
});

document.querySelectorAll('[data-filter-group]').forEach((input) => {
  input.addEventListener('change', () => {
    const set = catalogueState[input.dataset.filterGroup];
    if (!set) return;
    if (input.checked) set.add(input.value);
    else set.delete(input.value);
    renderProducts(true);
  });
});

document.querySelector('.ref-selected-row select')?.addEventListener('change', (event) => {
  const map = { '最新上架': 'latest', '熱門推介': 'hot', '價格由低至高': 'price-asc' };
  catalogueState.sort = map[event.target.value] || 'latest';
  renderProducts(true);
});

document.querySelector('#selectedChips')?.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.clearAll !== undefined) {
    catalogueState.category = 'all';
    ['price', 'flavor', 'availability'].forEach((group) => catalogueState[group].clear());
    document.querySelectorAll('[data-filter-group]').forEach((input) => { input.checked = false; });
  } else if (button.dataset.clearGroup === 'category') {
    catalogueState.category = 'all';
  } else {
    catalogueState[button.dataset.clearGroup]?.delete(button.dataset.clearValue);
    document.querySelectorAll(`[data-filter-group="${button.dataset.clearGroup}"][value="${button.dataset.clearValue}"]`).forEach((input) => { input.checked = false; });
  }
  syncFilterButtons();
  renderProducts(true);
});

document.querySelector('.ref-load-more')?.addEventListener('click', () => {
  catalogueState.visibleLimit += 10;
  renderProducts();
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

const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 }) : null;

document.querySelectorAll('.reveal').forEach((el) => {
  if (revealObserver) revealObserver.observe(el);
  else el.classList.add('is-visible');
});

window.__littleSurpriseDemo = {
  whatsappLinks: [...document.querySelectorAll('a[href^="https://wa.me/85255310947"]')].length,
  disclaimer: document.body.textContent.includes('Speculative website concept only'),
  products: products.length,
  dedicatedProductPage: Boolean(document.querySelector('#productGrid')),
  modal: Boolean(document.querySelector('#productModal')),
  catalogueState,
  getFilteredProducts,
};
