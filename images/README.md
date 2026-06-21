# 图片使用指南

## 文件夹结构

```
images/
├── works/
│   ├── perhaps-everything/    # PERHAPS EVERYTHING IS JUST GONE
│   ├── interview/             # INTERVIEW
│   ├── vibration/             # Vibration
│   ├── random-notes/          # RANDOM NOTES
│   ├── soliloquize/           # Soliloquize
│   ├── 3733-61st-woodside/    # 3733 61ST WOODSIDE
│   └── alfred-hill/           # ALFRED HILL
└── about/                     # 关于页面图片
```

## 图片命名规范

每个作品文件夹内：
- `cover.jpg` - 封面图（显示在详情页左侧大图）
- `1.jpg` - 细节图1
- `2.jpg` - 细节图2
- `3.jpg` - 细节图3
- `4.jpg` - 细节图4

## 图片尺寸建议

- **封面图**：1600×1108px 或 16:11比例
- **细节图**：800×640px 或 5:4比例
- **格式**：JPG（照片）或 PNG（需要透明背景时）

## HTML引用方式

### 当前使用（占位图片）
```html
<img src="https://picsum.photos/1600/1108?random=100" alt="作品名">
```

### 使用本地图片
```html
<!-- 封面图 -->
<img src="images/works/perhaps-everything/cover.jpg" alt="PERHAPS EVERYTHING IS JUST GONE">

<!-- 细节图 -->
<img src="images/works/perhaps-everything/1.jpg" alt="Work image 1">
<img src="images/works/perhaps-everything/2.jpg" alt="Work image 2">
```

## 更新步骤

1. 将图片放入对应文件夹
2. 按命名规范重命名图片
3. 修改HTML文件中的图片路径
4. 测试显示效果

## 图片优化建议

- 使用 TinyPNG 或 Squoosh 压缩图片
- 保持文件大小在 200KB 以内（细节图）
- 封面图可适当放宽到 500KB
- 使用 WebP 格式可进一步减小文件大小

## 注意事项

- 文件名区分大小写
- 建议使用小写英文和连字符
- 避免使用中文或特殊字符
- 图片路径相对于HTML文件