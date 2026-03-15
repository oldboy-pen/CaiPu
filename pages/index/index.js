const app = getApp()

Page({
  data: {
    recommendList: [],
    cartCount: 0
  },

  onLoad() {
    this.loadRecommend()
    this.updateCartCount()
  },

  onShow() {
    this.updateCartCount()
    // 重新加载推荐菜品以获取最新的已售数量
    this.loadRecommend()
  },

  // 加载推荐菜品
  loadRecommend() {
    const menuList = app.globalData.menuList
    // 添加占位符并随机选择4个推荐菜品
    const recommend = menuList.map(dish => ({
      ...dish,
      placeholder: this.getPlaceholderEmoji(dish.categoryId)
    })).sort(() => 0.5 - Math.random()).slice(0, 4)
    this.setData({ recommendList: recommend })
  },

  // 根据分类获取占位emoji
  getPlaceholderEmoji(categoryId) {
    const emojis = {
      1: '🍲', // 热菜
      2: '🥗', // 凉菜
      3: '🍚', // 主食
      4: '🍜', // 汤品
      5: '🥤', // 饮品
      6: '🍢'  // 小吃
    }
    return emojis[categoryId] || '🍽️'
  },

  // 图片加载错误处理
  onImageError(e) {
    const id = e.currentTarget.dataset.id
    const recommendList = this.data.recommendList.map(dish => {
      if (dish.id === id) {
        return { ...dish, imageError: true }
      }
      return dish
    })
    this.setData({ recommendList })
  },

  // 轮播图加载错误处理
  onBannerError(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      [`banners[${index}].error`]: true
    })
  },

  // 添加到购物车
  addToCart(e) {
    const dish = e.currentTarget.dataset.dish
    const cart = app.globalData.cart
    const existingItem = cart.find(item => item.id === dish.id)

    if (existingItem) {
      existingItem.count++
    } else {
      cart.push({
        ...dish,
        count: 1
      })
    }

    app.globalData.cart = cart
    this.updateCartCount()

    wx.showToast({
      title: '已加入购物车',
      icon: 'success'
    })
  },

  // 更新购物车数量
  updateCartCount() {
    const cart = app.globalData.cart
    const count = cart.reduce((sum, item) => sum + item.count, 0)
    this.setData({ cartCount: count })

    // 设置tabBar徽标
    if (count > 0) {
      wx.setTabBarBadge({
        index: 2,
        text: count.toString()
      })
    } else {
      wx.removeTabBarBadge({
        index: 2
      })
    }
  },

  // 查看菜品详情
  viewDetail(e) {
    const dish = e.currentTarget.dataset.dish
    wx.showModal({
      title: dish.name,
      content: `${dish.description}\n\n价格: ¥${dish.price}\n已售: ${dish.sold}份`,
      showCancel: false
    })
  },

  // 跳转到分类页面
  goToCategory() {
    wx.switchTab({
      url: '/pages/category/category'
    })
  },

  // 跳转到购物车
  goToCart() {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },

  // 跳转到订单页面
  goToOrder() {
    wx.switchTab({
      url: '/pages/order/order'
    })
  }
})
