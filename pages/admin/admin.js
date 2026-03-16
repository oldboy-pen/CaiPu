const notification = require('../../utils/notification.js')

Page({
  data: {
    notifications: [],
    unreadCount: 0,
    isEmpty: true
  },

  onLoad() {
    this.loadNotifications()
  },

  onShow() {
    this.loadNotifications()
  },

  // 加载通知列表
  loadNotifications() {
    try {
      const notifications = wx.getStorageSync('admin_notifications') || []
      const unreadCount = notifications.filter(n => !n.read).length
      
      this.setData({
        notifications: notifications,
        unreadCount: unreadCount,
        isEmpty: notifications.length === 0
      })
    } catch (error) {
      console.error('加载通知失败:', error)
    }
  },

  // 查看通知详情
  viewNotification(e) {
    const id = e.currentTarget.dataset.id
    const notificationData = this.data.notifications.find(n => n.id === id)
    
    if (!notificationData) return

    // 如果是未读通知，标记为已读
    if (!notificationData.read) {
      notification.markNotificationAsRead(id)
      this.loadNotifications()
    }

    // 如果是新订单，显示详情弹窗
    if (notificationData.type === 'new_order') {
      const order = notificationData.order
      let itemsText = order.items.map(item => `${item.name} x${item.count}`).join('\n')
      
      wx.showModal({
        title: '订单详情',
        content: `订单号: #${order.id}\n时间: ${order.createTime}\n\n菜品:\n${itemsText}\n\n共${order.totalCount}份\n总价: ¥${order.totalPrice}\n状态: ${order.status}`,
        showCancel: false
      })
    }
  },

  // 清空所有通知
  clearAllNotifications() {
    wx.showModal({
      title: '确认',
      content: '确定要清空所有通知吗?',
      success: (res) => {
        if (res.confirm) {
          wx.setStorageSync('admin_notifications', [])
          this.loadNotifications()
          wx.showToast({
            title: '已清空',
            icon: 'success'
          })
        }
      }
    })
  },

  // 全部标记为已读
  markAllAsRead() {
    const notifications = this.data.notifications.map(n => ({
      ...n,
      read: true
    }))
    
    wx.setStorageSync('admin_notifications', notifications)
    this.loadNotifications()
    
    wx.showToast({
      title: '已全部标记为已读',
      icon: 'success'
    })
  }
})