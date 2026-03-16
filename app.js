App({
  globalData: {
    cart: [],
    categories: [
      { id: 1, name: '招牌热菜', icon: '🍲', sort: 1 },
      { id: 2, name: '清爽凉菜', icon: '🥗', sort: 2 },
      { id: 3, name: '主食类', icon: '🍚', sort: 3 },
      { id: 4, name: '汤羹类', icon: '🍜', sort: 4 },
      { id: 5, name: '饮品甜品', icon: '🥤', sort: 5 },
      { id: 6, name: '特色小吃', icon: '🍢', sort: 6 }
    ],
    menuList: [
      // 招牌热菜
      { id: 1, categoryId: 1, name: '红烧肉', price: 68, originalPrice: 78, image: '/images/hongshaorou.jpg', sold: 1286, rating: 4.8, description: '精选五花肉,慢火炖煮3小时,肥而不腻,入口即化', tags: ['招牌', '必点'], stock: 50, hot: true },
      { id: 2, categoryId: 1, name: '糖醋排骨', price: 58, originalPrice: 68, image: '/images/tangcupaigu.jpg', sold: 892, rating: 4.7, description: '精选小排,酸甜适中,色泽诱人,外酥里嫩', tags: ['招牌'], stock: 45, hot: true },
      { id: 3, categoryId: 1, name: '宫保鸡丁', price: 48, originalPrice: 55, image: '/images/gongbaojiding.jpg', sold: 1245, rating: 4.6, description: '正宗川味,麻辣鲜香,配菜丰富,下饭神器', tags: ['川菜'], stock: 60 },
      { id: 4, categoryId: 1, name: '麻婆豆腐', price: 32, originalPrice: 38, image: '/images/mapodoufu.jpg', sold: 1567, rating: 4.7, description: '嫩滑豆腐,麻辣鲜嫩,经典川菜,人气爆款', tags: ['川菜', '素菜'], stock: 80, hot: true },
      { id: 5, categoryId: 1, name: '水煮鱼', price: 88, originalPrice: 98, image: '/images/shuizhuyu.jpg', sold: 678, rating: 4.9, description: '鲜嫩鱼肉,麻辣过瘾,配菜丰富,份量十足', tags: ['川菜', '推荐'], stock: 30 },
      { id: 6, categoryId: 1, name: '回锅肉', price: 52, originalPrice: 58, image: '/images/huiguorou.jpg', sold: 987, rating: 4.6, description: '传统川菜,肥瘦相间,香辣可口,经典美味', tags: ['川菜'], stock: 55 },
      { id: 7, categoryId: 1, name: '鱼香肉丝', price: 42, originalPrice: 48, image: '/images/yuxiangrous.jpg', sold: 1123, rating: 4.5, description: '酸甜微辣,口感丰富,经典川菜,老少皆宜', tags: ['川菜'], stock: 70 },
      { id: 8, categoryId: 1, name: '辣子鸡', price: 68, originalPrice: 75, image: '/images/laziji.jpg', sold: 856, rating: 4.7, description: '外酥里嫩,麻辣鲜香,配花生米,下酒佳肴', tags: ['川菜', '推荐'], stock: 40 },

      // 清爽凉菜
      { id: 9, categoryId: 2, name: '拍黄瓜', price: 18, originalPrice: 20, image: '/images/paihuanggua.jpg', sold: 2345, rating: 4.8, description: '新鲜黄瓜,拍制入味,清脆爽口,开胃解腻', tags: ['必点', '素菜'], stock: 100, hot: true },
      { id: 10, categoryId: 2, name: '凉拌木耳', price: 22, originalPrice: 25, image: '/images/liangbanmuer.jpg', sold: 1876, rating: 4.6, description: '野生木耳,凉拌调味,营养丰富,口感爽滑', tags: ['素菜', '健康'], stock: 90 },
      { id: 11, categoryId: 2, name: '口水鸡', price: 45, originalPrice: 52, image: '/images/koushuiji.jpg', sold: 1567, rating: 4.7, description: '麻辣鲜香,肉质鲜嫩,红油飘香,回味无穷', tags: ['推荐'], stock: 60, hot: true },
      { id: 12, categoryId: 2, name: '夫妻肺片', price: 48, originalPrice: 55, image: '/images/fuqifeipian.jpg', sold: 1234, rating: 4.8, description: '传统川味,麻辣爽口,荤素搭配,风味独特', tags: ['川菜'], stock: 50 },
      { id: 13, categoryId: 2, name: '凉拌海蜇', price: 38, originalPrice: 42, image: '/images/liangbanhai.jpg', sold: 876, rating: 4.5, description: '海蜇爽口,蒜香浓郁,开胃解腻,清新爽口', tags: ['海鲜'], stock: 40 },
      { id: 14, categoryId: 2, name: '花生米拌豆干', price: 25, originalPrice: 28, image: '/images/peasants.jpg', sold: 1567, rating: 4.4, description: '香脆花生,嫩滑豆干,咸香适口,经典凉菜', tags: ['素菜'], stock: 80 },
      { id: 39, categoryId: 2, name: '凉拌折耳根', price: 25, originalPrice: 28, image: '/images/liangbanzheergeng.jpg', sold: 1567, rating: 4.4, description: '传统川味，清脆爽口，开胃解腻，老少皆宜', tags: ['素菜'], stock: 80 },

      // 主食类
      { id: 15, categoryId: 3, name: '精品米饭', price: 2, originalPrice: 3, image: '/images/mifan.jpg', sold: 5678, rating: 4.9, description: '东北大米,颗粒饱满,香甜可口,软糯适中', tags: ['主食', '必点'], stock: 200, hot: true },
      { id: 16, categoryId: 3, name: '黄金蛋炒饭', price: 16, originalPrice: 18, image: '/images/danchaofan.jpg', sold: 3245, rating: 4.8, description: '优质大米,金黄蛋液,蛋香浓郁,粒粒分明', tags: ['主食', '推荐'], stock: 150, hot: true },
      { id: 17, categoryId: 3, name: '手工水饺', price: 28, originalPrice: 32, image: '/images/shuijiao.jpg', sold: 2345, rating: 4.7, description: '手工制作,皮薄馅大,鲜美多汁,现包现煮', tags: ['主食', '必点'], stock: 100 },
      { id: 18, categoryId: 3, name: '牛肉炒面', price: 22, originalPrice: 25, image: '/images/niurouchaomian.jpg', sold: 1876, rating: 4.6, description: '劲道面条,鲜嫩牛肉,香气四溢,份量十足', tags: ['主食'], stock: 120 },
      { id: 19, categoryId: 3, name: '扬州炒饭', price: 18, originalPrice: 20, image: '/images/yangzhouchaofan.jpg', sold: 2876, rating: 4.7, description: '经典粤菜,配菜丰富,色香味俱全,营养均衡', tags: ['主食'], stock: 130 },
      { id: 20, categoryId: 3, name: '蛋炒河粉', price: 20, originalPrice: 22, image: '/images/danchaohafen.jpg', sold: 1567, rating: 4.5, description: '宽滑河粉,蛋香浓郁,炒制入味,口感爽滑', tags: ['主食'], stock: 100 },

      // 汤羹类
      { id: 21, categoryId: 4, name: '番茄鸡蛋汤', price: 18, originalPrice: 20, image: '/images/fanqiejidantang.jpg', sold: 4567, rating: 4.9, description: '新鲜番茄,嫩滑鸡蛋,酸甜可口,营养丰富', tags: ['汤品', '必点'], stock: 150, hot: true },
      { id: 22, categoryId: 4, name: '紫菜蛋花汤', price: 16, originalPrice: 18, image: '/images/zicaidanhuatang.jpg', sold: 3876, rating: 4.8, description: '鲜美紫菜,嫩滑蛋花,清淡爽口,老少皆宜', tags: ['汤品'], stock: 160 },
      { id: 23, categoryId: 4, name: '老火靓汤', price: 68, originalPrice: 78, image: '/images/laohuoliangtang.jpg', sold: 1234, rating: 4.9, description: '文火慢炖,药材滋补,汤色清亮,营养满分', tags: ['汤品', '推荐'], stock: 50 },
      { id: 24, categoryId: 4, name: '排骨玉米汤', price: 58, originalPrice: 65, image: '/images/paiguyumi.jpg', sold: 1567, rating: 4.7, description: '鲜嫩排骨,甜玉米,汤味浓郁,滋补养颜', tags: ['汤品'], stock: 60 },
      { id: 25, categoryId: 4, name: '银耳莲子汤', price: 25, originalPrice: 28, image: '/images/yinrlianzi.jpg', sold: 2345, rating: 4.8, description: '滋补银耳,清甜莲子,润肺养颜,清甜可口', tags: ['汤品', '甜品'], stock: 80 },
      { id: 26, categoryId: 4, name: '冬瓜排骨汤', price: 45, originalPrice: 50, image: '/images/dongguapaigu.jpg', sold: 1234, rating: 4.6, description: '清爽冬瓜,鲜嫩排骨,汤味清淡,解腻佳品', tags: ['汤品'], stock: 70 },

      // 饮品甜品
      { id: 27, categoryId: 5, name: '冰镇可乐', price: 6, originalPrice: 8, image: '/images/kele.jpg', sold: 6789, rating: 4.8, description: '冰爽解腻,经典饮品,快乐源泉', tags: ['饮品', '必点'], stock: 200, hot: true },
      { id: 28, categoryId: 5, name: '手工酸梅汤', price: 12, originalPrice: 15, image: '/images/suanmeitang.jpg', sold: 4567, rating: 4.9, description: '传统秘制,清热解暑,酸甜可口,解腻消食', tags: ['饮品', '推荐'], stock: 150, hot: true },
      { id: 29, categoryId: 5, name: '鲜榨柠檬茶', price: 15, originalPrice: 18, image: '/images/ningmengcha.jpg', sold: 3456, rating: 4.7, description: '新鲜柠檬,清爽解腻,提神醒脑,维C满满', tags: ['饮品', '新鲜'], stock: 120 },
      { id: 30, categoryId: 5, name: '鲜榨西瓜汁', price: 18, originalPrice: 22, image: '/images/xigua.jpg', sold: 2876, rating: 4.8, description: '新鲜西瓜,清甜可口,消暑解渴,天然健康', tags: ['饮品', '新鲜'], stock: 100 },
      { id: 31, categoryId: 5, name: '红豆沙', price: 16, originalPrice: 18, image: '/images/hongdousha.jpg', sold: 2345, rating: 4.9, description: '手工熬制,甜而不腻,软糯香甜,经典甜品', tags: ['甜品', '必点'], stock: 80 },
      { id: 32, categoryId: 5, name: '芝麻糊', price: 14, originalPrice: 16, image: '/images/zhimahu.jpg', sold: 1876, rating: 4.8, description: '香浓芝麻,细腻顺滑,营养丰富,传统美味', tags: ['甜品'], stock: 70 },

      // 特色小吃
      { id: 33, categoryId: 6, name: '炸鸡翅', price: 28, originalPrice: 32, image: '/images/zhajichi.jpg', sold: 3456, rating: 4.7, description: '外酥里嫩,香脆可口,黄金色泽,人气小吃', tags: ['小吃', '推荐'], stock: 80 },
      { id: 34, categoryId: 6, name: '酥脆薯条', price: 15, originalPrice: 18, image: '/images/shutiao.jpg', sold: 4567, rating: 4.6, description: '金黄酥脆,外焦里嫩,蘸酱美味,老少皆宜', tags: ['小吃', '必点'], stock: 150, hot: true },
      { id: 35, categoryId: 6, name: '烤串拼盘', price: 58, originalPrice: 65, image: '/images/kaoc.jpg', sold: 2345, rating: 4.8, description: '多串拼盘,香辣过瘾,现烤现卖,香气扑鼻', tags: ['小吃', '推荐'], stock: 60 },
      { id: 36, categoryId: 6, name: '锅贴', price: 22, originalPrice: 25, image: '/images/guotie.jpg', sold: 1876, rating: 4.7, description: '金黄酥脆,馅料丰富,外焦里嫩,传统美食', tags: ['小吃'], stock: 100 },
      { id: 37, categoryId: 6, name: '炸春卷', price: 18, originalPrice: 20, image: '/images/zhachunjuan.jpg', sold: 1567, rating: 4.6, description: '外酥里嫩,馅料丰富,金黄诱人,经典小吃', tags: ['小吃'], stock: 80 },
      { id: 38, categoryId: 6, name: '肉夹馍', price: 15, originalPrice: 18, image: '/images/roujiamo.jpg', sold: 2876, rating: 4.8, description: '酥脆外皮,鲜嫩肉馅,香气四溢,陕西特色', tags: ['小吃', '推荐'], stock: 120 }
    ]
  },

  onLaunch() {
    console.log('小程序启动')
  }
})
