# 图标文件说明

本目录需要放置以下 8 个图标文件:

## 首页图标
- home.png (未选中状态)
- home-active.png (选中状态)

## 分类图标
- category.png (未选中状态)
- category-active.png (选中状态)

## 购物车图标
- cart.png (未选中状态)
- cart-active.png (选中状态)

## 订单图标
- order.png (未选中状态)
- order-active.png (选中状态)

## 图标规格
- 格式: PNG
- 尺寸: 81px * 81px (建议)
- 大小: 不超过 40KB
- 模式: 建议使用透明背景

## 下载建议

### 方案一: 使用在线图标库
1. 访问 https://www.iconfont.cn/
2. 搜索对应的图标关键词
3. 下载 PNG 格式
4. 调整尺寸为 81x81 像素
5. 保存到本目录并重命名

### 方案二: 使用设计工具
使用 Photoshop、Sketch 或 Figma 等工具设计简单图标:
- 首页: 房子图标 🏠
- 分类: 网格图标 📁
- 购物车: 购物车图标 🛒
- 订单: 列表图标 📋

### 方案三: 暂时运行
当前配置已移除图标要求,可以直接运行小程序。
需要时再添加图标文件并修改 app.json 配置。

## 配置说明

添加图标后,需要在 app.json 中配置图标路径:

```json
{
  "tabBar": {
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "/icons/home.png",
        "selectedIconPath": "/icons/home-active.png"
      }
      // ... 其他配置
    ]
  }
}
```
