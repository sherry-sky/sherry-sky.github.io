#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PDF to Markdown Converter - 通用工具
将 PDF 文件转换为 MD 格式，支持公式、图片、表格处理

功能：
1. 文本提取和格式化
2. 公式识别和 LaTeX 转换
3. 图片提取和保存
4. 表格提取和 Markdown 转换
5. 页眉页脚清理
6. 特殊字符处理

依赖安装：
    pip install PyMuPDF pdfplumber pillow

使用方法：
    # 单个文件转换
    python convert_pdf_to_md.py --pdf "path/to/file.pdf" --output "./output" --title "Document Title"
    
    # 批量转换
    python convert_pdf_to_md.py --pdf-dir "./pdfs" --output-dir "./output" --pattern "(\d+).*\.pdf"
"""

import fitz  # PyMuPDF
import pdfplumber
import os
import re
import argparse
from pathlib import Path


class PDFToMarkdownConverter:
    """PDF 到 Markdown 转换器"""
    
    def __init__(self, pdf_path, output_dir=None, images_dir=None, file_prefix=None, output_filename=None):
        """
        初始化转换器
        
        Args:
            pdf_path: PDF 文件路径
            output_dir: 输出目录（默认为 PDF 所在目录）
            images_dir: 图片保存目录（默认为 output_dir/images）
            file_prefix: 输出文件前缀（用于 images 目录命名）
            output_filename: 输出文件名（不含扩展名，用于 images 目录命名）
        """
        self.pdf_path = pdf_path
        self.pdf_name = Path(pdf_path).stem
        self.output_dir = output_dir or str(Path(pdf_path).parent)
        self.file_prefix = file_prefix
        self.output_filename = output_filename
        
        # 使用输出文件名作为 images 目录名（如果提供）
        if output_filename:
            self.images_base_name = output_filename
        elif file_prefix:
            # 从 PDF 文件名提取序号
            match = re.search(r'(\d+)', self.pdf_name)
            num = match.group(1) if match else self.pdf_name
            self.images_base_name = f"{file_prefix}{num}"
        else:
            self.images_base_name = self.pdf_name
        
        self.images_dir = images_dir or os.path.join(self.output_dir, "images", self.images_base_name)
        
        # 创建输出目录（不创建 images_dir，只在有图片时创建）
        os.makedirs(self.output_dir, exist_ok=True)
        
        # 页眉页脚模式（可根据需要自定义）
        self.header_footer_patterns = [
            r'Page \d+ of \d+',
            r'^\s*$',
        ]
        
        # 特殊字符映射（可根据 PDF 字体调整）
        self.char_map = {
            '': 'ρ', '': 'μ', '': '→', '': '⇒', '': '·',
            '': '×', '': 'π', '': 'ε', '': 'δ', '': 'α',
            '': 'β', '': 'γ', '': 'θ', '': 'λ', '': 'σ',
            '': 'φ', '': 'ω', '': 'Δ', '': 'Σ', '': 'Ω',
        }
        
    def extract_images(self, doc):
        """
        从 PDF 中提取图片
        
        Args:
            doc: PyMuPDF 文档对象
            
        Returns:
            dict: {page_num: [(image_name, image_path), ...]}
        """
        images_info = {}
        has_images = False
        
        for page_num in range(len(doc)):
            page = doc[page_num]
            images_info[page_num] = []
            
            image_list = page.get_images(full=True)
            
            for img_index, img_info in enumerate(image_list):
                try:
                    xref = img_info[0]
                    base_image = doc.extract_image(xref)
                    
                    if base_image:
                        # 只有在有图片时才创建 images 目录
                        if not has_images:
                            os.makedirs(self.images_dir, exist_ok=True)
                            has_images = True
                        
                        image_bytes = base_image["image"]
                        image_ext = base_image["ext"]
                        
                        image_name = f"page{page_num + 1}_img{img_index + 1}.{image_ext}"
                        image_path = os.path.join(self.images_dir, image_name)
                        
                        with open(image_path, "wb") as img_file:
                            img_file.write(image_bytes)
                        
                        # 相对路径（相对于 MD 文件所在目录）- 使用输出文件名作为目录名
                        rel_path = os.path.join("../images", self.images_base_name, image_name)
                        images_info[page_num].append((image_name, rel_path))
                        
                        print(f"  ✓ 提取图片：{image_name}")
                        
                except Exception as e:
                    print(f"  ⚠ 提取图片失败：{e}")
        
        return images_info
    
    def extract_tables(self, page_num):
        """从指定页面提取表格"""
        tables_md = []
        
        try:
            with pdfplumber.open(self.pdf_path) as pdf:
                if page_num < len(pdf.pages):
                    page = pdf.pages[page_num]
                    tables = page.extract_tables()
                    
                    for table_index, table in enumerate(tables):
                        if table:
                            md_table = self._convert_table_to_md(table)
                            tables_md.append(md_table)
                            print(f"  ✓ 提取表格 {table_index + 1}")
        except Exception as e:
            print(f"  ⚠ 提取表格失败：{e}")
        
        return tables_md
    
    def _convert_table_to_md(self, table):
        """将表格转换为 Markdown 格式"""
        if not table or not table[0]:
            return ""
        
        cleaned_table = []
        for row in table:
            cleaned_row = []
            for cell in row:
                if cell is None:
                    cleaned_row.append("")
                else:
                    cell_text = str(cell).strip().replace('\n', '<br>')
                    cleaned_row.append(cell_text)
            cleaned_table.append(cleaned_row)
        
        max_cols = max(len(row) for row in cleaned_table)
        for row in cleaned_table:
            while len(row) < max_cols:
                row.append("")
        
        md_lines = []
        if cleaned_table:
            header = cleaned_table[0]
            md_lines.append("| " + " | ".join(header) + " |")
            md_lines.append("| " + " | ".join(["---"] * len(header)) + " |")
            
            for row in cleaned_table[1:]:
                md_lines.append("| " + " | ".join(row) + " |")
        
        return "\n".join(md_lines)
    
    def preprocess_text(self, text):
        """预处理文本 - 修复特殊字符"""
        for old_char, new_char in self.char_map.items():
            text = text.replace(old_char, new_char)
        return text
    
    def clean_header_footer(self, lines):
        """清理页眉页脚"""
        cleaned_lines = []
        skip_next_empty = False
        
        for line in lines:
            line_stripped = line.strip()
            
            is_header_footer = False
            for pattern in self.header_footer_patterns:
                if re.match(pattern, line_stripped, re.IGNORECASE):
                    is_header_footer = True
                    break
            
            if not is_header_footer and line_stripped:
                cleaned_lines.append(line_stripped)
                skip_next_empty = False
            elif not is_header_footer and not line_stripped and not skip_next_empty:
                cleaned_lines.append('')
                skip_next_empty = True
        
        return cleaned_lines
    
    def process_formula(self, text):
        """处理和美化公式文本"""
        if not text:
            return ""
        
        # 处理化学式中的数字下标
        text = re.sub(r'([A-Za-z])(\d+)(?![\d<\(])', r'\1<sub>\2</sub>', text)
        
        # 处理科学计数法
        text = re.sub(r'10\s*\^?\s*\{?(-?\d+)\}?', r'$10^{\1}$', text)
        
        # 处理希腊字母
        greek_map = {
            'α': '$\\alpha$', 'β': '$\\beta$', 'γ': '$\\gamma$',
            'δ': '$\\delta$', 'ε': '$\\epsilon$', 'ζ': '$\\zeta$',
            'η': '$\\eta$', 'θ': '$\\theta$', 'λ': '$\\lambda$',
            'μ': '$\\mu$', 'π': '$\\pi$', 'σ': '$\\sigma$',
            'τ': '$\\tau$', 'φ': '$\\phi$', 'ω': '$\\omega$',
            'Δ': '$\\Delta$', 'Σ': '$\\Sigma$', 'Ω': '$\\Omega$',
            'ρ': '$\\rho$',
        }
        for char, latex in greek_map.items():
            text = text.replace(char, latex)
        
        # 处理化学箭头
        text = text.replace('⟶', '$\\rightarrow$')
        text = text.replace('→', '$\\rightarrow$')
        text = text.replace('⇌', '$\\rightleftharpoons$')
        
        # 处理单位
        text = re.sub(r'\b(mol|L|mL|g|kg|mmol|M|atm|K)\b', r'$\1$', text)
        
        # 处理乘号和除号
        text = text.replace('×', '$\\times$')
        text = text.replace('÷', '$\\div$')
        text = text.replace('·', '$\\cdot$')
        
        return text
    
    def format_content(self, text):
        """格式化内容 - 主处理函数"""
        text = self.preprocess_text(text)
        lines = text.split('\n')
        lines = self.clean_header_footer(lines)
        
        formatted_lines = []
        prev_empty = True
        
        for line in lines:
            if isinstance(line, str) and '\n' in line:
                formatted_lines.append('')
                formatted_lines.append(line)
                formatted_lines.append('')
                prev_empty = True
                continue
            
            if not line.strip():
                if not prev_empty:
                    formatted_lines.append('')
                    prev_empty = True
                continue
            
            prev_empty = False
            formatted_line = line
            
            if re.match(r'^Step\s*\d+:', line):
                formatted_line = f"\n**{line}**"
            
            if not formatted_line.startswith('#') and not formatted_line.startswith('>'):
                formatted_line = self.process_formula(formatted_line)
            
            formatted_lines.append(formatted_line)
        
        return '\n'.join(formatted_lines)
    
    def convert(self, title=None):
        """执行完整的 PDF 到 Markdown 转换"""
        print(f"\n开始转换：{self.pdf_path}")
        print(f"输出目录：{self.output_dir}")
        print("-" * 50)
        
        doc = fitz.open(self.pdf_path)
        print(f"总页数：{len(doc)}")
        
        print("\n提取图片...")
        images_info = self.extract_images(doc)
        
        md_content = []
        
        if title:
            md_content.append(f"# {title}")
        else:
            md_content.append(f"# {self.pdf_name}")
        md_content.append("")
        md_content.append(f"> 📄 原始文件：{Path(self.pdf_path).name}")
        md_content.append("")
        md_content.append("---")
        md_content.append("")
        
        for page_num in range(len(doc)):
            print(f"\n处理第 {page_num + 1} 页...")
            
            page = doc[page_num]
            text = page.get_text()
            formatted_text = self.format_content(text)
            
            if page_num == 0:
                md_content.append(formatted_text)
            else:
                md_content.append(f"\n<!-- 第 {page_num + 1} 页 -->\n")
                md_content.append(formatted_text)
            
            if page_num in images_info and images_info[page_num]:
                md_content.append("\n**图片:**")
                for img_name, img_path in images_info[page_num]:
                    md_content.append(f"![{img_name}]({img_path})")
                md_content.append("")
            
            tables = self.extract_tables(page_num)
            if tables:
                md_content.append("\n**表格:**")
                for table_md in tables:
                    md_content.append(table_md)
                    md_content.append("")
        
        md_content.append("\n---")
        md_content.append("")
        md_content.append("*由 PDF to Markdown Converter 生成*")
        
        doc.close()
        
        print("\n" + "=" * 50)
        print("✓ 转换完成!")
        
        return "\n".join(md_content)
    
    def save(self, content, output_path=None):
        """保存 Markdown 内容到文件"""
        if output_path is None:
            output_path = os.path.join(self.output_dir, f"{self.pdf_name}.md")
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ 已保存：{output_path}")
        return output_path


def convert_single_pdf(pdf_path, output_dir=None, title=None):
    """转换单个 PDF 文件"""
    converter = PDFToMarkdownConverter(pdf_path, output_dir)
    content = converter.convert(title)
    return converter.save(content)


def batch_convert(pdf_dir, output_dir, pattern, answer_pattern=None, img_subdir=None, file_prefix=None):
    """
    批量转换 PDF 文件
    
    Args:
        pdf_dir: PDF 文件目录
        output_dir: 输出目录
        pattern: 文件匹配正则表达式（用于提取序号）
        answer_pattern: 答案文件匹配正则（可选）
        img_subdir: 图片子目录名称（用于网页查看器路径）
        file_prefix: 输出文件前缀（默认为 None，使用 'doc' 作为默认前缀）
    """
    # 设置文件前缀（默认为 'doc'）
    if file_prefix is None:
        file_prefix = "doc"
    
    pdf_files = [f for f in os.listdir(pdf_dir) if f.endswith('.pdf')]
    
    def extract_num(filename):
        match = re.search(pattern, filename)
        return int(match.group(1)) if match else 0
    
    pdf_files.sort(key=extract_num)
    
    print(f"\n批量转换模式")
    print(f"PDF 目录：{pdf_dir}")
    print(f"输出目录：{output_dir}")
    print(f"文件数量：{len(pdf_files)}")
    print("=" * 50)
    
    os.makedirs(output_dir, exist_ok=True)
    
    for pdf_file in pdf_files:
        # 跳过答案文件（会合并到主文件）
        if answer_pattern and re.search(answer_pattern, pdf_file):
            continue
        
        match = re.search(pattern, pdf_file)
        if not match:
            print(f"⚠ 跳过不匹配的文件：{pdf_file}")
            continue
        
        num = match.group(1)
        
        # 查找对应的答案文件
        answer_file = None
        if answer_pattern:
            for f in os.listdir(pdf_dir):
                if f.startswith(f"{num}") and re.search(answer_pattern, f):
                    answer_file = os.path.join(pdf_dir, f)
                    break
        
        # 生成输出文件名（使用用户指定的前缀）
        output_filename = f"{file_prefix}{num}"
        output_path = os.path.join(output_dir, f"{output_filename}.md")
        
        # 转换主文件（传递 file_prefix 和 output_filename）
        pdf_full_path = os.path.join(pdf_dir, pdf_file)
        converter = PDFToMarkdownConverter(pdf_full_path, output_dir, file_prefix=file_prefix, output_filename=output_filename)
        content = converter.convert(f"Document {num}")
        
        # 合并答案文件（使用相同的 output_filename）
        if answer_file:
            content += "\n\n---\n\n## 💡 参考答案\n\n"
            answer_converter = PDFToMarkdownConverter(answer_file, output_dir, file_prefix=file_prefix, output_filename=output_filename)
            answer_content = answer_converter.convert()
            answer_content = re.sub(r'^# .*\n', '', answer_content)
            content += answer_content
        
        # 添加 PDF 链接
        content += "\n\n---\n\n## 📎 原始 PDF 文件\n\n"
        content += f"- **主文件**: [{pdf_file}]({pdf_file})\n"
        if answer_file:
            answer_filename = os.path.basename(answer_file)
            content += f"- **答案**: [{answer_filename}]({answer_filename})\n"
        
        # 保存文件
        converter.save(content, output_path)
        
        # 更新图片路径（如果需要）
        if img_subdir:
            with open(output_path, 'r', encoding='utf-8') as f:
                md_content = f.read()
            
            old_img_prefix = "../images/"
            new_img_prefix = f"../{img_subdir}/images/"
            md_content = md_content.replace(old_img_prefix, new_img_prefix)
            
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(md_content)
            
            print(f"✓ 已更新图片路径：{output_path}")
    
    print("\n" + "=" * 50)
    print("✓ 批量转换完成!")


def main():
    """主函数"""
    parser = argparse.ArgumentParser(
        description='PDF to Markdown Converter - 通用工具',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例用法:
  # 单个文件转换
  python convert_pdf_to_md.py --pdf "lecture.pdf" --output "./output" --title "Lecture 1"
  
  # 批量转换（简单模式）
  python convert_pdf_to_md.py --pdf-dir "./pdfs" --output-dir "./output" --pattern "(\d+).*\.pdf"
  
  # 批量转换（带答案合并）
  python convert_pdf_to_md.py --pdf-dir "./pdfs" --output-dir "./output" \
      --pattern "(\d+).*\.pdf" --answer-pattern ".*Answer.*\.pdf" --img-subdir "tutorials"
  
  # 批量转换（自定义文件前缀）
  # tutorials: 生成 tutorial-1.md, tutorial-2.md, ...
  python convert_pdf_to_md.py --pdf-dir "./Tutorials-PDF" --output-dir "./tutorials" \
      --pattern "(\d+)T.*\.pdf" --answer-pattern ".*Answer.*\.pdf" \
      --img-subdir "tutorials" --file-prefix "tutorial-"
  
  # homeworks: 生成 homework-1.md, homework-2.md, ...
  python convert_pdf_to_md.py --pdf-dir "./HW-PDF" --output-dir "./homeworks" \
      --pattern "(\d+)H.*\.pdf" --answer-pattern ".*Answer.*\.pdf" \
      --img-subdir "homeworks" --file-prefix "homework-"
  
  # exams: 生成 exam-1.md, exam-2.md, ...
  python convert_pdf_to_md.py --pdf-dir "./Exam-PDF" --output-dir "./exams" \
      --pattern "(\d+).*\.pdf" --answer-pattern ".*Answer.*\.pdf" \
      --img-subdir "exams" --file-prefix "exam-"
        """
    )
    
    # 单个文件参数
    parser.add_argument('--pdf', type=str, help='单个 PDF 文件路径')
    parser.add_argument('--output', type=str, help='输出目录')
    parser.add_argument('--title', type=str, help='文档标题')
    
    # 批量转换参数
    parser.add_argument('--pdf-dir', type=str, help='PDF 文件目录（批量模式）')
    parser.add_argument('--output-dir', type=str, help='输出目录（批量模式）')
    parser.add_argument('--pattern', type=str, help='文件匹配正则表达式（用于提取序号）')
    parser.add_argument('--answer-pattern', type=str, help='答案文件匹配正则（可选）')
    parser.add_argument('--img-subdir', type=str, help='图片子目录名称（用于网页查看器路径）')
    parser.add_argument('--file-prefix', type=str, default=None, help='输出文件前缀（默认为 doc，例如：tutorial-, homework-, exam- 等）')
    
    args = parser.parse_args()
    
    # 单个文件转换
    if args.pdf:
        convert_single_pdf(args.pdf, args.output, args.title)
        return
    
    # 批量转换
    if args.pdf_dir and args.pattern:
        batch_convert(
            pdf_dir=args.pdf_dir,
            output_dir=args.output_dir or args.pdf_dir,
            pattern=args.pattern,
            answer_pattern=args.answer_pattern,
            img_subdir=args.img_subdir,
            file_prefix=args.file_prefix
        )
        return
    
    # 显示帮助信息
    parser.print_help()


if __name__ == "__main__":
    main()