const products = [
  { name: '綠茶白朱古力', english: 'GREEN TEA CHOCOLATE', type: 'mousse', img: '/assets/menu-mousse.jpg', detail: '/assets/menu-mousse.jpg', price: 'HK$29', priceNum: 29, flavors: ['matcha', 'chocolate'], availability: 'in-stock', hot: false, sortOrder: 100, copy: '慕絲系列：綠茶白朱古力 / GREEN TEA CHOCOLATE。', badge: '', notes: ['慕絲系列', 'GREEN TEA CHOCOLATE', '按圖中餐牌更新'] },
  { name: '紅豆芝士', english: 'RED BEAN CHEESE', type: 'mousse', img: '/assets/menu-mousse.jpg', detail: '/assets/menu-mousse.jpg', price: 'HK$29', priceNum: 29, flavors: ['cheese', 'other'], availability: 'in-stock', hot: false, sortOrder: 99, copy: '慕絲系列：紅豆芝士 / RED BEAN CHEESE。', badge: '', notes: ['慕絲系列', 'RED BEAN CHEESE', '按圖中餐牌更新'] },
  { name: '藍莓芝士', english: 'BLUEBERRY CHEESE', type: 'mousse', img: '/assets/menu-mousse.jpg', detail: '/assets/menu-mousse.jpg', price: 'HK$32', priceNum: 32, flavors: ['fruit', 'cheese'], availability: 'in-stock', hot: false, sortOrder: 98, copy: '慕絲系列：藍莓芝士 / BLUEBERRY CHEESE。', badge: '', notes: ['慕絲系列', 'BLUEBERRY CHEESE', '按圖中餐牌更新'] },
  { name: '柚子芝士', english: 'YUZU CHEESE', type: 'mousse', img: '/assets/menu-mousse.jpg', detail: '/assets/menu-mousse.jpg', price: 'HK$29', priceNum: 29, flavors: ['fruit', 'cheese'], availability: 'in-stock', hot: false, sortOrder: 97, copy: '慕絲系列：柚子芝士 / YUZU CHEESE。', badge: '', notes: ['慕絲系列', 'YUZU CHEESE', '按圖中餐牌更新'] },
  { name: '芝麻', english: 'SESAME', type: 'mousse', img: '/assets/menu-mousse.jpg', detail: '/assets/menu-mousse.jpg', price: 'HK$29', priceNum: 29, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 96, copy: '慕絲系列：芝麻 / SESAME。', badge: '', notes: ['慕絲系列', 'SESAME', '按圖中餐牌更新'] },
  { name: '咖啡', english: 'COFFEE', type: 'mousse', img: '/assets/menu-mousse.jpg', detail: '/assets/menu-mousse.jpg', price: 'HK$29', priceNum: 29, flavors: ['caramel'], availability: 'in-stock', hot: false, sortOrder: 95, copy: '慕絲系列：咖啡 / COFFEE。', badge: '', notes: ['慕絲系列', 'COFFEE', '按圖中餐牌更新'] },
  { name: '白朱古力', english: 'WHITE CHOCOLATE', type: 'mousse', img: '/assets/menu-mousse.jpg', detail: '/assets/menu-mousse.jpg', price: 'HK$29', priceNum: 29, flavors: ['chocolate'], availability: 'in-stock', hot: false, sortOrder: 94, copy: '慕絲系列：白朱古力 / WHITE CHOCOLATE。', badge: '', notes: ['慕絲系列', 'WHITE CHOCOLATE', '按圖中餐牌更新'] },
  { name: '朱古力', english: 'CHOCOLATE', type: 'mousse', img: '/assets/menu-mousse.jpg', detail: '/assets/menu-mousse.jpg', price: 'HK$32', priceNum: 32, flavors: ['chocolate'], availability: 'in-stock', hot: false, sortOrder: 93, copy: '慕絲系列：朱古力 / CHOCOLATE。', badge: '', notes: ['慕絲系列', 'CHOCOLATE', '按圖中餐牌更新'] },
  { name: '桂花', english: 'SWEET OSMANTHUS', type: 'mousse', img: '/assets/menu-mousse.jpg', detail: '/assets/menu-mousse.jpg', price: 'HK$32', priceNum: 32, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 92, copy: '慕絲系列：桂花 / SWEET OSMANTHUS。', badge: '', notes: ['慕絲系列', 'SWEET OSMANTHUS', '按圖中餐牌更新'] },
  { name: '蜂蜜', english: 'HONEY', type: 'mousse', img: '/assets/menu-mousse.jpg', detail: '/assets/menu-mousse.jpg', price: 'HK$32', priceNum: 32, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 91, copy: '慕絲系列：蜂蜜 / HONEY。', badge: '', notes: ['慕絲系列', 'HONEY', '按圖中餐牌更新'] },
  { name: '焦糖', english: 'CARAMEL', type: 'tart', img: '/assets/menu-tart.jpg', detail: '/assets/menu-tart.jpg', price: 'HK$35', priceNum: 35, flavors: ['caramel'], availability: 'in-stock', hot: false, sortOrder: 90, copy: '撻系列：焦糖 / CARAMEL。', badge: '', notes: ['撻系列', 'CARAMEL', '按圖中餐牌更新'] },
  { name: '果仁朱古力', english: 'NUTS CHOCOLATE', type: 'tart', img: '/assets/menu-tart.jpg', detail: '/assets/menu-tart.jpg', price: 'HK$32', priceNum: 32, flavors: ['chocolate', 'fruit'], availability: 'in-stock', hot: false, sortOrder: 89, copy: '撻系列：果仁朱古力 / NUTS CHOCOLATE。', badge: '', notes: ['撻系列', 'NUTS CHOCOLATE', '按圖中餐牌更新'] },
  { name: '乳酪芝士', english: 'CHEESE', type: 'tart', img: '/assets/menu-tart.jpg', detail: '/assets/menu-tart.jpg', price: 'HK$30', priceNum: 30, flavors: ['cheese'], availability: 'in-stock', hot: false, sortOrder: 88, copy: '撻系列：乳酪芝士 / CHEESE。', badge: '', notes: ['撻系列', 'CHEESE', '按圖中餐牌更新'] },
  { name: '蛋白檸檬', english: 'EGGWHITE LEMON', type: 'tart', img: '/assets/menu-tart.jpg', detail: '/assets/menu-tart.jpg', price: 'HK$30', priceNum: 30, flavors: ['fruit'], availability: 'in-stock', hot: false, sortOrder: 87, copy: '撻系列：蛋白檸檬 / EGGWHITE LEMON。', badge: '', notes: ['撻系列', 'EGGWHITE LEMON', '按圖中餐牌更新'] },
  { name: '藍莓芝士', english: 'BLUECHEESE', type: 'tart', img: '/assets/menu-tart.jpg', detail: '/assets/menu-tart.jpg', price: 'HK$30', priceNum: 30, flavors: ['fruit', 'cheese'], availability: 'in-stock', hot: false, sortOrder: 86, copy: '撻系列：藍莓芝士 / BLUECHEESE。', badge: '', notes: ['撻系列', 'BLUECHEESE', '按圖中餐牌更新'] },
  { name: '花生芝士', english: 'PEANUT CHEESE', type: 'tart', img: '/assets/menu-tart.jpg', detail: '/assets/menu-tart.jpg', price: 'HK$30', priceNum: 30, flavors: ['fruit', 'cheese'], availability: 'in-stock', hot: false, sortOrder: 85, copy: '撻系列：花生芝士 / PEANUT CHEESE。', badge: '', notes: ['撻系列', 'PEANUT CHEESE', '按圖中餐牌更新'] },
  { name: '芝麻', english: 'SESAME', type: 'tart', img: '/assets/menu-tart.jpg', detail: '/assets/menu-tart.jpg', price: 'HK$30', priceNum: 30, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 84, copy: '撻系列：芝麻 / SESAME。', badge: '', notes: ['撻系列', 'SESAME', '按圖中餐牌更新'] },
  { name: '咖啡', english: 'COFFEE', type: 'tart', img: '/assets/menu-tart.jpg', detail: '/assets/menu-tart.jpg', price: 'HK$30', priceNum: 30, flavors: ['caramel'], availability: 'in-stock', hot: false, sortOrder: 83, copy: '撻系列：咖啡 / COFFEE。', badge: '', notes: ['撻系列', 'COFFEE', '按圖中餐牌更新'] },
  { name: '紅酒雪梨', english: 'REDWINE POACHED PEARS', type: 'tart', img: '/assets/menu-tart.jpg', detail: '/assets/menu-tart.jpg', price: 'HK$40', priceNum: 40, flavors: ['fruit'], availability: 'in-stock', hot: false, sortOrder: 82, copy: '撻系列：紅酒雪梨 / REDWINE POACHED PEARS。', badge: '', notes: ['撻系列', 'REDWINE POACHED PEARS', '按圖中餐牌更新'] },
  { name: '提拉米蘇', english: 'TIRAMISU', type: 'tart', img: '/assets/menu-tart.jpg', detail: '/assets/menu-tart.jpg', price: 'HK$35', priceNum: 35, flavors: ['caramel'], availability: 'in-stock', hot: false, sortOrder: 81, copy: '撻系列：提拉米蘇 / TIRAMISU。', badge: '', notes: ['撻系列', 'TIRAMISU', '按圖中餐牌更新'] },
  { name: '伯爵紅茶', english: 'EARLGRAY TEA', type: 'tart', img: '/assets/menu-tart.jpg', detail: '/assets/menu-tart.jpg', price: 'HK$35', priceNum: 35, flavors: ['earl-grey'], availability: 'in-stock', hot: false, sortOrder: 80, copy: '撻系列：伯爵紅茶 / EARLGRAY TEA。', badge: '', notes: ['撻系列', 'EARLGRAY TEA', '按圖中餐牌更新'] },
  { name: '楓糖燕麥芝士', english: 'WALNUT MAPLE GRANOLA CHEESE', type: 'tart', img: '/assets/menu-tart.jpg', detail: '/assets/menu-tart.jpg', price: 'HK$35', priceNum: 35, flavors: ['cheese', 'fruit', 'caramel'], availability: 'in-stock', hot: false, sortOrder: 79, copy: '撻系列：楓糖燕麥芝士 / WALNUT MAPLE GRANOLA CHEESE。', badge: '', notes: ['撻系列', 'WALNUT MAPLE GRANOLA CHEESE', '按圖中餐牌更新'] },
  { name: '綠茶', english: 'GREENTEA', type: 'tart', img: '/assets/menu-tart.jpg', detail: '/assets/menu-tart.jpg', price: 'HK$24', priceNum: 24, flavors: ['matcha'], availability: 'in-stock', hot: false, sortOrder: 78, copy: '撻系列：綠茶 / GREENTEA。', badge: '', notes: ['撻系列', 'GREENTEA', '按圖中餐牌更新'] },
  { name: '榛子', english: 'HAZELNUT', type: 'tart', img: '/assets/menu-tart.jpg', detail: '/assets/menu-tart.jpg', price: 'HK$24', priceNum: 24, flavors: ['fruit'], availability: 'in-stock', hot: false, sortOrder: 77, copy: '撻系列：榛子 / HAZELNUT。', badge: '', notes: ['撻系列', 'HAZELNUT', '按圖中餐牌更新'] },
  { name: '雲呢嗱', english: 'VANILLA', type: 'tart', img: '/assets/menu-tart.jpg', detail: '/assets/menu-tart.jpg', price: 'HK$24', priceNum: 24, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 76, copy: '撻系列：雲呢嗱 / VANILLA。', badge: '', notes: ['撻系列', 'VANILLA', '按圖中餐牌更新'] },
  { name: '玉桂蘋果', english: 'CINNAMON APPLE', type: 'roll', img: '/assets/menu-roll.jpg', detail: '/assets/menu-roll.jpg', price: 'HK$120', priceNum: 120, flavors: ['fruit'], availability: 'in-stock', hot: false, sortOrder: 75, copy: '卷蛋系列：玉桂蘋果 / CINNAMON APPLE。', badge: '', notes: ['卷蛋系列', 'CINNAMON APPLE', '按圖中餐牌更新'] },
  { name: '提拉米蘇', english: 'TIRAMISU', type: 'roll', img: '/assets/menu-roll.jpg', detail: '/assets/menu-roll.jpg', price: 'HK$120', priceNum: 120, flavors: ['caramel'], availability: 'in-stock', hot: false, sortOrder: 74, copy: '卷蛋系列：提拉米蘇 / TIRAMISU。', badge: '', notes: ['卷蛋系列', 'TIRAMISU', '按圖中餐牌更新'] },
  { name: '焙茶栗子', english: 'HOJICHA CHESTNUT', type: 'roll', img: '/assets/menu-roll.jpg', detail: '/assets/menu-roll.jpg', price: 'HK$120', priceNum: 120, flavors: ['earl-grey', 'fruit'], availability: 'in-stock', hot: false, sortOrder: 73, copy: '卷蛋系列：焙茶栗子 / HOJICHA CHESTNUT。', badge: '', notes: ['卷蛋系列', 'HOJICHA CHESTNUT', '按圖中餐牌更新'] },
  { name: '海鹽花生', english: 'SEA SALT PEANUTS', type: 'roll', img: '/assets/menu-roll.jpg', detail: '/assets/menu-roll.jpg', price: 'HK$110', priceNum: 110, flavors: ['fruit'], availability: 'in-stock', hot: false, sortOrder: 72, copy: '卷蛋系列：海鹽花生 / SEA SALT PEANUTS。', badge: '', notes: ['卷蛋系列', 'SEA SALT PEANUTS', '按圖中餐牌更新'] },
  { name: '楓糖伯爵紅茶', english: 'MAPLE EARL GREY TEA', type: 'roll', img: '/assets/menu-roll.jpg', detail: '/assets/menu-roll.jpg', price: 'HK$118', priceNum: 118, flavors: ['earl-grey', 'caramel'], availability: 'in-stock', hot: false, sortOrder: 71, copy: '卷蛋系列：楓糖伯爵紅茶 / MAPLE EARL GREY TEA。', badge: '', notes: ['卷蛋系列', 'MAPLE EARL GREY TEA', '按圖中餐牌更新'] },
  { name: '蜂蜜綠茶', english: 'HONEY GREEN TEA', type: 'roll', img: '/assets/menu-roll.jpg', detail: '/assets/menu-roll.jpg', price: 'HK$118', priceNum: 118, flavors: ['matcha'], availability: 'in-stock', hot: false, sortOrder: 70, copy: '卷蛋系列：蜂蜜綠茶 / HONEY GREEN TEA。', badge: '', notes: ['卷蛋系列', 'HONEY GREEN TEA', '按圖中餐牌更新'] },
  { name: '花生白朱古力', english: 'PEANUTS WHITE CHOCOLATE', type: 'butter-cake', img: '/assets/menu-butter-cake.jpg', detail: '/assets/menu-butter-cake.jpg', price: 'HK$27', priceNum: 27, flavors: ['chocolate', 'fruit'], availability: 'in-stock', hot: false, sortOrder: 69, copy: '牛油蛋糕系列：花生白朱古力 / PEANUTS WHITE CHOCOLATE。', badge: '', notes: ['牛油蛋糕系列', 'PEANUTS WHITE CHOCOLATE', '按圖中餐牌更新'] },
  { name: '紅絲絨芝士', english: 'RED VELVET CHEESE', type: 'butter-cake', img: '/assets/menu-butter-cake.jpg', detail: '/assets/menu-butter-cake.jpg', price: 'HK$27', priceNum: 27, flavors: ['cheese'], availability: 'in-stock', hot: false, sortOrder: 68, copy: '牛油蛋糕系列：紅絲絨芝士 / RED VELVET CHEESE。', badge: '', notes: ['牛油蛋糕系列', 'RED VELVET CHEESE', '按圖中餐牌更新'] },
  { name: '泰式奶綠', english: 'THAI GREEN MILK TEA', type: 'butter-cake', img: '/assets/menu-butter-cake.jpg', detail: '/assets/menu-butter-cake.jpg', price: 'HK$27', priceNum: 27, flavors: ['matcha'], availability: 'in-stock', hot: false, sortOrder: 67, copy: '牛油蛋糕系列：泰式奶綠 / THAI GREEN MILK TEA。', badge: '', notes: ['牛油蛋糕系列', 'THAI GREEN MILK TEA', '按圖中餐牌更新'] },
  { name: '焙茶', english: 'HOJICHA', type: 'butter-cake', img: '/assets/menu-butter-cake.jpg', detail: '/assets/menu-butter-cake.jpg', price: 'HK$27', priceNum: 27, flavors: ['earl-grey'], availability: 'in-stock', hot: false, sortOrder: 66, copy: '牛油蛋糕系列：焙茶 / HOJICHA。', badge: '', notes: ['牛油蛋糕系列', 'HOJICHA', '按圖中餐牌更新'] },
  { name: '楓糖', english: 'MAPLE', type: 'butter-cake', img: '/assets/menu-butter-cake.jpg', detail: '/assets/menu-butter-cake.jpg', price: 'HK$27', priceNum: 27, flavors: ['caramel'], availability: 'in-stock', hot: false, sortOrder: 65, copy: '牛油蛋糕系列：楓糖 / MAPLE。', badge: '', notes: ['牛油蛋糕系列', 'MAPLE', '按圖中餐牌更新'] },
  { name: '特濃朱古力', english: 'CHOCOLATE', type: 'butter-cake', img: '/assets/menu-butter-cake.jpg', detail: '/assets/menu-butter-cake.jpg', price: 'HK$27', priceNum: 27, flavors: ['chocolate'], availability: 'in-stock', hot: false, sortOrder: 64, copy: '牛油蛋糕系列：特濃朱古力 / CHOCOLATE。', badge: '', notes: ['牛油蛋糕系列', 'CHOCOLATE', '按圖中餐牌更新'] },
  { name: '泰式奶茶', english: 'THAI MILK TEA', type: 'butter-cake', img: '/assets/menu-butter-cake.jpg', detail: '/assets/menu-butter-cake.jpg', price: 'HK$27', priceNum: 27, flavors: ['earl-grey'], availability: 'in-stock', hot: false, sortOrder: 63, copy: '牛油蛋糕系列：泰式奶茶 / THAI MILK TEA。', badge: '', notes: ['牛油蛋糕系列', 'THAI MILK TEA', '按圖中餐牌更新'] },
  { name: '蜂蜜', english: 'HONEY', type: 'butter-mochicake', img: '/assets/menu-butter-mochicake.jpg', detail: '/assets/menu-butter-mochicake.jpg', price: 'HK$30', priceNum: 30, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 62, copy: '麻糬牛油蛋糕系列：蜂蜜 / HONEY。', badge: '', notes: ['麻糬牛油蛋糕系列', 'HONEY', '按圖中餐牌更新'] },
  { name: '雙重朱古力', english: 'CHOCOLATE', type: 'butter-mochicake', img: '/assets/menu-butter-mochicake.jpg', detail: '/assets/menu-butter-mochicake.jpg', price: 'HK$30', priceNum: 30, flavors: ['chocolate'], availability: 'in-stock', hot: false, sortOrder: 61, copy: '麻糬牛油蛋糕系列：雙重朱古力 / CHOCOLATE。', badge: '', notes: ['麻糬牛油蛋糕系列', 'CHOCOLATE', '按圖中餐牌更新'] },
  { name: '咖啡', english: 'COFFEE', type: 'butter-mochicake', img: '/assets/menu-butter-mochicake.jpg', detail: '/assets/menu-butter-mochicake.jpg', price: 'HK$30', priceNum: 30, flavors: ['caramel'], availability: 'in-stock', hot: false, sortOrder: 60, copy: '麻糬牛油蛋糕系列：咖啡 / COFFEE。', badge: '', notes: ['麻糬牛油蛋糕系列', 'COFFEE', '按圖中餐牌更新'] },
  { name: '雲呢嗱', english: 'VANILLA', type: 'butter-mochicake', img: '/assets/menu-butter-mochicake.jpg', detail: '/assets/menu-butter-mochicake.jpg', price: 'HK$30', priceNum: 30, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 59, copy: '麻糬牛油蛋糕系列：雲呢嗱 / VANILLA。', badge: '', notes: ['麻糬牛油蛋糕系列', 'VANILLA', '按圖中餐牌更新'] },
  { name: '芝麻', english: 'SESAME', type: 'butter-mochicake', img: '/assets/menu-butter-mochicake.jpg', detail: '/assets/menu-butter-mochicake.jpg', price: 'HK$30', priceNum: 30, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 58, copy: '麻糬牛油蛋糕系列：芝麻 / SESAME。', badge: '', notes: ['麻糬牛油蛋糕系列', 'SESAME', '按圖中餐牌更新'] },
  { name: 'OREO三文治', english: 'OREO SANDWICH', type: 'cheese-cake', img: '/assets/menu-cheese-cake.jpg', detail: '/assets/menu-cheese-cake.jpg', price: 'HK$35', priceNum: 35, flavors: ['chocolate', 'cheese'], availability: 'in-stock', hot: false, sortOrder: 57, copy: '芝士蛋糕系列：OREO三文治 / OREO SANDWICH。', badge: '', notes: ['芝士蛋糕系列', 'OREO SANDWICH', '按圖中餐牌更新'] },
  { name: '焦糖白朱古力芝士', english: 'CARMEL WHITE CHOCOLATE CHEESE', type: 'cheese-cake', img: '/assets/menu-cheese-cake.jpg', detail: '/assets/menu-cheese-cake.jpg', price: 'HK$35', priceNum: 35, flavors: ['chocolate', 'cheese', 'caramel'], availability: 'in-stock', hot: false, sortOrder: 56, copy: '芝士蛋糕系列：焦糖白朱古力芝士 / CARMEL WHITE CHOCOLATE CHEESE。', badge: '', notes: ['芝士蛋糕系列', 'CARMEL WHITE CHOCOLATE CHEESE', '按圖中餐牌更新'] },
  { name: '紐約芝士', english: 'NEWYORK CHEESE', type: 'cheese-cake', img: '/assets/menu-cheese-cake.jpg', detail: '/assets/menu-cheese-cake.jpg', price: 'HK$35', priceNum: 35, flavors: ['cheese'], availability: 'in-stock', hot: false, sortOrder: 55, copy: '芝士蛋糕系列：紐約芝士 / NEWYORK CHEESE。', badge: '', notes: ['芝士蛋糕系列', 'NEWYORK CHEESE', '按圖中餐牌更新'] },
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
  all: '全部產品', mousse: 'MOUSSE 慕絲', tart: 'TART 撻', roll: 'ROLL 卷蛋', 'butter-cake': 'BUTTER CAKE 牛油蛋糕', 'butter-mochicake': 'BUTTER MOCHICAKE 麻糬牛油蛋糕', 'cheese-cake': 'CHEESE CAKE 芝士蛋糕',
  '0-50': 'HK$0 - HK$50', '50-100': 'HK$50 - HK$100', '100-150': 'HK$100 - HK$150', '150+': 'HK$150 或以上',
  chocolate: '朱古力', matcha: '抹茶', cheese: '芝士', fruit: '水果 / 果仁', caramel: '焦糖 / 咖啡', 'earl-grey': '茶類', other: '其他',
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
