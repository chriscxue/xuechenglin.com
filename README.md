# 艺术家作品集网站

一个简洁、现代的艺术家作品集网站，灵感来自 [visuelle.co.uk](https://visuelle.co.uk/)。

## 特点

- 🎨 黑色主题设计，突出作品展示
- 📱 完全响应式设计，支持所有设备
- 🔍 实时搜索功能
- 🏷️ 分类筛选功能
- ✨ 平滑的动画效果
- 🚀 纯静态网站，易于部署

## 技术栈

- HTML5
- CSS3 (Flexbox + Grid)
- Vanilla JavaScript (无框架依赖)

## 快速开始

### 本地运行

1. 克隆项目
   
   ```bash
   git clone https://github.com/yourusername/artist-portfolio.git
   cd artist-portfolio
   ```

2. 直接打开 `index.html` 文件，或者使用本地服务器：
   
   ```bash
   # 使用 Python
   python -m http.server 8000
   ```

# 使用 Node.js (需要安装 http-server)

npx http-server

# 使用 PHP

php -S localhost:8000

```
3. 在浏览器中访问 `http://localhost:8000`

### 部署到 GitHub Pages

1. 在 GitHub 上创建新仓库

2. 推送代码到仓库
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/artist-portfolio.git
git push -u origin main
```

3. 在仓库设置中启用 GitHub Pages
   
   - 进入仓库 Settings
   - 找到 Pages 选项
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main" 和 "/ (root)"
   - 点击 Save

4. 等待几分钟，你的网站将在 `https://yourusername.github.io/artist-portfolio/` 上线

## 自定义

### 修改作品数据

编辑 `js/main.js` 文件中的 `artworks` 数组：

```javascript
const artworks = [
    {
        id: 1,
        title: "作品标题",
        category: "digital", // digital, graphic, illustration, motion, photography, typography
        image: "图片URL",
        description: "作品描述"
    },
    // 添加更多作品...
];
```

### 修改颜色主题

编辑 `css/style.css` 文件中的颜色变量：

```css
/* 主要颜色 */
:root {
    --primary-color: #4d46f5;  /* 紫色强调色 */
    --text-color: #fff;        /* 白色文字 */
    --text-secondary: #878b89; /* 灰色次要文字 */
    --background-color: #000;  /* 黑色背景 */
}
```

### 修改分类

1. 在 `index.html` 中修改筛选菜单
2. 在 `js/main.js` 中更新 `categoryMap` 对象
3. 在 `artworks` 数组中使用新的分类值

## 添加真实作品图片

1. 将图片放入 `images` 目录
2. 更新 `artworks` 数组中的图片路径：
   
   ```javascript
   {
    id: 1,
    title: "作品标题",
    category: "digital",
    image: "images/your-image.jpg", // 使用本地图片
    description: "作品描述"
   }
   ```

## 键盘快捷键

- `Ctrl/Cmd + K`: 打开搜索
- `Esc`: 关闭搜索/关于页面

## 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 许可证

MIT License

## 致谢

- 设计灵感来自 [visuelle.co.uk](https://visuelle.co.uk/)
- 使用 [Inter](https://fonts.google.com/specimen/Inter) 字体
- 示例图片来自 [Picsum Photos](https://picsum.photos/)