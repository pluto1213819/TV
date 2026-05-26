# VedalTV

一个简洁美观的在线影视前端页面，提供电影、连续剧、动漫、综艺、纪录片的分类浏览与搜索体验。

## 功能特性

- **首页轮播** — 自动轮播推荐影片，支持触摸滑动和鼠标悬停暂停
- **分类浏览** — 电影、连续剧、动漫、综艺、纪录片独立分类页面
- **筛选排序** — 按类型、地区、年份等条件筛选，支持多种排序方式
- **留言求片** — 用户可提交想看的影片请求
- **响应式布局** — 适配桌面端与移动端，侧边栏自动折叠
- **分页导航** — 内容列表支持分页浏览

## 技术栈

| 技术 | 用途 |
|------|------|
| [Tailwind CSS v4 (Browser)](https://tailwindcss.com/) | 原子化 CSS 框架，运行时生成 |
| [Font Awesome 6](https://fontawesome.com/) | 图标库 |
| 原生 JavaScript | 轮播图、筛选器、分页交互 |

## 目录结构

```
TV/
├── index.html          # 首页（轮播图 + 推荐内容）
├── movie.html          # 电影分类页
├── tv.html             # 连续剧分类页
├── anime.html          # 动漫分类页
├── variety.html        # 综艺分类页
├── short.html          # 纪录片分类页
├── request.html        # 留言求片页
├── css/
│   ├── main.css        # 全局自定义样式（轮播、侧边栏、布局）
│   ├── styles.css      # 分类页公共样式（筛选器、卡片、分页）
│   └── request.css     # 留言页专用样式（表单、留言卡片）
├── js/
│   ├── main.js         # 轮播图逻辑
│   └── choose.js       # 筛选器与分页交互
└── image/              # 图片资源（未纳入版本管理）
```

## 预览方式

本项目为纯静态前端，无需构建步骤：

1. 克隆仓库
   ```bash
   git clone https://github.com/pluto1213819/TV.git
   ```

2. 直接用浏览器打开 `index.html`
   ```bash
   # 或使用本地服务器
   npx serve .
   python -m http.server 8080
   ```

3. 需要将图片资源放入 `image/` 目录才能正常显示封面

## About 部分建议

> **VedalTV** — 免费在线影视聚合平台前端
>
> 提供电影、连续剧、动漫、综艺、纪录片的分类浏览、筛选搜索与留言求片功能。纯静态实现，Tailwind CSS + 原生 JS，零依赖开箱即用。
