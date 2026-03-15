# 点菜小程序

一个使用微信小程序开发工具开发的点菜工具小程序。

## 功能特性

- 📱 **首页**: 展示推荐菜品、热门菜品、快捷导航
- 🍽️ **分类点菜**: 按菜品分类浏览,支持热菜、凉菜、主食、汤品、饮品等
- 🛒 **购物车**: 管理已选菜品,支持增减数量、清空购物车
- 📋 **订单管理**: 查看历史订单,支持重新购买、查看详情

## 项目结构

```
CaiPu/
├── app.js                 # 小程序主逻辑
├── app.json               # 小程序全局配置
├── app.wxss              # 全局样式
├── sitemap.json          # 站点地图配置
├── pages/                # 页面目录
│   ├── index/           # 首页
│   │   ├── index.js
│   │   ├── index.wxml
│   │   ├── index.wxss
│   │   └── index.json
│   ├── category/        # 分类页面
│   │   ├── category.js
│   │   ├── category.wxml
│   │   ├── category.wxss
│   │   └── category.json
│   ├── cart/           # 购物车页面
│   │   ├── cart.js
│   │   ├── cart.wxml
│   │   ├── cart.wxss
│   │   └── cart.json
│   └── order/          # 订单页面
│       ├── order.js
│       ├── order.wxml
│       ├── order.wxss
│       └── order.json
├── images/             # 图片资源目录
└── icons/              # 图标资源目录
```

## 开发说明

### 1. 准备工作

1. 下载并安装微信开发者工具
2. 注册微信小程序账号,获取 AppID
3. 在 `project.config.json` 中配置你的 AppID

### 2. 运行项目

1. 打开微信开发者工具
2. 选择"导入项目"
3. 选择本项目目录
4. 填写 AppID(或选择测试号)
5. 点击"导入"即可运行

### 3. 添加图片资源

小程序需要以下图片资源,请将图片放入对应目录:

**images 目录:**
- banner1.jpg, banner2.jpg - 首页轮播图
- 各菜品的图片文件(共16个菜品图片)

**icons 目录:**
- home.png, home-active.png - 首页图标
- category.png, category-active.png - 分类图标
- cart.png, cart-active.png - 购物车图标
- order.png, order-active.png - 订单图标

注意: 如果没有实际图片,小程序会显示空白占位符,但不影响功能使用。

### 4. 功能说明

#### 首页
- 轮播图展示促销信息
- 快捷导航入口
- 今日推荐菜品横向滚动展示
- 热门菜品列表展示
- 点击"+"可快速加入购物车

#### 分类点菜
- 左侧分类导航,右侧菜品列表
- 点击分类切换对应菜品
- 每个菜品显示图片、名称、价格、销量
- 支持快速加入购物车

#### 购物车
- 展示已选菜品列表
- 支持增减数量
- 支持删除单个菜品
- 支持清空购物车
- 底部显示总价和数量
- 点击"去结算"模拟支付流程

#### 订单
- 展示历史订单列表
- 显示订单时间、状态、菜品预览
- 查看订单详情
- "再来一单"功能快速重新购买
- 删除订单记录

### 5. 数据存储

- 购物车数据存储在 app.globalData 中
- 订单数据使用 wx.getStorageSync 和 wx.setStorageSync 本地存储

### 6. 自定义配置

可以在 `app.js` 中修改:
- 菜品分类 (categories)
- 菜品列表 (menuList)
- 菜品信息包括:id, categoryId, name, price, image, sold, description

## 注意事项

1. 本项目使用的是模拟数据,实际开发中需要连接后端API
2. 支付功能为模拟实现,实际需要对接微信支付
3. 图片资源需要自行准备,或使用占位图
4. 建议使用真实的 AppID 进行开发测试

## 技术栈

- 微信小程序原生开发
- 微信小程序 API
- 本地存储 Storage API

## 后续优化建议

- 接入真实的后端API
- 实现用户登录功能
- 添加菜品收藏功能
- 增加搜索功能
- 优化UI交互体验
- 添加菜品评价功能
