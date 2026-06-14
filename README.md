# 🎓 学习博客 — 课程门户

> 一个基于 GitHub Pages 的静态学习博客，记录和分享大学课程的学习资源与笔记。

## 📖 课程列表

| 课程 | 方向 | 状态 | 内容 |
|------|------|------|------|
| 🧪 分析化学 1 | 化学 | ✅ 已完善 | 13 章笔记 · 11 次习题 · 11 次作业 · 2 份考试 |
| ∫ 微积分 1M | 数学 | ⏳ 待完善 | 框架已搭建，内容待添加 |
| Σ 代数 1 | 数学 | ⏳ 待完善 | 框架已搭建，内容待添加 |
| 🧬 化学生物 | 交叉学科 | ⏳ 待完善 | 框架已搭建，内容待添加 |

## 🛠️ 技术栈

- **前端：** 纯 HTML + CSS + JavaScript（无框架、无构建工具）
- **内容渲染：** [marked.js](https://github.com/markedjs/marked)（Markdown → HTML）
- **数学公式：** [MathJax](https://www.mathjax.org/)（LaTeX 渲染）
- **部署：** GitHub Pages 静态托管

## 📁 项目结构

```
├── index.html                  # 首页 — 课程门户
├── components/                 # 可复用 HTML 组件
│   ├── navbar.html             #   导航栏
│   ├── footer.html             #   页脚
│   ├── content-viewer.html     #   通用内容查看器
│   └── search.html             #   搜索框
├── css/
│   └── style.css               # 全局样式（蓝色主题）
├── js/
│   ├── components.js           # 组件动态加载器
│   ├── content-viewer.js       # Markdown 内容查看器引擎
│   └── main.js                 # 主交互脚本
├── courses/                    # 课程目录
│   ├── analytical-chemistry/   #   分析化学 1 ✅
│   ├── calculus-1m/            #   微积分 1M ⏳
│   ├── algebra-1/              #   代数 1 ⏳
│   └── chem-biology/           #   化学生物 ⏳
├── .agents/skills/             # Agent Skills（18 个技能）
├── QWEN.md                     # AI 协作规范
└── AGENTS.md                   # Agent 集群配置
```

## 🚀 本地预览

```bash
# 在项目根目录启动本地服务器
python3 -m http.server 8000

# 访问 http://localhost:8000
```

## 📂 课程目录规范

每门课程遵循统一的目录结构：

```
courses/<course-id>/
├── index.html              # 课程首页
├── lectures.html           # 课件列表
├── notes.html              # 笔记列表
├── tutorials.html          # 习题列表
├── homework.html           # 作业列表
├── exams.html              # 考试列表
├── notes/                  # Markdown 笔记
│   └── images/             #   笔记图片
├── tutorials/              # Markdown 习题
│   └── images/             #   习题图片
├── homeworks/              # Markdown 作业
├── exams/                  # Markdown 考试
├── Lectures-PDF/           # 课件 PDF
├── Tutorials-PDF/          # 习题 PDF
├── HW-PDF/                 # 作业 PDF
└── Exam-PDF/               # 考试 PDF
```

## 🤖 Agent 集群

本项目采用多 Agent 协作模式，详见 [AGENTS.md](AGENTS.md)：

| Agent | 角色 | 职责 |
|-------|------|------|
| 📝 Content Architect | 内容架构师 | Markdown 内容创建与整理 |
| 🖥️ Frontend Engineer | 前端工程师 | HTML/JS 页面与交互 |
| 🎨 Style Designer | 样式设计师 | CSS 样式与视觉设计 |
| 🏗️ Course Builder | 课程建造师 | 目录结构与模板管理 |
| 🔍 Quality Inspector | 质量检查员 | 格式校验与质量审核 |
| 🚀 Deploy Manager | 部署管理员 | Git 操作与部署 |

## 📝 提交规范

```
类型: 描述
```

| 类型 | 说明 |
|------|------|
| `新增` | 添加新内容或新功能 |
| `更新` | 修改已有内容 |
| `修复` | 修复 Bug |
| `优化` | 性能或体验优化 |
| `重构` | 代码结构调整 |

## 📄 许可

本项目仅供个人学习使用。
