const app = getApp()

Page({
  data: {
    cart: [],
    totalPrice: 0,
    totalCount: 0,
    isEmpty: true
  },

  onShow() {
    this.loadCart()
  },

  // 加载购物车
  loadCart() {
    const cart = app.globalData.cart
    let totalPrice = 0
    let totalCount = 0

    cart.forEach(item => {
      totalPrice += item.price * item.count
      totalCount += item.count
    })

    this.setData({
      cart: cart,
      totalPrice: totalPrice,
      totalCount: totalCount,
      isEmpty: cart.length === 0
    })

    // 更新底部tabBar徽标
    if (totalCount > 0) {
      wx.setTabBarBadge({
        index: 2,
        text: totalCount.toString()
      })
    } else {
      wx.removeTabBarBadge({
        index: 2
      })
    }
  },

  // 增加数量
  increase(e) {
    const index = e.currentTarget.dataset.index
    const cart = this.data.cart
    cart[index].count++
    app.globalData.cart = cart
    this.loadCart()
  },

  // 减少数量
  decrease(e) {
    const index = e.currentTarget.dataset.index
    const cart = this.data.cart

    if (cart[index].count > 1) {
      cart[index].count--
    } else {
      wx.showModal({
        title: '提示',
        content: '确定要删除这道菜品吗?',
        success: (res) => {
          if (res.confirm) {
            cart.splice(index, 1)
            app.globalData.cart = cart
            this.loadCart()
          }
        }
      })
      return
    }

    app.globalData.cart = cart
    this.loadCart()
  },

  // 删除商品
  deleteItem(e) {
    const index = e.currentTarget.dataset.index
    wx.showModal({
      title: '提示',
      content: '确定要删除这道菜品吗?',
      success: (res) => {
        if (res.confirm) {
          const cart = this.data.cart
          cart.splice(index, 1)
          app.globalData.cart = cart
          this.loadCart()
        }
      }
    })
  },

  // 清空购物车
  clearCart() {
    wx.showModal({
      title: '提示',
      content: '确定要清空购物车吗?',
      success: (res) => {
        if (res.confirm) {
          app.globalData.cart = []
          this.loadCart()
        }
      }
    })
  },

  // 结算
  checkout() {
    if (this.data.cart.length === 0) {
      wx.showToast({
        title: '购物车为空',
        icon: 'none'
      })
      return
    }

    wx.showModal({
      title: '确认订单',
      content: `共${this.data.totalCount}份菜品,总价¥${this.data.totalPrice}`,
      confirmText: '去支付',
      success: (res) => {
        if (res.confirm) {
          // 模拟支付成功
          wx.showLoading({
            title: '支付中...'
          })

          setTimeout(() => {
            wx.hideLoading()
            wx.showToast({
              title: '支付成功',
              icon: 'success'
            })

            // 更新菜品的已售数量
            this.data.cart.forEach(cartItem => {
              const originalSold = app.globalData.menuList.find(item => item.id === cartItem.id)?.sold || 0
              app.globalData.menuList = app.globalData.menuList.map(menuItem => {
                if (menuItem.id === cartItem.id) {
                  const newSold = menuItem.sold + cartItem.count
                  console.log(`更新菜品 ${menuItem.name} 已售数量: ${originalSold} -> ${newSold}`)
                  return {
                    ...menuItem,
                    sold: newSold
                  }
                }
                return menuItem
              })
            })

            // 保存订单
            const order = {
              id: Date.now(),
              items: [...this.data.cart],
              totalPrice: this.data.totalPrice,
              totalCount: this.data.totalCount,
              status: '已完成',
              createTime: new Date().toLocaleString()
            }

            // 获取历史订单
            let orders = wx.getStorageSync('orders') || []
            orders.unshift(order)
            wx.setStorageSync('orders', orders)

            // 清空购物车
            app.globalData.cart = []
            this.loadCart()

            // 跳转到订单页面
            setTimeout(() => {
              wx.switchTab({
                url: '/pages/order/order'
              })
            }, 1000)
          }, 1500)
        }
      }
    })
  },

  // 跳转到分类页面
  goToCategory() {
    wx.switchTab({
      url: '/pages/category/category'
    })
  }
})
