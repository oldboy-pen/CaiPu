const app = getApp()

Page({
  data: {
    categories: [],
    menuList: [],
    currentCategoryId: 1,
    cartCount: 0
  },

  onLoad() {
    // 处理菜品图片路径,添加占位符
    const menuList = app.globalData.menuList.map(dish => ({
      ...dish,
      placeholder: this.getPlaceholderEmoji(dish.categoryId)
    }))

    this.setData({
      categories: app.globalData.categories,
      menuList: menuList,
      currentCategoryId: app.globalData.categories[0].id
    })
    this.updateCartCount()
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
    const menuList = this.data.menuList.map(dish => {
      if (dish.id === id) {
        return { ...dish, imageError: true }
      }
      return dish
    })
    this.setData({ menuList })
  },

  onShow() {
    this.updateCartCount()
    // 重新加载菜品列表以获取最新的已售数量
    this.loadMenuList()
  },

  // 加载菜品列表
  loadMenuList() {
    const menuList = app.globalData.menuList.map(dish => ({
      ...dish,
      placeholder: this.getPlaceholderEmoji(dish.categoryId)
    }))
    this.setData({ menuList })
  },

  // 切换分类
  switchCategory(e) {
    const categoryId = e.currentTarget.dataset.id
    this.setData({ currentCategoryId: categoryId })
  },

  // 获取当前分类的菜品
  getCurrentDishes() {
    return this.data.menuList.filter(dish => dish.categoryId === this.data.currentCategoryId)
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
  }
})
