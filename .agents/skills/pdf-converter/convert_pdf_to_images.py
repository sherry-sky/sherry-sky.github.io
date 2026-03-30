#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PDF 转图片工具
使用 PyMuPDF 将 PDF 文件转换为 PNG 图片
"""

import fitz  # PyMuPDF
import os
import argparse
from pathlib import Path


def pdf_to_images(pdf_path, output_dir, dpi=200, prefix="page"):
    """
    将 PDF 文件转换为 PNG 图片
    
    参数:
        pdf_path: PDF 文件路径
        output_dir: 输出目录
        dpi: 图片分辨率（默认 200）
        prefix: 图片文件名前缀
    """
    # 创建输出目录
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    
    # 打开 PDF
    print(f"正在打开 PDF: {pdf_path}")
    doc = fitz.open(pdf_path)
    
    # 计算缩放比例
    zoom = dpi / 72
    mat = fitz.Matrix(zoom, zoom)
    
    print(f"PDF 共 {len(doc)} 页，正在转换为图片...")
    
    # 逐页转换
    for page_num in range(len(doc)):
        page = doc[page_num]
        
        # 渲染页面为图片
        pix = page.get_pixmap(matrix=mat)
        
        # 保存图片（页码从 1 开始，使用 3 位数字编号）
        image_filename = f"{prefix}_{page_num + 1:03d}.png"
        image_path = output_path / image_filename
        
        pix.save(str(image_path))
        print(f"  已保存：{image_filename}")
    
    total_pages = len(doc)
    doc.close()
    print(f"\n转换完成！共生成 {total_pages} 张图片，保存在：{output_dir}")
    
    return total_pages


def main():
    parser = argparse.ArgumentParser(description="PDF 转图片工具")
    parser.add_argument("pdf_path", help="PDF 文件路径")
    parser.add_argument("-o", "--output", help="输出目录（默认：pages）", default="pages")
    parser.add_argument("--dpi", type=int, help="图片分辨率（默认：200）", default=200)
    parser.add_argument("--prefix", help="图片文件名前缀", default="page")
    
    args = parser.parse_args()
    
    pdf_to_images(args.pdf_path, args.output, args.dpi, args.prefix)


if __name__ == "__main__":
    main()