// 管理员配置
const ADMIN_CONFIG = {
  // 管理员用户ID列表（微信用户的openid）
  adminOpenIds: [
    // 请在此处添加管理员的openid
    // 示例: 'oX1234567890abcdef'
  ],

  // 管理员手机号列表（可选，用于短信通知）
  adminPhones: [
    // 请在此处添加管理员手机号
    // 示例: '13800138000'
  ],

  // 通知方式配置
  notification: {
    // 是否启用模板消息通知
    enableTemplateMessage: false,
    
    // 模板消息ID（需要在微信公众平台申请）
    templateId: '',
    
    // 是否启用云函数通知
    enableCloudFunction: true,
    
    // 云函数名称
    cloudFunctionName: 'sendOrderNotification'
  }
}

module.exports = ADMIN_CONFIG