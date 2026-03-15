Page({
  data: {
    orders: [],
    isEmpty: true
  },

  onShow() {
    this.loadOrders()
  },

  // 加载订单列表
  loadOrders() {
    const orders = wx.getStorageSync('orders') || []
    this.setData({
      orders: orders,
      isEmpty: orders.length === 0
    })
  },

  // 查看订单详情
  viewDetail(e) {
    const index = e.currentTarget.dataset.index
    const order = this.data.orders[index]

    let itemsText = order.items.map(item => `${item.name} x${item.count}`).join('\n')

    wx.showModal({
      title: '订单详情',
      content: `订单号: ${order.id}\n时间: ${order.createTime}\n\n菜品:\n${itemsText}\n\n共${order.totalCount}份\n总价: ¥${order.totalPrice}\n状态: ${order.status}`,
      showCancel: false
    })
  },

  // 重新购买
  reorder(e) {
    const index = e.currentTarget.dataset.index
    const order = this.data.orders[index]

    wx.showModal({
      title: '提示',
      content: '确定要将这些菜品重新加入购物车吗?',
      success: (res) => {
        if (res.confirm) {
          const app = getApp()
          const cart = app.globalData.cart

          // 将订单中的菜品加入购物车
          order.items.forEach(orderItem => {
            const existingItem = cart.find(item => item.id === orderItem.id)
            if (existingItem) {
              existingItem.count += orderItem.count
            } else {
              cart.push({
                ...orderItem,
                count: orderItem.count
              })
            }
          })

          app.globalData.cart = cart

          wx.showToast({
            title: '已加入购物车',
            icon: 'success'
          })

          // 更新购物车数量
          const totalCount = cart.reduce((sum, item) => sum + item.count, 0)
          if (totalCount > 0) {
            wx.setTabBarBadge({
              index: 2,
              text: totalCount.toString()
            })
          }
        }
      }
    })
  },

  // 删除订单
  deleteOrder(e) {
    const index = e.currentTarget.dataset.index
    wx.showModal({
      title: '提示',
      content: '确定要删除这条订单记录吗?',
      success: (res) => {
        if (res.confirm) {
          const orders = this.data.orders
          orders.splice(index, 1)
          wx.setStorageSync('orders', orders)
          this.loadOrders()
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
