# TabBar 图标使用指南

## 当前状态
目前小程序已配置为不使用图标,可以直接运行。如果需要添加图标,请按以下步骤操作。

## 添加 TabBar 图标

### 方法一: 使用本地图片文件

1. 准备图标文件(每个 Tab 需要 2 个图标):
   - home.png (首页未选中)
   - home-active.png (首页选中)
   - category.png (分类未选中)
   - category-active.png (分类选中)
   - cart.png (购物车未选中)
   - cart-active.png (购物车选中)
   - order.png (订单未选中)
   - order-active.png (订单选中)

2. 图标要求:
   - 格式: PNG
   - 尺寸: 建议为 81px * 81px
   - 大小: 不超过 40KB

3. 将图标文件放入 `icons/` 目录

4. 修改 `app.json` 文件,为每个 Tab 添加 iconPath 和 selectedIconPath 配置:

```json
"tabBar": {
  "color": "#999999",
  "selectedColor": "#FF6B6B",
  "backgroundColor": "#FFFFFF",
  "borderStyle": "black",
  "list": [
    {
      "pagePath": "pages/index/index",
      "text": "首页",
      "iconPath": "/icons/home.png",
      "selectedIconPath": "/icons/home-active.png"
    },
    ...
  ]
}
```

### 方法二: 使用网络图片

如果你有在线图片资源,可以直接在 `app.json` 中使用网络 URL:

```json
"iconPath": "https://example.com/icons/home.png",
"selectedIconPath": "https://example.com/icons/home-active.png"
```

### 方法三: 使用 Base64 编码(不推荐)

将图片转换为 Base64 编码字符串,直接嵌入配置文件中。这种方法不推荐,因为会使配置文件过大。

## 获取图标资源

你可以从以下网站免费下载图标:

- Iconfont (阿里巴巴矢量图标库): https://www.iconfont.cn/
- Flaticon: https://www.flaticon.com/
- Icons8: https://icons8.com/
- Material Design Icons: https://material.io/resources/icons/

建议使用简洁、清晰的图标,尺寸为 81x81 像素。

## 测试图标

添加图标后,在微信开发者工具中重新编译,检查底部 TabBar 是否正确显示图标。点击不同 Tab 时,图标应该在普通状态和选中状态之间切换。
