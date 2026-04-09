# 课程模板技能 (Course Template Skill)

## 功能说明

此技能用于为新课程创建标准化的目录结构和文件模板。基于分析化学课程的最佳实践，提供灵活可扩展的课程管理框架。

## 使用方法

### 方式 1：通过自然语言触发

当你对 Claude 说以下内容时，此技能会自动触发：
- "为新课程创建模板"
- "创建新的课程"
- "添加一门新课"
- "设置课程目录结构"
- "初始化课程文件夹"

### 方式 2：直接使用脚本

你也可以直接运行脚本来创建课程模板：

```bash
cd /Users/jerry/Nutstore\ Files/进行项目/sherry-sky.github.io
python .agents/skills/course-template/scripts/generate_course_template.py \
    --course-name <课程代码> \
    --course-title "<课程显示名称>" \
    --description "<课程描述（可选）>"
```

## 使用示例

### 示例 1：创建有机化学课程

```bash
python .agents/skills/course-template/scripts/generate_course_template.py \
    --course-name organic-chemistry \
    --course-title "有机化学" \
    --description "有机化学是研究有机化合物的结构、性质、反应和合成的科学"
```

### 示例 2：创建物理课程

```bash
python .agents/skills/course-template/scripts/generate_course_template.py \
    --course-name physics-1 \
    --course-title "大学物理 1"
```

## 创建的课程结构

```
courses/[course-name]/
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
├── Lectures-PDF/           # 原始讲座 PDF
└── README.md               # 课程说明文件
```

## 后续步骤

创建课程模板后，你可以：

1. **添加 PDF 文件**：将原始 PDF 文件放入对应的文件夹
   - 习题 PDF → `Tutorials-PDF/`
   - 作业 PDF → `HW-PDF/`
   - 考试 PDF → `Exam-PDF/`
   - 讲座 PDF → `Lectures-PDF/`

2. **转换为 Markdown**：使用 PDF 转换技能将 PDF 转为 Markdown

3. **编辑内容**：根据需要编辑生成的 Markdown 文件

## 参考课程

- `courses/analytical-chemistry/` - 分析化学课程
- `courses/algebra-1/` - 代数 1 课程