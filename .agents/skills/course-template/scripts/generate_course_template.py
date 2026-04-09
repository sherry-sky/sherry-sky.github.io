#!/usr/bin/env python3
"""
课程模板生成器 (Course Template Generator)

用于为新课程创建标准化的目录结构和 HTML 页面框架。

使用方法:
    python generate_course_template.py --course-name course-name --course-title "Course Title"
    
示例:
    python generate_course_template.py --course-name algebra-1 --course-title "Algebra 1"
    python generate_course_template.py --course-name organic-chemistry --course-title "有机化学"
"""

import argparse
import os
import shutil
from pathlib import Path


def create_directory_structure(base_path: Path, course_name: str):
    """创建课程目录结构"""
    
    # 定义目录结构
    directories = [
        course_name,
        f"{course_name}/tutorials",
        f"{course_name}/homeworks",
        f"{course_name}/exams",
        f"{course_name}/notes",
        f"{course_name}/tutorials/images",
        f"{course_name}/homeworks/images",
        f"{course_name}/exams/images",
        f"{course_name}/notes/images",
        f"{course_name}/Tutorials-PDF",
        f"{course_name}/HW-PDF",
        f"{course_name}/Exam-PDF",
        f"{course_name}/Lectures-PDF",
    ]
    
    print(f"📁 创建课程目录结构：courses/{course_name}/")
    for dir_path in directories:
        full_path = base_path / dir_path
        full_path.mkdir(parents=True, exist_ok=True)
        print(f"   ✓ {dir_path}/")
    
    # 创建 .gitkeep 文件以保持空目录
    for dir_path in directories:
        if dir_path.endswith('images') or dir_path.endswith('-PDF'):
            full_path = base_path / dir_path / '.gitkeep'
            full_path.touch()


def generate_index_html(course_name: str, course_title: str, course_description: str = "") -> str:
    """生成课程主页 HTML"""
    
    return f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{course_title} - 课程首页</title>
  <link rel="stylesheet" href="../../css/style.css">
</head>
<body>
  <!-- 导航栏容器 -->
  <div id="navbar-container"></div>
  <script>
    // 设置当前课程
    window.currentCourse = '{course_name}';
  </script>

  <!-- 主容器 -->
  <div class="container">
    <!-- 特色区域 -->
    <section class="hero">
      <h2>📚 {course_title}</h2>
      <p>{course_description if course_description else f"欢迎来到{course_title}课程，这里提供学习笔记、习题解答、作业和考试资料"}</p>
      <div class="hero-buttons">
        <a href="notes.html" class="hero-btn">📚 学习笔记</a>
        <a href="tutorials.html" class="hero-btn">✏️ 做习题</a>
        <a href="homework.html" class="hero-btn">📝 查作业</a>
        <a href="exams.html" class="hero-btn">🎯 查考试</a>
      </div>
    </section>

    <!-- 快速导航 -->
    <section class="quick-links">
      <a href="notes.html" class="quick-link-card">
        <div class="quick-link-icon">📚</div>
        <h3 class="quick-link-title">学习笔记</h3>
        <p class="quick-link-desc">课程笔记，重点难点详细解析</p>
      </a>
      <a href="tutorials.html" class="quick-link-card">
        <div class="quick-link-icon">📝</div>
        <h3 class="quick-link-title">习题解答</h3>
        <p class="quick-link-desc">每道习题都有详细解答，帮助你巩固知识</p>
      </a>
      <a href="homework.html" class="quick-link-card">
        <div class="quick-link-icon">📋</div>
        <h3 class="quick-link-title">课后作业</h3>
        <p class="quick-link-desc">作业题目和答案，检验学习效果</p>
      </a>
      <a href="exams.html" class="quick-link-card">
        <div class="quick-link-icon">🎯</div>
        <h3 class="quick-link-title">考试资料</h3>
        <p class="quick-link-desc">考试样题和评分标准，备考必备</p>
      </a>
    </section>

    <!-- 课程简介 -->
    <section style="margin-top: 3rem; background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <h2 style="color: var(--primary-color); margin-bottom: 1rem;">📌 关于{course_title}</h2>
      <p style="color: var(--text-secondary); line-height: 1.8;">
        {course_description if course_description else "本课程提供完整的学习资源，包括课堂笔记、习题解答、作业和考试资料。"}
      </p>
    </section>
  </div>

  <!-- 页脚容器 -->
  <div id="footer-container"></div>

  <!-- 引入组件加载脚本和主脚本 -->
  <script src="../../js/components.js"></script>
  <script src="../../js/main.js"></script>
  <script>
    // 页面加载时初始化组件
    document.addEventListener('DOMContentLoaded', function() {{
      loadComponent('navbar', 'navbar-container');
      loadComponent('footer', 'footer-container');
      setCurrentPage('index');
    }});
  </script>
</body>
</html>
'''


def generate_list_html(course_name: str, course_title: str, list_type: str) -> str:
    """生成列表页面 HTML (tutorials/homeworks/exams/notes)"""
    
    icons = {
        'tutorials': '✏️',
        'homeworks': '📝',
        'exams': '🎯',
        'notes': '📚',
        'lectures': '📖'
    }
    
    titles = {
        'tutorials': '习题解答',
        'homeworks': '课后作业',
        'exams': '考试资料',
        'notes': '学习笔记',
        'lectures': '课程讲义'
    }
    
    icon = icons.get(list_type, '📄')
    title = titles.get(list_type, list_type)
    
    return f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} - {course_title}</title>
  <link rel="stylesheet" href="../../css/style.css">
</head>
<body>
  <!-- 导航栏容器 -->
  <div id="navbar-container"></div>
  <script>
    window.currentCourse = '{course_name}';
  </script>

  <!-- 主容器 -->
  <div class="container">
    <!-- 页面标题 -->
    <section class="page-header">
      <h1>{icon} {title}</h1>
      <p class="page-subtitle">{course_title}</p>
    </section>

    <!-- 内容区域 -->
    <section class="content-section">
      <div id="content-list" class="content-list">
        <!-- 内容将通过 JavaScript 动态加载 -->
        <div class="loading">加载中...</div>
      </div>
    </section>
  </div>

  <!-- 页脚容器 -->
  <div id="footer-container"></div>

  <!-- 引入组件加载脚本和主脚本 -->
  <script src="../../js/components.js"></script>
  <script src="../../js/main.js"></script>
  <script src="../../js/content-viewer.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function() {{
      loadComponent('navbar', 'navbar-container');
      loadComponent('footer', 'footer-container');
      setCurrentPage('{list_type}');
      loadContentList('{list_type}');
    }});
  </script>
</body>
</html>
'''


def generate_viewer_html(course_name: str, course_title: str, viewer_type: str) -> str:
    """生成查看器页面 HTML"""
    
    titles = {
        'tutorials': '习题解答',
        'homeworks': '作业查看',
        'exams': '考试查看',
        'notes': '笔记查看',
        'lectures': '讲义查看'
    }
    
    title = titles.get(viewer_type, viewer_type)
    
    return f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} - {course_title}</title>
  <link rel="stylesheet" href="../../css/style.css">
</head>
<body>
  <!-- 导航栏容器 -->
  <div id="navbar-container"></div>
  <script>
    window.currentCourse = '{course_name}';
  </script>

  <!-- 主容器 -->
  <div class="container">
    <!-- 返回按钮 -->
    <div class="back-button-container">
      <a href="{viewer_type}.html" class="back-button">← 返回列表</a>
    </div>

    <!-- 内容区域 -->
    <section class="content-viewer-section">
      <div id="content-viewer" class="content-viewer">
        <!-- 内容将通过 JavaScript 动态加载 -->
        <div class="loading">加载中...</div>
      </div>
    </section>
  </div>

  <!-- 页脚容器 -->
  <div id="footer-container"></div>

  <!-- 引入组件加载脚本和主脚本 -->
  <script src="../../js/components.js"></script>
  <script src="../../js/main.js"></script>
  <script src="../../js/content-viewer.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function() {{
      loadComponent('navbar', 'navbar-container');
      loadComponent('footer', 'footer-container');
      loadContentViewer('{viewer_type}');
    }});
  </script>
</body>
</html>
'''


def generate_readme(course_name: str, course_title: str) -> str:
    """生成课程 README 文件"""
    
    return f'''# {course_title}

## 课程信息

- **课程代码**: {course_name}
- **课程名称**: {course_title}

## 目录结构

```
courses/{course_name}/
├── index.html              # 课程主页
├── tutorials.html          # 习题列表页
├── tutorials-viewer.html   # 习题查看器
├── homeworks.html          # 作业列表页
├── homeworks-viewer.html   # 作业查看器
├── exams.html              # 考试列表页
├── exams-viewer.html       # 考试查看器
├── notes.html              # 笔记列表页
├── notes-viewer.html       # 笔记查看器
├── lectures.html           # 讲义列表页
├── tutorials/              # 习题 Markdown 文件
│   └── images/             # 习题图片
├── homeworks/              # 作业 Markdown 文件
│   └── images/             # 作业图片
├── exams/                  # 考试 Markdown 文件
│   └── images/             # 考试图片
├── notes/                  # 笔记 Markdown 文件
│   └── images/             # 笔记图片
├── Tutorials-PDF/          # 原始习题 PDF
├── HW-PDF/                 # 原始作业 PDF
├── Exam-PDF/               # 原始考试 PDF
└── Lectures-PDF/           # 原始讲座 PDF
```

## 使用指南

### 添加新内容

1. **添加习题**: 在 `tutorials/` 目录下创建 Markdown 文件
2. **添加作业**: 在 `homeworks/` 目录下创建 Markdown 文件
3. **添加考试**: 在 `exams/` 目录下创建 Markdown 文件
4. **添加笔记**: 在 `notes/` 目录下创建 Markdown 文件

### PDF 转 Markdown

使用项目中的 PDF 转换工具将 PDF 文件转换为 Markdown 格式。

## 相关链接

- [课程主页](index.html)
- [学习笔记](notes.html)
- [习题解答](tutorials.html)
- [课后作业](homeworks.html)
- [考试资料](exams.html)
'''


def create_course_template(course_name: str, course_title: str, course_description: str = "", base_path: str = "courses"):
    """创建完整的课程模板"""
    
    base = Path(base_path)
    
    print(f"\n🎓 创建课程模板：{course_title}")
    print(f"   课程代码：{course_name}")
    print()
    
    # 1. 创建目录结构
    create_directory_structure(base, course_name)
    print()
    
    # 2. 生成 HTML 文件
    html_files = [
        (f"{course_name}/index.html", generate_index_html(course_name, course_title, course_description)),
        (f"{course_name}/tutorials.html", generate_list_html(course_name, course_title, 'tutorials')),
        (f"{course_name}/homeworks.html", generate_list_html(course_name, course_title, 'homeworks')),
        (f"{course_name}/exams.html", generate_list_html(course_name, course_title, 'exams')),
        (f"{course_name}/notes.html", generate_list_html(course_name, course_title, 'notes')),
        (f"{course_name}/lectures.html", generate_list_html(course_name, course_title, 'lectures')),
        (f"{course_name}/tutorials-viewer.html", generate_viewer_html(course_name, course_title, 'tutorials')),
        (f"{course_name}/homeworks-viewer.html", generate_viewer_html(course_name, course_title, 'homeworks')),
        (f"{course_name}/exams-viewer.html", generate_viewer_html(course_name, course_title, 'exams')),
        (f"{course_name}/notes-viewer.html", generate_viewer_html(course_name, course_title, 'notes')),
    ]
    
    print("📄 生成 HTML 文件:")
    for file_path, content in html_files:
        full_path = base / file_path
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"   ✓ {file_path}")
    print()
    
    # 3. 生成 README
    readme_path = base / course_name / "README.md"
    with open(readme_path, 'w', encoding='utf-8') as f:
        f.write(generate_readme(course_name, course_title))
    print(f"📄 生成 README: {course_name}/README.md")
    print()
    
    print("✅ 课程模板创建完成!")
    print()
    print("下一步:")
    print("1. 将 PDF 文件放入对应的 PDF 文件夹")
    print("2. 使用 PDF 转换工具将 PDF 转为 Markdown")
    print("3. 编辑 Markdown 文件添加内容")


def main():
    parser = argparse.ArgumentParser(description='课程模板生成器')
    parser.add_argument('--course-name', required=True, help='课程代码（用于目录命名，如 algebra-1）')
    parser.add_argument('--course-title', required=True, help='课程显示名称（如 "Algebra 1"）')
    parser.add_argument('--description', default='', help='课程描述（可选）')
    parser.add_argument('--base-path', default='courses', help='基础路径（默认：courses）')
    
    args = parser.parse_args()
    
    create_course_template(
        course_name=args.course_name,
        course_title=args.course_title,
        course_description=args.description,
        base_path=args.base_path
    )


if __name__ == '__main__':
    main()