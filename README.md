# CaiPu
微信小程序家庭菜谱

# First Version V1.0.0
# 菜品图片说明

本目录需要放置38道菜品的图片文件。

## 图片清单

### 招牌热菜 (8张)
- hongshaorou.jpg - 红烧肉
- tangcupaigu.jpg - 糖醋排骨
- gongbaojiding.jpg - 宫保鸡丁
- mapodoufu.jpg - 麻婆豆腐
- shuizhuyu.jpg - 水煮鱼
- huiguorou.jpg - 回锅肉
- yuxiangrous.jpg - 鱼香肉丝
- laziji.jpg - 辣子鸡

### 清爽凉菜 (6张)
- paihuanggua.jpg - 拍黄瓜
- liangbanmuer.jpg - 凉拌木耳
- koushuiji.jpg - 口水鸡
- fuqifeipian.jpg - 夫妻肺片
- liangbanhai.jpg - 凉拌海蜇
- peasants.jpg - 花生米拌豆干

### 主食类 (6张)
- mifan.jpg - 精品米饭
- danchaofan.jpg - 黄金蛋炒饭
- shuijiao.jpg - 手工水饺
- niurouchaomian.jpg - 牛肉炒面
- yangzhouchaofan.jpg - 扬州炒饭
- danchaohafen.jpg - 蛋炒河粉

### 汤羹类 (6张)
- fanqiejidantang.jpg - 番茄鸡蛋汤
- zicaidanhuatang.jpg - 紫菜蛋花汤
- laohuoliangtang.jpg - 老火靓汤
- paiguyumi.jpg - 排骨玉米汤
- yinrlianzi.jpg - 银耳莲子汤
- dongguapaigu.jpg - 冬瓜排骨汤

### 饮品甜品 (6张)
- kele.jpg - 冰镇可乐
- suanmeitang.jpg - 手工酸梅汤
- ningmengcha.jpg - 鲜榨柠檬茶
- xigua.jpg - 鲜榨西瓜汁
- hongdousha.jpg - 红豆沙
- zhimahu.jpg - 芝麻糊

### 特色小吃 (6张)
- zhajichi.jpg - 炸鸡翅
- shutiao.jpg - 酥脆薯条
- kaoc.jpg - 烤串拼盘
- guotie.jpg - 锅贴
- zhachunjuan.jpg - 炸春卷
- roujiamo.jpg - 肉夹馍

### 轮播图 (2张)
- banner1.jpg - 轮播图1
- banner2.jpg - 轮播图2

## 图片要求

### 尺寸规格
- **菜品图片**: 建议 400x400 像素
- **轮播图**: 建议 750x360 像素

### 文件格式
- 格式: JPG 或 PNG
- 建议使用 JPG 格式以减小文件大小

### 文件大小
- 单个图片建议不超过 200KB
- 所有图片总大小建议不超过 5MB

### 图片质量
- 清晰度高,色彩鲜艳
- 突出菜品特色
- 白色或浅色背景优先
- 避免过度修图

## 获取图片的方法

### 方法一: 拍摄实拍图
1. 摆盘美观
2. 光线充足
3. 多角度拍摄
4. 选择最佳照片
5. 使用PS或在线工具调整尺寸

### 方法二: 网络下载
推荐网站:
- 百度图片搜索
- 淘宝/饿了么商家图库
- 菜谱网站(下厨房、豆果美食等)
- Unsplash免费图库

### 方法三: AI生成
使用AI工具生成:
- Midjourney
- DALL-E
- Stable Diffusion

提示词示例:
```
Chinese cuisine braised pork belly, professional food photography, warm lighting, high quality, 4K
```

### 方法四: 使用占位符
暂时没有图片时,可以:
1. 使用纯色背景
2. 添加菜品名称文字
3. 使用emoji作为占位符

## 占位符代码示例

如果没有图片,可以在wxml中临时使用emoji:

```html
<view class="dish-placeholder">
  <text class="placeholder-emoji">🍲</text>
  <text class="placeholder-text">暂无图片</text>
</view>
```

```css
.dish-placeholder {
  width: 100%;
  height: 200rpx;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.placeholder-emoji {
  font-size: 80rpx;
  margin-bottom: 10rpx;
}

.placeholder-text {
  font-size: 24rpx;
  color: #999;
}
```

## 图片优化建议

### 压缩工具
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- 在线压缩: https://www.iloveimg.com/

### 批量处理工具
- Photoshop 批处理
- XnConvert
- FastStone Photo Resizer

## 注意事项

1. **版权问题**: 使用网络图片请注意版权,或使用免费商用图库
2. **命名规范**: 文件名必须与代码中的路径完全一致
3. **大小限制**: 图片过大会影响小程序加载速度
4. **格式统一**: 建议统一使用 JPG 格式
5. **备份数据**: 保留原始图片的备份

## 当前状态

如无实际图片,小程序会显示默认占位符,不影响功能使用。可以后续补充图片资源。

## 存在问题
1. 分类页中招牌热菜中的，加入购物车文字显示存在遮挡；
2. 分类页中主食类中的，加入购物车文字显示存在遮挡；


# 修复问题 20260316 

1. 推荐菜品区域的"+"按钮：
## 将 bindtap="addToCart" data-dish="{{item}}" catchtap="true" 改为 catchtap="addToCart" data-dish="{{item}}"
## 使用 catchtap 阻止事件冒泡，避免触发其他点击事件

2. 热门菜品的"加入购物车"按钮：
## 将 bindtap="addToCart" data-dish="{{item}}" catchtap="true" 改为 catchtap="addToCart" data-dish="{{item}}"
## 同样使用 catchtap 阻止事件冒泡
