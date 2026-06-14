---
name: md-image-paths
description: 修复通过 JavaScript fetch 加载的 Markdown 中相对图片路径的问题
source: auto-skill
extracted_at: '2026-06-14T00:29:57.754Z'
---

# Markdown 相对图片路径修复

## 问题

当 Markdown 文件通过 `fetch()` 异步加载（而非直接浏览器访问 `.md` 文件）时，Markdown 中的相对图片路径会被浏览器解析为相对于**当前页面 URL**，而不是相对于 **Markdown 文件所在目录**。

### 示例

页面 URL: `http://localhost:8081/courses/calculus-1m/tutorials-viewer.html?tutorial=3`
Markdown fetch 路径: `tutorials/tutorial-3.md`
Markdown 中图片引用: `![函数图像](tutorial-3-q1-graph.png)`

浏览器会尝试加载:
- `http://localhost:8081/courses/calculus-1m/tutorial-3-q1-graph.png` ❌（404）

实际图片位于:
- `http://localhost:8081/courses/calculus-1m/tutorials/tutorial-3-q1-graph.png` ✅

## 解决方案

在将 Markdown 文本传递给 `marked.parse()` 之前，重写图片的相对路径，加上 Markdown 文件所在目录的前缀。

```javascript
// 在 viewerLoadContent 中，fetch 成功后、marked.parse 之前：

// 获取 Markdown 文件所在目录（从 filePattern 推导）
const mdDir = config.filePattern.split('/').slice(0, -1).join('/');
if (mdDir) {
  markdown = markdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
    // 只处理相对路径（不以 / 或 http/https 开头）
    if (!src.startsWith('/') && !src.startsWith('http://') && !src.startsWith('https://')) {
      return `![${alt}](${mdDir}/${src})`;
    }
    return match;
  });
}

// 然后再调用 marked.parse(markdown)
```

## 注意事项

- 此修复只影响**相对图片路径**，不影响以 `/` 开头的绝对路径或完整 URL
- 如果 Markdown 文件中使用了 `../` 向上导航，此简单方案可能不够，需要根据具体情况调整
- 修复应在 `marked.parse()` **之前**执行，因为 marked 会将 `![alt](src)` 转换为 `<img src="src">`
