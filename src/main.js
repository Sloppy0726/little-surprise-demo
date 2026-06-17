const products = [
  { name: 'OREO三文治', english: 'OREO SANDWICH', type: 'cheese-cake', img: '/assets/products/cheese-cake/oreo-sandwich.png', detail: '/assets/products/cheese-cake/oreo-sandwich.png', price: 'HK$35', priceNum: 35, flavors: ['chocolate', 'cheese'], availability: 'in-stock', hot: false, sortOrder: 160, copy: '芝士蛋糕系列：OREO三文治 / OREO SANDWICH。', badge: '', notes: ['芝士蛋糕系列', 'OREO SANDWICH', '按圖中餐牌更新'] },
  { name: '焦糖白朱古力芝士', english: 'CARAMEL WHITE CHOCOLATE CHEESE', type: 'cheese-cake', img: '/assets/products/cheese-cake/caramel-white-chocolate-cheese.png', detail: '/assets/products/cheese-cake/caramel-white-chocolate-cheese.png', price: 'HK$35', priceNum: 35, flavors: ['caramel', 'chocolate', 'cheese'], availability: 'in-stock', hot: false, sortOrder: 159, copy: '芝士蛋糕系列：焦糖白朱古力芝士 / CARAMEL WHITE CHOCOLATE CHEESE。', badge: '', notes: ['芝士蛋糕系列', 'CARAMEL WHITE CHOCOLATE CHEESE', '按圖中餐牌更新'] },
  { name: '紐約芝士', english: 'NEWYORK CHEESE', type: 'cheese-cake', img: '/assets/products/cheese-cake/new-york-cheese.png', detail: '/assets/products/cheese-cake/new-york-cheese.png', price: 'HK$35', priceNum: 35, flavors: ['cheese'], availability: 'in-stock', hot: false, sortOrder: 158, copy: '芝士蛋糕系列：紐約芝士 / NEWYORK CHEESE。', badge: '', notes: ['芝士蛋糕系列', 'NEWYORK CHEESE', '按圖中餐牌更新'] },
  { name: '花生白朱古力', english: 'PEANUTS WHITE CHOCOLATE', type: 'butter-cake', img: '/assets/products/butter-cake/peanuts-white-chocolate.png', detail: '/assets/products/butter-cake/peanuts-white-chocolate.png', price: 'HK$27', priceNum: 27, flavors: ['chocolate', 'fruit'], availability: 'in-stock', hot: false, sortOrder: 150, copy: '牛油蛋糕系列：花生白朱古力 / PEANUTS WHITE CHOCOLATE。', badge: '', notes: ['牛油蛋糕系列', 'PEANUTS WHITE CHOCOLATE', '按圖中餐牌更新'] },
  { name: '紅絲絨芝士', english: 'RED VELVET CHEESE', type: 'butter-cake', img: '/assets/products/butter-cake/red-velvet-cheese.png', detail: '/assets/products/butter-cake/red-velvet-cheese.png', price: 'HK$27', priceNum: 27, flavors: ['cheese'], availability: 'in-stock', hot: false, sortOrder: 149, copy: '牛油蛋糕系列：紅絲絨芝士 / RED VELVET CHEESE。', badge: '', notes: ['牛油蛋糕系列', 'RED VELVET CHEESE', '按圖中餐牌更新'] },
  { name: '泰式奶綠', english: 'THAI GREEN MILK TEA', type: 'butter-cake', img: '/assets/products/butter-cake/thai-green-milk-tea.png', detail: '/assets/products/butter-cake/thai-green-milk-tea.png', price: 'HK$27', priceNum: 27, flavors: ['matcha'], availability: 'in-stock', hot: false, sortOrder: 148, copy: '牛油蛋糕系列：泰式奶綠 / THAI GREEN MILK TEA。', badge: '', notes: ['牛油蛋糕系列', 'THAI GREEN MILK TEA', '按圖中餐牌更新'] },
  { name: '焙茶', english: 'HOJICHA', type: 'butter-cake', img: '/assets/products/butter-cake/hojicha.png', detail: '/assets/products/butter-cake/hojicha.png', price: 'HK$27', priceNum: 27, flavors: ['earl-grey'], availability: 'in-stock', hot: false, sortOrder: 147, copy: '牛油蛋糕系列：焙茶 / HOJICHA。', badge: '', notes: ['牛油蛋糕系列', 'HOJICHA', '按圖中餐牌更新'] },
  { name: '楓糖', english: 'MAPLE', type: 'butter-cake', img: '/assets/products/butter-cake/maple.png', detail: '/assets/products/butter-cake/maple.png', price: 'HK$27', priceNum: 27, flavors: ['caramel'], availability: 'in-stock', hot: false, sortOrder: 146, copy: '牛油蛋糕系列：楓糖 / MAPLE。', badge: '', notes: ['牛油蛋糕系列', 'MAPLE', '按圖中餐牌更新'] },
  { name: '特濃朱古力', english: 'CHOCOLATE', type: 'butter-cake', img: '/assets/products/butter-cake/chocolate.png', detail: '/assets/products/butter-cake/chocolate.png', price: 'HK$27', priceNum: 27, flavors: ['chocolate'], availability: 'in-stock', hot: false, sortOrder: 145, copy: '牛油蛋糕系列：特濃朱古力 / CHOCOLATE。', badge: '', notes: ['牛油蛋糕系列', 'CHOCOLATE', '按圖中餐牌更新'] },
  { name: '泰式奶茶', english: 'THAI MILK TEA', type: 'butter-cake', img: '/assets/products/butter-cake/thai-milk-tea.png', detail: '/assets/products/butter-cake/thai-milk-tea.png', price: 'HK$27', priceNum: 27, flavors: ['earl-grey'], availability: 'in-stock', hot: false, sortOrder: 144, copy: '牛油蛋糕系列：泰式奶茶 / THAI MILK TEA。', badge: '', notes: ['牛油蛋糕系列', 'THAI MILK TEA', '按圖中餐牌更新'] },
  { name: '焦糖', english: 'CARAMEL', type: 'tart', img: '/assets/products/tart/caramel.png', detail: '/assets/products/tart/caramel.png', price: 'HK$35', priceNum: 35, flavors: ['caramel'], availability: 'in-stock', hot: false, sortOrder: 140, copy: '撻系列：焦糖 / CARAMEL。', badge: '', notes: ['撻系列', 'CARAMEL', '按圖中餐牌更新'] },
  { name: '果仁朱古力', english: 'NUTS CHOCOLATE', type: 'tart', img: '/assets/products/tart/nuts-chocolate.png', detail: '/assets/products/tart/nuts-chocolate.png', price: 'HK$32', priceNum: 32, flavors: ['chocolate'], availability: 'in-stock', hot: false, sortOrder: 139, copy: '撻系列：果仁朱古力 / NUTS CHOCOLATE。', badge: '', notes: ['撻系列', 'NUTS CHOCOLATE', '按圖中餐牌更新'] },
  { name: '乳酪芝士', english: 'CHEESE', type: 'tart', img: '/assets/products/tart/cheese.png', detail: '/assets/products/tart/cheese.png', price: 'HK$30', priceNum: 30, flavors: ['cheese'], availability: 'in-stock', hot: false, sortOrder: 138, copy: '撻系列：乳酪芝士 / CHEESE。', badge: '', notes: ['撻系列', 'CHEESE', '按圖中餐牌更新'] },
  { name: '蛋白檸檬', english: 'EGGWHITE LEMON', type: 'tart', img: '/assets/products/tart/eggwhite-lemon.png', detail: '/assets/products/tart/eggwhite-lemon.png', price: 'HK$30', priceNum: 30, flavors: ['fruit'], availability: 'in-stock', hot: false, sortOrder: 137, copy: '撻系列：蛋白檸檬 / EGGWHITE LEMON。', badge: '', notes: ['撻系列', 'EGGWHITE LEMON', '按圖中餐牌更新'] },
  { name: '藍莓芝士', english: 'BLUECHEESE', type: 'tart', img: '/assets/products/tart/bluecheese.png', detail: '/assets/products/tart/bluecheese.png', price: 'HK$30', priceNum: 30, flavors: ['fruit', 'cheese'], availability: 'in-stock', hot: false, sortOrder: 136, copy: '撻系列：藍莓芝士 / BLUECHEESE。', badge: '', notes: ['撻系列', 'BLUECHEESE', '按圖中餐牌更新'] },
  { name: '花生芝士', english: 'PEANUTCHEESE', type: 'tart', img: '/assets/products/tart/peanut-cheese.png', detail: '/assets/products/tart/peanut-cheese.png', price: 'HK$30', priceNum: 30, flavors: ['fruit', 'cheese'], availability: 'in-stock', hot: false, sortOrder: 135, copy: '撻系列：花生芝士 / PEANUTCHEESE。', badge: '', notes: ['撻系列', 'PEANUTCHEESE', '按圖中餐牌更新'] },
  { name: '芝麻', english: 'SESAME', type: 'tart', img: '/assets/products/tart/sesame.png', detail: '/assets/products/tart/sesame.png', price: 'HK$30', priceNum: 30, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 134, copy: '撻系列：芝麻 / SESAME。', badge: '', notes: ['撻系列', 'SESAME', '按圖中餐牌更新'] },
  { name: '咖啡', english: 'COFFEE', type: 'tart', img: '/assets/products/tart/coffee.png', detail: '/assets/products/tart/coffee.png', price: 'HK$30', priceNum: 30, flavors: ['caramel'], availability: 'in-stock', hot: false, sortOrder: 133, copy: '撻系列：咖啡 / COFFEE。', badge: '', notes: ['撻系列', 'COFFEE', '按圖中餐牌更新'] },
  { name: '紅酒雪梨', english: 'REDWINE POACHED PEARS', type: 'tart', img: '/assets/products/tart/redwine-poached-pears.png', detail: '/assets/products/tart/redwine-poached-pears.png', price: 'HK$40', priceNum: 40, flavors: ['fruit'], availability: 'in-stock', hot: false, sortOrder: 132, copy: '撻系列：紅酒雪梨 / REDWINE POACHED PEARS。', badge: '', notes: ['撻系列', 'REDWINE POACHED PEARS', '按圖中餐牌更新'] },
  { name: '提拉米蘇', english: 'TIRAMISU', type: 'tart', img: '/assets/products/tart/tiramisu.png', detail: '/assets/products/tart/tiramisu.png', price: 'HK$35', priceNum: 35, flavors: ['caramel'], availability: 'in-stock', hot: false, sortOrder: 131, copy: '撻系列：提拉米蘇 / TIRAMISU。', badge: '', notes: ['撻系列', 'TIRAMISU', '按圖中餐牌更新'] },
  { name: '伯爵紅茶', english: 'EARLGRAY TEA', type: 'tart', img: '/assets/products/tart/earlgray-tea.png', detail: '/assets/products/tart/earlgray-tea.png', price: 'HK$35', priceNum: 35, flavors: ['earl-grey'], availability: 'in-stock', hot: false, sortOrder: 130, copy: '撻系列：伯爵紅茶 / EARLGRAY TEA。', badge: '', notes: ['撻系列', 'EARLGRAY TEA', '按圖中餐牌更新'] },
  { name: '楓糖燕麥芝士', english: 'WALNUT MAPLE GRANOLA CHEESE', type: 'tart', img: '/assets/products/tart/walnut-maple-granola-cheese.png', detail: '/assets/products/tart/walnut-maple-granola-cheese.png', price: 'HK$35', priceNum: 35, flavors: ['fruit', 'cheese'], availability: 'in-stock', hot: false, sortOrder: 129, copy: '撻系列：楓糖燕麥芝士 / WALNUT MAPLE GRANOLA CHEESE。', badge: '', notes: ['撻系列', 'WALNUT MAPLE GRANOLA CHEESE', '按圖中餐牌更新'] },
  { name: '綠茶', english: 'GREENTEA', type: 'tart', img: '/assets/products/tart/greentea.png', detail: '/assets/products/tart/greentea.png', price: 'HK$24', priceNum: 24, flavors: ['matcha'], availability: 'in-stock', hot: false, sortOrder: 128, copy: '撻系列：綠茶 / GREENTEA。', badge: '', notes: ['撻系列', 'GREENTEA', '按圖中餐牌更新'] },
  { name: '榛子', english: 'HAZELNUT', type: 'tart', img: '/assets/products/tart/hazelnut.png', detail: '/assets/products/tart/hazelnut.png', price: 'HK$24', priceNum: 24, flavors: ['fruit'], availability: 'in-stock', hot: false, sortOrder: 127, copy: '撻系列：榛子 / HAZELNUT。', badge: '', notes: ['撻系列', 'HAZELNUT', '按圖中餐牌更新'] },
  { name: '雲呢嗱', english: 'VANILLA', type: 'tart', img: '/assets/products/tart/vanilla.png', detail: '/assets/products/tart/vanilla.png', price: 'HK$24', priceNum: 24, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 126, copy: '撻系列：雲呢嗱 / VANILLA。', badge: '', notes: ['撻系列', 'VANILLA', '按圖中餐牌更新'] },
  { name: '玉桂蘋果', english: 'CINNAMON APPLE', type: 'roll', img: '/assets/products/roll/cinnamon-apple.png', detail: '/assets/products/roll/cinnamon-apple.png', price: 'HK$120', priceNum: 120, flavors: ['fruit'], availability: 'in-stock', hot: false, sortOrder: 120, copy: '卷蛋系列：玉桂蘋果 / CINNAMON APPLE。', badge: '', notes: ['卷蛋系列', 'CINNAMON APPLE', '每隻味完整一條賣切 8 件，不設散件', '分隔紙需另加，每件 +$1'] },
  { name: '提拉米蘇', english: 'TIRAMISU', type: 'roll', img: '/assets/products/roll/tiramisu.png', detail: '/assets/products/roll/tiramisu.png', price: 'HK$120', priceNum: 120, flavors: ['caramel'], availability: 'in-stock', hot: false, sortOrder: 119, copy: '卷蛋系列：提拉米蘇 / TIRAMISU。', badge: '', notes: ['卷蛋系列', 'TIRAMISU', '每隻味完整一條賣切 8 件，不設散件', '分隔紙需另加，每件 +$1'] },
  { name: '焙茶栗子', english: 'HOJICHA CHESTNUT', type: 'roll', img: '/assets/products/roll/hojicha-chestnut.png', detail: '/assets/products/roll/hojicha-chestnut.png', price: 'HK$120', priceNum: 120, flavors: ['earl-grey'], availability: 'in-stock', hot: false, sortOrder: 118, copy: '卷蛋系列：焙茶栗子 / HOJICHA CHESTNUT。', badge: '', notes: ['卷蛋系列', 'HOJICHA CHESTNUT', '每隻味完整一條賣切 8 件，不設散件', '分隔紙需另加，每件 +$1'] },
  { name: '海鹽花生', english: 'SEA SALT PEANUTS', type: 'roll', img: '/assets/products/roll/sea-salt-peanuts.png', detail: '/assets/products/roll/sea-salt-peanuts.png', price: 'HK$110', priceNum: 110, flavors: ['fruit'], availability: 'in-stock', hot: false, sortOrder: 117, copy: '卷蛋系列：海鹽花生 / SEA SALT PEANUTS。', badge: '', notes: ['卷蛋系列', 'SEA SALT PEANUTS', '每隻味完整一條賣切 8 件，不設散件', '分隔紙需另加，每件 +$1'] },
  { name: '楓糖伯爵紅茶', english: 'MAPLE EARL GREY TEA', type: 'roll', img: '/assets/products/roll/maple-earl-grey-tea.png', detail: '/assets/products/roll/maple-earl-grey-tea.png', price: 'HK$118', priceNum: 118, flavors: ['earl-grey'], availability: 'in-stock', hot: false, sortOrder: 116, copy: '卷蛋系列：楓糖伯爵紅茶 / MAPLE EARL GREY TEA。', badge: '', notes: ['卷蛋系列', 'MAPLE EARL GREY TEA', '每隻味完整一條賣切 8 件，不設散件', '分隔紙需另加，每件 +$1'] },
  { name: '蜂蜜綠茶', english: 'HONEY GREEN TEA', type: 'roll', img: '/assets/products/roll/honey-green-tea.png', detail: '/assets/products/roll/honey-green-tea.png', price: 'HK$118', priceNum: 118, flavors: ['matcha'], availability: 'in-stock', hot: false, sortOrder: 115, copy: '卷蛋系列：蜂蜜綠茶 / HONEY GREEN TEA。', badge: '', notes: ['卷蛋系列', 'HONEY GREEN TEA', '每隻味完整一條賣切 8 件，不設散件', '分隔紙需另加，每件 +$1'] },
  { name: '蜂蜜', english: 'HONEY BUTTER MOCHICAKE', type: 'butter-mochicake', img: '/assets/products/butter-mochicake/honey.png', detail: '/assets/products/butter-mochicake/honey.png', price: 'HK$30', priceNum: 30, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 110, copy: '麻糬牛油蛋糕系列：蜂蜜 / HONEY。', badge: '', notes: ['麻糬牛油蛋糕系列', 'HONEY', '按圖中餐牌更新'] },
  { name: '雙重朱古力', english: 'CHOCOLATE BUTTER MOCHICAKE', type: 'butter-mochicake', img: '/assets/products/butter-mochicake/chocolate.png', detail: '/assets/products/butter-mochicake/chocolate.png', price: 'HK$30', priceNum: 30, flavors: ['chocolate'], availability: 'in-stock', hot: false, sortOrder: 109, copy: '麻糬牛油蛋糕系列：雙重朱古力 / CHOCOLATE。', badge: '', notes: ['麻糬牛油蛋糕系列', 'CHOCOLATE', '按圖中餐牌更新'] },
  { name: '咖啡', english: 'COFFEE BUTTER MOCHICAKE', type: 'butter-mochicake', img: '/assets/products/butter-mochicake/coffee.png', detail: '/assets/products/butter-mochicake/coffee.png', price: 'HK$30', priceNum: 30, flavors: ['caramel'], availability: 'in-stock', hot: false, sortOrder: 108, copy: '麻糬牛油蛋糕系列：咖啡 / COFFEE。', badge: '', notes: ['麻糬牛油蛋糕系列', 'COFFEE', '按圖中餐牌更新'] },
  { name: '雲呢嗱', english: 'VANILLA BUTTER MOCHICAKE', type: 'butter-mochicake', img: '/assets/products/butter-mochicake/vanilla.png', detail: '/assets/products/butter-mochicake/vanilla.png', price: 'HK$30', priceNum: 30, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 107, copy: '麻糬牛油蛋糕系列：雲呢嗱 / VANILLA。', badge: '', notes: ['麻糬牛油蛋糕系列', 'VANILLA', '按圖中餐牌更新'] },
  { name: '芝麻', english: 'SESAME BUTTER MOCHICAKE', type: 'butter-mochicake', img: '/assets/products/butter-mochicake/sesame.png', detail: '/assets/products/butter-mochicake/sesame.png', price: 'HK$30', priceNum: 30, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 106, copy: '麻糬牛油蛋糕系列：芝麻 / SESAME。', badge: '', notes: ['麻糬牛油蛋糕系列', 'SESAME', '按圖中餐牌更新'] },
  { name: '綠茶白朱古力', english: 'GREEN TEA CHOCOLATE', type: 'mousse', img: '/assets/products/mousse/green-tea-chocolate.png', detail: '/assets/products/mousse/green-tea-chocolate.png', price: 'HK$29', priceNum: 29, flavors: ['matcha', 'chocolate'], availability: 'in-stock', hot: false, sortOrder: 100, copy: '慕絲系列：綠茶白朱古力 / GREEN TEA CHOCOLATE。', badge: '', notes: ['慕絲系列', 'GREEN TEA CHOCOLATE', '按圖中餐牌更新'] },
  { name: '紅豆芝士', english: 'RED BEAN CHEESE', type: 'mousse', img: '/assets/products/mousse/red-bean-cheese.png', detail: '/assets/products/mousse/red-bean-cheese.png', price: 'HK$29', priceNum: 29, flavors: ['cheese', 'other'], availability: 'in-stock', hot: false, sortOrder: 99, copy: '慕絲系列：紅豆芝士 / RED BEAN CHEESE。', badge: '', notes: ['慕絲系列', 'RED BEAN CHEESE', '按圖中餐牌更新'] },
  { name: '藍莓芝士', english: 'BLUEBERRY CHEESE', type: 'mousse', img: '/assets/products/mousse/blueberry-cheese.png', detail: '/assets/products/mousse/blueberry-cheese.png', price: 'HK$32', priceNum: 32, flavors: ['fruit', 'cheese'], availability: 'in-stock', hot: false, sortOrder: 98, copy: '慕絲系列：藍莓芝士 / BLUEBERRY CHEESE。', badge: '', notes: ['慕絲系列', 'BLUEBERRY CHEESE', '按圖中餐牌更新'] },
  { name: '柚子芝士', english: 'YUZU CHEESE', type: 'mousse', img: '/assets/products/mousse/yuzu-cheese.png', detail: '/assets/products/mousse/yuzu-cheese.png', price: 'HK$29', priceNum: 29, flavors: ['fruit', 'cheese'], availability: 'in-stock', hot: false, sortOrder: 97, copy: '慕絲系列：柚子芝士 / YUZU CHEESE。', badge: '', notes: ['慕絲系列', 'YUZU CHEESE', '按圖中餐牌更新'] },
  { name: '芝麻', english: 'SESAME', type: 'mousse', img: '/assets/products/mousse/sesame.png', detail: '/assets/products/mousse/sesame.png', price: 'HK$29', priceNum: 29, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 96, copy: '慕絲系列：芝麻 / SESAME。', badge: '', notes: ['慕絲系列', 'SESAME', '按圖中餐牌更新'] },
  { name: '咖啡', english: 'COFFEE', type: 'mousse', img: '/assets/products/mousse/coffee.png', detail: '/assets/products/mousse/coffee.png', price: 'HK$29', priceNum: 29, flavors: ['caramel'], availability: 'in-stock', hot: false, sortOrder: 95, copy: '慕絲系列：咖啡 / COFFEE。', badge: '', notes: ['慕絲系列', 'COFFEE', '按圖中餐牌更新'] },
  { name: '白朱古力', english: 'WHITE CHOCOLATE', type: 'mousse', img: '/assets/products/mousse/white-chocolate.png', detail: '/assets/products/mousse/white-chocolate.png', price: 'HK$29', priceNum: 29, flavors: ['chocolate'], availability: 'in-stock', hot: false, sortOrder: 94, copy: '慕絲系列：白朱古力 / WHITE CHOCOLATE。', badge: '', notes: ['慕絲系列', 'WHITE CHOCOLATE', '按圖中餐牌更新'] },
  { name: '朱古力', english: 'CHOCOLATE', type: 'mousse', img: '/assets/products/mousse/chocolate.png', detail: '/assets/products/mousse/chocolate.png', price: 'HK$32', priceNum: 32, flavors: ['chocolate'], availability: 'in-stock', hot: false, sortOrder: 93, copy: '慕絲系列：朱古力 / CHOCOLATE。', badge: '', notes: ['慕絲系列', 'CHOCOLATE', '按圖中餐牌更新'] },
  { name: '桂花', english: 'SWEET OSMANTHUS', type: 'mousse', img: '/assets/products/mousse/sweet-osmanthus.png', detail: '/assets/products/mousse/sweet-osmanthus.png', price: 'HK$32', priceNum: 32, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 92, copy: '慕絲系列：桂花 / SWEET OSMANTHUS。', badge: '', notes: ['慕絲系列', 'SWEET OSMANTHUS', '按圖中餐牌更新'] },
  { name: '蜂蜜', english: 'HONEY', type: 'mousse', img: '/assets/products/mousse/honey.png', detail: '/assets/products/mousse/honey.png', price: 'HK$32', priceNum: 32, flavors: ['other'], availability: 'in-stock', hot: false, sortOrder: 91, copy: '慕絲系列：蜂蜜 / HONEY。', badge: '', notes: ['慕絲系列', 'HONEY', '按圖中餐牌更新'] }
];

const waBase = 'https://wa.me/85255310947?text=';
const encode = (name) => encodeURIComponent(`你好，想查詢 Little Surprise ${name} 訂購資料。`);
const cartStorageKey = 'little-surprise-cart-v1';
const cartState = [];
function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(cartStorageKey) || '[]');
    cartState.splice(0, cartState.length, ...saved
      .map((entry) => {
        const product = products.find((item) => item.img === entry.img);
        const qty = Math.max(1, Math.min(99, Number(entry.qty) || 1));
        return product ? { product, qty } : null;
      })
      .filter(Boolean));
  } catch (error) {
    localStorage.removeItem(cartStorageKey);
  }
}
function saveCart() {
  localStorage.setItem(cartStorageKey, JSON.stringify(cartState.map((item) => ({ img: item.product.img, qty: item.qty }))));
}
loadCart();
const productLabel = (p) => `${p.name} / ${p.english}`;
const buildCartMessage = () => [
  '你好，想向 Little Surprise 查詢／預訂以下產品：',
  '',
  ...cartState.map((item, index) => `${index + 1}. ${productLabel(item.product)} x ${item.qty} — ${item.product.price}`),
  '',
  '自取／送貨日期時間：',
  '姓名：',
  '聯絡電話：',
  '備註：'
].join('\n');
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
  all: '全部產品', 'cheese-cake': 'CHEESE CAKE 芝士蛋糕', 'butter-cake': 'BUTTER CAKE 牛油蛋糕', tart: 'TART 撻', roll: 'ROLL 卷蛋', mousse: 'MOUSSE 慕絲', 'butter-mochicake': '麻糬牛油蛋糕',
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
  const inCart = cartState.some((item) => item.product.img === p.img);
  return `
    <article class="catalogue-card" data-type="${p.type}" data-product="${p.img}">
      <div class="product-open" data-product="${p.img}" tabindex="0" role="button" aria-label="查看 ${p.name} 詳情">
        <div class="image-wrap">
          ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
          <img src="${assetPath(p.img)}" alt="${p.name} demo product image" />
        </div>
        <div class="card-copy">
          <h3>${p.name}</h3>
          <p>${p.copy}</p>
          <div class="card-line"><span class="ask-price">${p.price}</span><span class="card-detail" aria-hidden="true">▢</span></div>
        </div>
      </div>
      <button class="cart-add" type="button" data-add-cart="${p.img}">${inCart ? '已加入・再加一件' : '加入購物車'}</button>
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

function openProduct(productKey) {
  const p = products.find((item) => item.img === productKey || item.name === productKey) || products[2];
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
  modal.querySelector('[data-modal-add]')?.setAttribute('data-modal-add', p.img);
  qty = 1;
  if (qtyOutput) qtyOutput.value = String(qty);
  modal.showModal();
  document.body.classList.add('modal-open');
}

function closeProduct() {
  const modal = document.querySelector('#productModal');
  if (!modal) return;
  modal.close();
  document.body.classList.remove('modal-open');
}

function ensureCartDrawer() {
  if (document.querySelector('#shoppingCart')) return;
  document.body.insertAdjacentHTML('beforeend', `
    <div class="cart-drawer-backdrop" data-cart-close hidden></div>
    <aside class="shopping-cart-panel" id="shoppingCart" aria-label="Shopping cart export to WhatsApp" aria-hidden="true">
      <div class="cart-panel-head">
        <div>
          <p>EXPORT TO WHATSAPP</p>
          <h2>購物車 Shopping Cart</h2>
          <span>先加入想要的產品，再一鍵匯出成 WhatsApp 訊息。暫時不會網上付款或直接落單。</span>
        </div>
        <div class="cart-panel-tools">
          <strong data-cart-count>0 件產品</strong>
          <button class="cart-drawer-close" type="button" data-cart-close aria-label="Close shopping cart">×</button>
        </div>
      </div>
      <p class="cart-empty" id="cartEmpty">購物車暫時未有產品。請在產品頁按「加入購物車」。</p>
      <div class="cart-list" id="cartList" aria-live="polite"></div>
      <div class="cart-actions">
        <a class="button primary disabled" id="cartWhatsapp" href="./products.html#catalogue" target="_blank" rel="noreferrer" aria-disabled="true">Send to WhatsApp</a>
        <button class="button outline" id="cartClear" type="button" hidden>清空購物車</button>
      </div>
    </aside>
  `);
}

function setCartDrawer(open) {
  ensureCartDrawer();
  const drawer = document.querySelector('#shoppingCart');
  const backdrop = document.querySelector('.cart-drawer-backdrop');
  document.body.classList.toggle('cart-open', open);
  drawer?.setAttribute('aria-hidden', String(!open));
  document.querySelectorAll('[data-cart-open]').forEach((button) => button.setAttribute('aria-expanded', String(open)));
  if (backdrop) backdrop.hidden = !open;
  if (open) drawer?.querySelector('#cartWhatsapp, [data-cart-close]')?.focus({ preventScroll: true });
}

function renderCart() {
  ensureCartDrawer();
  const list = document.querySelector('#cartList');
  const empty = document.querySelector('#cartEmpty');
  const countEls = document.querySelectorAll('[data-cart-count]');
  const send = document.querySelector('#cartWhatsapp');
  const clear = document.querySelector('#cartClear');
  const headerBags = document.querySelectorAll('.catalogue-actions .bag span');
  const totalQty = cartState.reduce((sum, item) => sum + item.qty, 0);
  countEls.forEach((el) => { el.textContent = `${totalQty} 件產品`; });
  headerBags.forEach((el) => { el.textContent = totalQty; });
  if (!list || !empty || !send) return;
  empty.hidden = cartState.length > 0;
  list.innerHTML = cartState.map((item) => `
    <article class="cart-item" data-cart-item="${item.product.img}">
      <img src="${assetPath(item.product.img)}" alt="" />
      <div class="cart-item-copy"><strong>${item.product.name}</strong><span>${item.product.english}</span><small>${item.product.price}</small></div>
      <div class="cart-qty" aria-label="數量 ${item.qty}">
        <button type="button" data-cart-delta="-1" data-cart-product="${item.product.img}" aria-label="減少 ${item.product.name}">−</button>
        <output>${item.qty}</output>
        <button type="button" data-cart-delta="1" data-cart-product="${item.product.img}" aria-label="增加 ${item.product.name}">＋</button>
      </div>
      <button class="cart-remove" type="button" data-cart-remove="${item.product.img}" aria-label="移除 ${item.product.name}">×</button>
    </article>
  `).join('');
  send.href = cartState.length ? `${waBase}${encodeURIComponent(buildCartMessage())}` : '#catalogue';
  send.classList.toggle('disabled', cartState.length === 0);
  send.setAttribute('aria-disabled', String(cartState.length === 0));
  if (clear) clear.hidden = cartState.length === 0;
}

function addToCart(productKey, quantity = 1) {
  const product = products.find((item) => item.img === productKey || item.name === productKey);
  if (!product) return;
  const existing = cartState.find((item) => item.product.img === product.img);
  if (existing) existing.qty = Math.min(99, existing.qty + quantity);
  else cartState.push({ product, qty: Math.max(1, quantity) });
  saveCart();
  renderProducts();
  renderCart();
}

function changeCartQty(productKey, delta) {
  const item = cartState.find((entry) => entry.product.img === productKey);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cartState.splice(cartState.indexOf(item), 1);
  saveCart();
  renderProducts();
  renderCart();
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
  document.querySelectorAll('[data-add-cart]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      addToCart(button.dataset.addCart);
    });
  });
}

function syncFilterButtons() {
  document.querySelectorAll('.filter').forEach((button) => {
    button.classList.toggle('active', button.dataset.filter === catalogueState.category);
  });
}

ensureCartDrawer();
updateFilterCounts();
renderProducts();
renderCart();

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

document.querySelectorAll('[data-cart-open]').forEach((button) => button.addEventListener('click', (event) => {
  event.preventDefault();
  setCartDrawer(true);
}));
document.querySelectorAll('[data-cart-close]').forEach((button) => button.addEventListener('click', () => setCartDrawer(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setCartDrawer(false);
});

const filterToggle = document.querySelector('[data-filter-toggle]');
const filterBackdrop = document.querySelector('.filter-backdrop');
function setFilterSidebar(open) {
  document.body.classList.toggle('filter-sidebar-open', open);
  filterToggle?.setAttribute('aria-expanded', String(open));
  if (filterBackdrop) filterBackdrop.hidden = !open;
}
filterToggle?.addEventListener('click', () => setFilterSidebar(!document.body.classList.contains('filter-sidebar-open')));
document.querySelectorAll('[data-filter-close]').forEach((button) => button.addEventListener('click', () => setFilterSidebar(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setFilterSidebar(false);
});
window.matchMedia('(min-width: 861px)').addEventListener('change', (event) => {
  if (event.matches) setFilterSidebar(false);
});

document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', closeProduct));
document.querySelector('[data-modal-add]')?.addEventListener('click', (event) => {
  syncQtyInput();
  const key = event.currentTarget.dataset.modalAdd;
  addToCart(key, qty);
  closeProduct();
  setCartDrawer(true);
});
document.querySelector('#productModal')?.addEventListener('click', (event) => {
  if (event.target.id === 'productModal') closeProduct();
});

let qty = 1;
const qtyOutput = document.querySelector('#qty');
const clampQty = (value) => Math.max(1, Math.min(Number.parseInt(value, 10) || 1, 20));
const syncQtyInput = () => {
  qty = clampQty(qtyOutput?.value ?? qty);
  if (qtyOutput) qtyOutput.value = String(qty);
};
document.querySelector('#cartList')?.addEventListener('click', (event) => {
  const deltaButton = event.target.closest('[data-cart-delta]');
  if (deltaButton) changeCartQty(deltaButton.dataset.cartProduct, Number(deltaButton.dataset.cartDelta));
  const removeButton = event.target.closest('[data-cart-remove]');
  if (removeButton) changeCartQty(removeButton.dataset.cartRemove, -999);
});
document.querySelector('#cartClear')?.addEventListener('click', () => {
  cartState.splice(0, cartState.length);
  saveCart();
  renderProducts();
  renderCart();
});
document.querySelector('#cartWhatsapp')?.addEventListener('click', (event) => {
  if (!cartState.length) event.preventDefault();
});

document.querySelectorAll('[data-qty]').forEach((button) => {
  button.addEventListener('click', () => {
    qty = clampQty(qty + (button.dataset.qty === 'plus' ? 1 : -1));
    if (qtyOutput) qtyOutput.value = String(qty);
  });
});
qtyOutput?.addEventListener('input', () => {
  qty = clampQty(qtyOutput.value);
});
qtyOutput?.addEventListener('change', syncQtyInput);
qtyOutput?.addEventListener('blur', syncQtyInput);

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
  cartState,
  buildCartMessage,
};
