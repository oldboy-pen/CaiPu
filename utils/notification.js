// 订单通知工具类
const adminConfig = require('../config/admin.js')

/**
 * 发送订单通知给管理员
 * @param {Object} order 订单信息
 */
function sendOrderNotification(order) {
  console.log('准备发送订单通知:', order)

  // 1. 使用云函数发送通知
  if (adminConfig.notification.enableCloudFunction) {
    sendCloudNotification(order)
  }

  // 2. 使用模板消息发送通知
  if (adminConfig.notification.enableTemplateMessage) {
    sendTemplateMessage(order)
  }

  // 3. 记录到本地存储（模拟后端存储）
  saveNotificationToStorage(order)
}

/**
 * 通过云函数发送通知
 * @param {Object} order 订单信息
 */
function sendCloudNotification(order) {
  try {
    // 构造通知数据
    const notificationData = {
      type: 'new_order',
      order: {
        id: order.id,
        totalPrice: order.totalPrice,
        totalCount: order.totalCount,
        status: order.status,
        createTime: order.createTime,
        items: order.items.map(item => ({
          name: item.name,
          price: item.price,
          count: item.count
        }))
      },
      adminOpenIds: adminConfig.adminOpenIds,
      timestamp: new Date().getTime()
    }

    console.log('云函数通知数据:', notificationData)

    // 如果启用了云开发，调用云函数
    if (wx.cloud) {
      wx.cloud.callFunction({
        name: adminConfig.notification.cloudFunctionName,
        data: notificationData,
        success: (res) => {
          console.log('云函数通知发送成功:', res)
        },
        fail: (err) => {
          console.error('云函数通知发送失败:', err)
          // 云函数失败时，使用本地存储模拟
          console.log('使用本地存储模拟通知发送')
        }
      })
    } else {
      console.log('未启用云开发，使用本地存储模拟')
    }
  } catch (error) {
    console.error('发送云函数通知时出错:', error)
  }
}

/**
 * 发送模板消息
 * @param {Object} order 订单信息
 */
function sendTemplateMessage(order) {
  try {
    // 遍历管理员openid发送模板消息
    adminConfig.adminOpenIds.forEach(openId => {
      wx.requestSubscribeMessage({
        tmplIds: [adminConfig.notification.templateId],
        success: (res) => {
          console.log(`管理员 ${openId} 订阅消息成功:`, res)
          
          // 构造模板消息内容
          const templateData = {
            thing1: { value: `订单 #${order.id}` },
            amount2: { value: `¥${order.totalPrice}` },
            thing3: { value: `${order.totalCount}份菜品` },
            date4: { value: order.createTime }
          }

          console.log('模板消息数据:', templateData)
        },
        fail: (err) => {
          console.error(`管理员 ${openId} 订阅消息失败:`, err)
        }
      })
    })
  } catch (error) {
    console.error('发送模板消息时出错:', error)
  }
}

/**
 * 将通知保存到本地存储（模拟）
 * @param {Object} order 订单信息
 */
function saveNotificationToStorage(order) {
  try {
    const notification = {
      id: Date.now(),
      type: 'new_order',
      order: order,
      read: false,
      createTime: new Date().toLocaleString()
    }

    // 获取现有通知列表
    let notifications = wx.getStorageSync('admin_notifications') || []
    notifications.unshift(notification)
    
    // 只保留最近100条通知
    if (notifications.length > 100) {
      notifications = notifications.slice(0, 100)
    }
    
    wx.setStorageSync('admin_notifications', notifications)
    console.log('通知已保存到本地存储')
  } catch (error) {
    console.error('保存通知到本地存储时出错:', error)
  }
}

/**
 * 获取未读通知数量
 * @returns {number} 未读通知数量
 */
function getUnreadNotificationCount() {
  try {
    const notifications = wx.getStorageSync('admin_notifications') || []
    return notifications.filter(n => !n.read).length
  } catch (error) {
    console.error('获取未读通知数量时出错:', error)
    return 0
  }
}

/**
 * 标记通知为已读
 * @param {number} notificationId 通知ID
 */
function markNotificationAsRead(notificationId) {
  try {
    let notifications = wx.getStorageSync('admin_notifications') || []
    notifications = notifications.map(n => {
      if (n.id === notificationId) {
        return { ...n, read: true }
      }
      return n
    })
    wx.setStorageSync('admin_notifications', notifications)
  } catch (error) {
    console.error('标记通知为已读时出错:', error)
  }
}

module.exports = {
  sendOrderNotification,
  getUnreadNotificationCount,
  markNotificationAsRead
}