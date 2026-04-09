/**
 * 通用内容查看器脚本
 * 用于 tutorials、homework、exams 等需要侧边导航和 Markdown 内容展示的场景
 * 
 * 使用方式：
 * 1. 在页面中设置 window.viewerConfig 配置对象
 * 2. 引入此脚本
 * 3. 调用 viewerInit() 初始化
 */

// 全局配置和数据
window.viewerConfig = window.viewerConfig || {};
let viewerParsedQuestions = [];
let viewerParsedAnswers = {};
let viewerParsedBackgroundKnowledge = '';
let viewerParsedPdfLinks = '';

/**
 * 初始化查看器
 * @param {Object} config - 配置对象
 */
function viewerInit(config) {
  window.viewerConfig = {
    // 查看器类型：tutorials, homework, exams
    type: config.type,
    // 导航项列表 [{ id, title, href }]
    navItems: config.navItems || [],
    // 文件路径模式，支持 {id} 占位符
    filePattern: config.filePattern,
    // 默认 ID
    defaultId: config.defaultId,
    // 返回列表页面
    listPage: config.listPage || '',
    // 标题前缀
    titlePrefix: config.titlePrefix || '',
    // URL 参数名
    urlParam: config.urlParam || 'id',
    // 课程名（用于构建路径）
    course: config.course || '',
    // 内容类型特定的类名前缀
    sectionClass: config.sectionClass || 'viewer',
    // 加载提示文字
    loadingText: config.loadingText || '正在加载内容...',
    // 错误提示文字
    errorText: config.errorText || '无法加载内容',
    // 上一个按钮文字
    prevText: config.prevText || '← 上一个',
    // 下一个按钮文字
    nextText: config.nextText || '下一个 →',
    // 返回列表按钮文字
    listText: config.listText || '📋 返回列表',
    // 导航标题
    navTitle: config.navTitle || '📚 内容导航',
    // 回调函数
    onLoad: config.onLoad,
    onRender: config.onRender
  };
  
  // 初始化
  viewerSetup();
}

/**
 * 设置查看器
 */
function viewerSetup() {
  const config = window.viewerConfig;
  
  // 等待 DOM 元素加载完成
  const maxRetries = 50;
  let retries = 0;
  
  function waitForElements() {
    const viewerContainer = document.getElementById('viewer-container');
    const viewerNavList = document.getElementById('viewerNavList');
    
    // 如果组件还没加载，等待重试
    if (!viewerContainer || viewerContainer.children.length === 0) {
      retries++;
      if (retries < maxRetries) {
        setTimeout(waitForElements, 50);
        return;
      }
      console.error('Viewer: 等待组件加载超时');
      return;
    }
    
    // 组件已加载，继续初始化
    viewerSetupElements();
  }
  
  function viewerSetupElements() {
    // 设置导航标题
    const navTitle = document.getElementById('viewer-nav-title');
    if (navTitle) {
      navTitle.textContent = config.navTitle;
    }
    
    // 设置加载提示
    const loading = document.getElementById('viewer-loading');
    if (loading) {
      const p = loading.querySelector('p');
      if (p) p.textContent = config.loadingText;
    }
    
    // 设置错误提示
    const errorMsg = document.getElementById('viewer-error-msg');
    if (errorMsg) {
      const ps = errorMsg.querySelectorAll('p');
      if (ps.length > 1) {
        ps[1].textContent = config.errorText;
      }
    }
    
    // 设置返回列表按钮
    const listBtn = document.getElementById('viewer-list-btn');
    if (listBtn && config.listPage) {
      listBtn.href = config.listPage;
      listBtn.textContent = config.listText;
    }
    
    // 设置上一个/下一个按钮文字
    const prevBtn = document.getElementById('viewer-prev-btn');
    const nextBtn = document.getElementById('viewer-next-btn');
    if (prevBtn) prevBtn.textContent = config.prevText;
    if (nextBtn) nextBtn.textContent = config.nextText;
    
    // 生成导航列表
    viewerGenerateNavList();
    
    // 获取当前 ID 并加载内容
    const currentId = viewerGetCurrentId();
    viewerLoadContent(currentId);
  }
  
  // 开始等待
  waitForElements();
}

/**
 * 获取当前 ID（从 URL 参数）
 */
function viewerGetCurrentId() {
  const config = window.viewerConfig;
  const params = new URLSearchParams(window.location.search);
  const id = params.get(config.urlParam);
  
  if (id === null || id === '') {
    return config.defaultId;
  }
  
  return id;
}

/**
 * 生成导航列表
 */
function viewerGenerateNavList() {
  const config = window.viewerConfig;
  const navList = document.getElementById('viewerNavList');
  
  if (!navList) return;
  
  navList.innerHTML = config.navItems.map(item => {
    const href = `?${config.urlParam}=${item.id}`;
    const active = viewerGetCurrentId() === item.id ? 'active' : '';
    return `<li><a href="${href}" data-id="${item.id}" class="${active}">${item.title}</a></li>`;
  }).join('');
}

/**
 * 加载内容
 * @param {string} id - 内容 ID
 */
async function viewerLoadContent(id) {
  const config = window.viewerConfig;
  const loading = document.getElementById('viewer-loading');
  const content = document.getElementById('viewer-markdown-content');
  const errorMsg = document.getElementById('viewer-error-msg');
  const navButtons = document.getElementById('viewer-nav-buttons');
  
  // 构建文件路径
  const filePath = config.filePattern.replace('{id}', id);
  
  console.log('Viewer: 正在加载:', filePath);
  
  try {
    const response = await fetch(filePath, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/markdown'
      },
      cache: 'no-cache'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP 错误：${response.status} ${response.statusText}`);
    }
    
    const markdown = await response.text();
    console.log('Viewer: Markdown 加载成功，长度:', markdown.length);
    
    // 解析 Markdown 中的标记
    viewerParseMarkdown(markdown);
    
    // 保护 LaTeX 公式
    const { markdown: protectedMarkdown, formulas } = protectLatexFormulas(markdown);
    
    // 使用 marked.js 渲染 Markdown
    marked.use({
      mangle: false
    });
    
    const html = marked.parse(protectedMarkdown);
    
    // 恢复 LaTeX 公式
    const restoredHtml = restoreLatexFormulas(html, formulas);
    content.innerHTML = restoredHtml;
    
    console.log('Viewer: Markdown 渲染完成，开始处理可折叠...');
    
    // 处理可折叠答案
    viewerProcessCollapsible(content);
    
    // 生成目录
    viewerGenerateTOC(content);
    
    // 更新导航按钮
    viewerUpdateNavButtons(id);
    
    // 更新页面标题
    viewerUpdateTitle(id);
    
    // 高亮当前导航项
    viewerHighlightNavItem(id);
    
    // 显示内容
    loading.style.display = 'none';
    content.style.display = 'block';
    navButtons.style.display = 'flex';
    errorMsg.style.display = 'none';
    
    // MathJax 渲染公式
    setTimeout(() => {
      if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
        MathJax.typesetPromise([content]).then(() => {
          console.log('Viewer: MathJax 渲染完成');
        }).catch((err) => console.log('Viewer: MathJax 渲染错误:', err));
      }
    }, 100);
    
    // 调用 onLoad 回调
    if (config.onLoad) {
      config.onLoad(id, content);
    }
    
  } catch (error) {
    console.error('Viewer: 加载 Markdown 失败:', error);
    errorMsg.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: 1rem;">😕</div>
      <p style="color: var(--text-secondary);">${config.errorText}</p>
      <p style="font-size: 0.9rem; margin-top: 0.5rem;">错误信息：${error.message}</p>
      <p style="font-size: 0.8rem; margin-top: 0.5rem; color: #999;">文件路径：${filePath}</p>
      <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; cursor: pointer;">🔄 重试</button>
    `;
    loading.style.display = 'none';
    content.style.display = 'none';
    navButtons.style.display = 'none';
    errorMsg.style.display = 'block';
  }
}

/**
 * 在 marked 解析前保护 LaTeX 公式
 * @param {string} markdown - Markdown 文本
 * @returns {Object} 包含处理后的 markdown 和占位符映射
 */
function protectLatexFormulas(markdown) {
  const formulas = [];
  let index = 0;
  
  // 保护行内公式 $...$
  markdown = markdown.replace(/\$([^$\n]+?)\$/g, (match) => {
    const placeholder = `LATEX_INLINE_${index++}`;
    formulas.push({ placeholder, content: match });
    return placeholder;
  });
  
  // 保护块级公式 $$...$$
  markdown = markdown.replace(/\$\$([\s\S]*?)\$\$/g, (match) => {
    const placeholder = `LATEX_BLOCK_${index++}`;
    formulas.push({ placeholder, content: match });
    return placeholder;
  });
  
  return { markdown, formulas };
}

/**
 * 在 marked 解析后恢复 LaTeX 公式
 * @param {string} html - HTML 内容
 * @param {Array} formulas - 公式占位符映射
 * @returns {string} 恢复后的 HTML
 */
function restoreLatexFormulas(html, formulas) {
  let result = html;
  formulas.forEach(({ placeholder, content }) => {
    result = result.replace(new RegExp(placeholder, 'g'), content);
  });
  return result;
}

/**
 * 解析 Markdown 中的标记
 * @param {string} markdown - Markdown 文本
 */
function viewerParseMarkdown(markdown) {
  console.log('Viewer: 开始解析 Markdown 中的标记...');
  
  // 解析背景知识部分
  const backgroundPattern = /<!--\s*BACKGROUND_START\s*-->([\s\S]*?)<!--\s*BACKGROUND_END\s*-->/;
  const backgroundMatch = markdown.match(backgroundPattern);
  viewerParsedBackgroundKnowledge = backgroundMatch ? backgroundMatch[1].trim() : '';
  console.log('Viewer: 解析背景知识:', viewerParsedBackgroundKnowledge ? '找到' : '未找到');
  
  // 解析题目部分
  const questionPattern = /<!--\s*QUESTION_START\s+id="([^"]+)"\s*-->([\s\S]*?)<!--\s*QUESTION_END\s*-->/g;
  viewerParsedQuestions = [];
  let match;
  
  while ((match = questionPattern.exec(markdown)) !== null) {
    viewerParsedQuestions.push({
      id: match[1],
      content: match[2].trim()
    });
  }
  
  console.log(`Viewer: 解析到 ${viewerParsedQuestions.length} 道题目`);
  
  // 解析答案部分
  const answerPattern = /<!--\s*ANSWER_START\s+for="([^"]+)"\s*-->([\s\S]*?)<!--\s*ANSWER_END\s*-->/g;
  viewerParsedAnswers = {};
  let answerMatch;
  
  while ((answerMatch = answerPattern.exec(markdown)) !== null) {
    viewerParsedAnswers[answerMatch[1]] = answerMatch[2].trim();
  }
  
  console.log(`Viewer: 解析到 ${Object.keys(viewerParsedAnswers).length} 个答案`);
  
  // 解析 PDF 链接部分
  const pdfLinksPattern = /<!--\s*PDF_LINKS_START\s*-->([\s\S]*?)<!--\s*PDF_LINKS_END\s*-->/;
  const pdfLinksMatch = markdown.match(pdfLinksPattern);
  viewerParsedPdfLinks = pdfLinksMatch ? pdfLinksMatch[1].trim() : '';
  console.log('Viewer: 解析 PDF 链接:', viewerParsedPdfLinks ? '找到' : '未找到');
}

/**
 * 处理可折叠答案
 * @param {HTMLElement} contentElement - 内容元素
 */
function viewerProcessCollapsible(contentElement) {
  console.log('Viewer: 开始处理可折叠答案...');
  
  const hasCommentMarkers = contentElement.innerHTML.includes('QUESTION_START') || 
                            contentElement.innerHTML.includes('ANSWER_START');
  
  if (hasCommentMarkers) {
    console.log('Viewer: 检测到 HTML 注释标记，使用新方法处理');
    viewerProcessWithCommentMarkers(contentElement);
    return;
  }
  
  console.log('Viewer: 未检测到 HTML 注释标记');
}

/**
 * 使用 HTML 注释标记处理可折叠答案
 * @param {HTMLElement} contentElement - 内容元素
 */
function viewerProcessWithCommentMarkers(contentElement) {
  const questions = viewerParsedQuestions;
  const answers = viewerParsedAnswers;
  
  if (questions.length === 0) {
    console.log('Viewer: 没有找到题目数据');
    return;
  }
  
  console.log(`Viewer: 使用已解析的 ${questions.length} 道题目`);
  
  // 获取所有 h2 标题
  const allH2 = Array.from(contentElement.querySelectorAll('h2'));
  
  // 找到"题目部分"和"参考答案"的 h2
  const questionH2 = allH2.find(h2 => h2.textContent.includes('题目') || h2.textContent.includes('选择题') || h2.textContent.includes('问答'));
  const answerH2 = allH2.find(h2 => h2.textContent.includes('答案') || h2.textContent.includes('参考'));
  
  // 渲染背景知识 - 使用保护/恢复机制保留 LaTeX 公式
  let backgroundKnowledgeHtml = '';
  if (viewerParsedBackgroundKnowledge && viewerParsedBackgroundKnowledge.trim()) {
    const { markdown: protectedBg, formulas: bgFormulas } = protectLatexFormulas(viewerParsedBackgroundKnowledge);
    const renderedBackground = restoreLatexFormulas(marked.parse(protectedBg), bgFormulas);
    backgroundKnowledgeHtml = `<div class="viewer-background-knowledge-card"><h3><span style="font-size: 1.3rem;">📖</span> 背景知识</h3>${renderedBackground}</div>`;
  }
  
  // 渲染 PDF 链接 - 使用保护/恢复机制保留 LaTeX 公式
  let pdfLinksHtml = '';
  if (viewerParsedPdfLinks && viewerParsedPdfLinks.trim()) {
    const { markdown: protectedPdf, formulas: pdfFormulas } = protectLatexFormulas(viewerParsedPdfLinks);
    const renderedPdfLinks = restoreLatexFormulas(marked.parse(protectedPdf), pdfFormulas);
    pdfLinksHtml = `<div class="viewer-pdf-links">${renderedPdfLinks}</div>`;
  }
  
  // 创建每道题独立卡片的 HTML - 使用保护/恢复机制保留 LaTeX 公式
  const cardsHtml = questions.map((q) => {
    const { markdown: protectedQ, formulas: qFormulas } = protectLatexFormulas(q.content);
    const renderedQuestion = restoreLatexFormulas(marked.parse(protectedQ), qFormulas);
    const answer = answers[q.id] || '';
    const { markdown: protectedA, formulas: aFormulas } = protectLatexFormulas(answer);
    const renderedAnswer = restoreLatexFormulas(marked.parse(protectedA), aFormulas);
    
    return `
      <div class="viewer-collapsible-wrapper" data-question-id="${q.id}">
        <div class="viewer-question-block">
          ${renderedQuestion}
          <button class="viewer-toggle-answer-btn" data-question-id="${q.id}">
            <span class="icon">▶</span> 查看答案
          </button>
        </div>
        <div class="viewer-answer-content" id="answer-${q.id}">
          ${renderedAnswer}
        </div>
      </div>
    `;
  }).join('');
  
  // 直接设置整个内容区域
  const mainContent = `
    <div style="margin-bottom: 1.5rem;">
      ${questionH2 ? questionH2.outerHTML : ''}
    </div>
    ${backgroundKnowledgeHtml}
    ${cardsHtml}
    <div style="margin-top: 2rem;">
      ${answerH2 ? answerH2.outerHTML : ''}
    </div>
    ${pdfLinksHtml}
  `;
  
  contentElement.innerHTML = mainContent;
  
  console.log('Viewer: HTML 注释标记处理完成');
  
  // 立即调用 MathJax 渲染整个内容区域（包括隐藏的答案）
  // 这样当用户展开答案时，公式已经渲染好了
  setTimeout(() => {
    if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
      MathJax.typesetPromise([contentElement])
        .then(() => console.log('Viewer: MathJax 初始渲染完成'))
        .catch((err) => console.log('Viewer: MathJax 初始渲染错误:', err));
    }
  }, 100);
}

/**
 * 切换答案显示/隐藏
 * @param {string} questionId - 题目 ID
 */
window.viewerToggleAnswer = function(questionId) {
  console.log('Viewer: toggleAnswer called with:', questionId);
  const answerContent = document.getElementById(`answer-${questionId}`);
  const wrapper = answerContent?.closest('.viewer-collapsible-wrapper');
  const button = wrapper?.querySelector('.viewer-toggle-answer-btn');
  
  if (!answerContent || !button) {
    console.log('Viewer: 未找到答案内容或按钮');
    return;
  }
  
  console.log('Viewer: 当前状态:', answerContent.classList.contains('show') ? '已展开' : '已收起');
  
  if (answerContent.classList.contains('show')) {
    answerContent.classList.remove('show');
    button.classList.remove('show');
    button.innerHTML = '<span class="icon">▶</span> 查看答案';
  } else {
    answerContent.classList.add('show');
    button.classList.add('show');
    button.innerHTML = '<span class="icon">▼</span> 隐藏答案';
    
    // 重新渲染 MathJax 公式
    // 等待 DOM 更新和动画完成后再渲染
    if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
      setTimeout(() => {
        MathJax.typesetPromise([answerContent])
          .then(() => console.log('Viewer: MathJax 答案渲染完成'))
          .catch((err) => console.log('Viewer: MathJax 答案渲染错误:', err));
      }, 50);
    }
  }
};

/**
 * 更新导航按钮
 * @param {string} id - 当前 ID
 */
function viewerUpdateNavButtons(id) {
  const config = window.viewerConfig;
  const prevBtn = document.getElementById('viewer-prev-btn');
  const nextBtn = document.getElementById('viewer-next-btn');
  
  if (!prevBtn || !nextBtn) return;
  
  const navItems = config.navItems;
  const currentIndex = navItems.findIndex(item => item.id === id);
  
  if (currentIndex === -1) return;
  
  // 上一个按钮
  if (currentIndex > 0) {
    const prevId = navItems[currentIndex - 1].id;
    prevBtn.href = `?${config.urlParam}=${prevId}`;
    prevBtn.style.display = 'inline-flex';
  } else {
    prevBtn.style.display = 'none';
  }
  
  // 下一个按钮
  if (currentIndex < navItems.length - 1) {
    const nextId = navItems[currentIndex + 1].id;
    nextBtn.href = `?${config.urlParam}=${nextId}`;
    nextBtn.style.display = 'inline-flex';
  } else {
    nextBtn.style.display = 'none';
  }
}

/**
 * 更新页面标题
 * @param {string} id - 当前 ID
 */
function viewerUpdateTitle(id) {
  const config = window.viewerConfig;
  const currentItem = config.navItems.find(item => item.id === id);
  
  if (currentItem) {
    document.title = `${config.titlePrefix}${currentItem.title}`;
  }
}

/**
 * 高亮当前导航项
 * @param {string} id - 当前 ID
 */
function viewerHighlightNavItem(id) {
  document.querySelectorAll('#viewerNavList a').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.id === id) {
      link.classList.add('active');
    }
  });
}

/**
 * 生成目录
 * @param {HTMLElement} contentElement - 内容元素
 */
function viewerGenerateTOC(contentElement) {
  const tocList = document.getElementById('tocList');
  const toggleAllBtn = document.getElementById('tocToggleAll');
  const headings = contentElement.querySelectorAll('h2, h3');
  
  if (headings.length === 0) {
    tocList.innerHTML = '<li class="toc-empty">暂无目录</li>';
    if (toggleAllBtn) toggleAllBtn.style.display = 'none';
    return;
  }
  
  const hasH3 = Array.from(headings).some(h => h.tagName === 'H3');
  if (toggleAllBtn) {
    toggleAllBtn.style.display = hasH3 ? 'inline-block' : 'none';
  }
  
  let html = '';
  let currentH2Index = -1;
  
  headings.forEach((heading, index) => {
    const id = `heading-${index}`;
    heading.id = id;
    
    const isH2 = heading.tagName === 'H2';
    
    if (isH2) {
      currentH2Index++;
      let hasSubItems = false;
      for (let i = index + 1; i < headings.length; i++) {
        if (headings[i].tagName === 'H3') {
          hasSubItems = true;
          break;
        } else if (headings[i].tagName === 'H2') {
          break;
        }
      }
      
      if (hasSubItems) {
        html += `<li class="toc-item toc-h2" data-index="${currentH2Index}">
          <div class="toc-link-wrapper">
            <button class="toc-toggle-btn" onclick="viewerToggleTOC(${currentH2Index})" title="展开/收起">▼</button>
            <a href="#${id}" class="toc-link">${heading.textContent}</a>
          </div>
        </li>`;
      } else {
        html += `<li class="toc-item toc-h2 no-children" data-index="${currentH2Index}">
          <a href="#${id}" class="toc-link">${heading.textContent}</a>
        </li>`;
      }
    } else {
      html += `<li class="toc-item toc-h3" data-parent="${currentH2Index}"><a href="#${id}">${heading.textContent}</a></li>`;
    }
  });
  
  tocList.innerHTML = html;
  viewerExpandAllTOC();
}

/**
 * 切换目录项展开/收起
 * @param {number} h2Index - H2 索引
 */
window.viewerToggleTOC = function(h2Index) {
  const tocList = document.getElementById('tocList');
  const h2Item = tocList.querySelector(`.toc-h2[data-index="${h2Index}"]`);
  const toggleBtn = h2Item?.querySelector('.toc-toggle-btn');
  
  if (!h2Item || !toggleBtn) return;
  
  const isExpanded = h2Item.classList.contains('expanded');
  const childH3s = tocList.querySelectorAll(`.toc-h3[data-parent="${h2Index}"]`);
  
  if (isExpanded) {
    h2Item.classList.remove('expanded');
    toggleBtn.textContent = '▶';
    childH3s.forEach(h3Item => {
      h3Item.style.display = 'none';
    });
  } else {
    h2Item.classList.add('expanded');
    toggleBtn.textContent = '▼';
    childH3s.forEach(h3Item => {
      h3Item.style.display = 'block';
    });
  }
};

/**
 * 展开所有目录
 */
function viewerExpandAllTOC() {
  const tocList = document.getElementById('tocList');
  const toggleAllBtn = document.getElementById('tocToggleAll');
  
  tocList.querySelectorAll('.toc-h2').forEach(h2Item => {
    const toggleBtn = h2Item.querySelector('.toc-toggle-btn');
    const h2Index = parseInt(h2Item.dataset.index);
    if (toggleBtn) {
      h2Item.classList.add('expanded');
      toggleBtn.textContent = '▼';
    }
    const childH3s = tocList.querySelectorAll(`.toc-h3[data-parent="${h2Index}"]`);
    childH3s.forEach(h3Item => {
      h3Item.style.display = 'block';
    });
  });
  
  if (toggleAllBtn) toggleAllBtn.textContent = '全部展开';
}

/**
 * 收起所有目录
 */
function viewerCollapseAllTOC() {
  const tocList = document.getElementById('tocList');
  const toggleAllBtn = document.getElementById('tocToggleAll');
  
  tocList.querySelectorAll('.toc-h2').forEach(h2Item => {
    const toggleBtn = h2Item.querySelector('.toc-toggle-btn');
    const h2Index = parseInt(h2Item.dataset.index);
    if (toggleBtn) {
      h2Item.classList.remove('expanded');
      toggleBtn.textContent = '▶';
    }
    const childH3s = tocList.querySelectorAll(`.toc-h3[data-parent="${h2Index}"]`);
    childH3s.forEach(h3Item => {
      h3Item.style.display = 'none';
    });
  });
  
  if (toggleAllBtn) toggleAllBtn.textContent = '全部收起';
}

/**
 * 切换所有目录展开/收起
 */
window.viewerToggleAllTOC = function() {
  const tocList = document.getElementById('tocList');
  const hasExpanded = tocList.querySelectorAll('.toc-h2.expanded').length > 0;
  
  if (hasExpanded) {
    viewerCollapseAllTOC();
  } else {
    viewerExpandAllTOC();
  }
};

// 全局事件委托 - 处理答案按钮点击
(function() {
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.viewer-toggle-answer-btn');
    if (btn) {
      e.stopPropagation();
      e.preventDefault();
      const questionId = btn.getAttribute('data-question-id');
      console.log('Viewer: 事件委托 - 按钮点击，questionId:', questionId);
      if (questionId) {
        window.viewerToggleAnswer(questionId);
      }
    }
  }, true);
})();

// 页面加载完成后初始化（如果已定义配置）
document.addEventListener('DOMContentLoaded', function() {
  if (window.viewerConfig && window.viewerConfig.type) {
    viewerInit(window.viewerConfig);
  }
});

// ===== 隐藏/显示控制功能 =====

/**
 * 切换章节导航显示/隐藏
 */
window.viewerToggleChapterNav = function() {
  const container = document.querySelector('.reader-container');
  const icon = document.getElementById('chapterNavToggleIcon');
  
  if (!container) return;
  
  const isHidden = container.classList.contains('chapter-nav-hidden');
  
  console.log('viewerToggleChapterNav called, isHidden:', isHidden);
  
  if (isHidden) {
    container.classList.remove('chapter-nav-hidden');
    if (icon) icon.textContent = '📑';
  } else {
    container.classList.add('chapter-nav-hidden');
    if (icon) icon.textContent = '🗂️';
  }
  
  // 保存到 localStorage
  localStorage.setItem('viewerChapterNavHidden', !isHidden ? 'true' : 'false');
};

/**
 * 切换本章目录显示/隐藏
 */
window.viewerToggleTOCNav = function() {
  const container = document.querySelector('.reader-container');
  const icon = document.getElementById('tocNavToggleIcon');
  
  if (!container) return;
  
  const isHidden = container.classList.contains('toc-nav-hidden');
  
  if (isHidden) {
    container.classList.remove('toc-nav-hidden');
    if (icon) icon.textContent = '📋';
  } else {
    container.classList.add('toc-nav-hidden');
    if (icon) icon.textContent = '🗂️';
  }
  
  // 保存到 localStorage
  localStorage.setItem('viewerTOCNavHidden', !isHidden ? 'true' : 'false');
};

/**
 * 恢复用户之前的设置
 */
function viewerRestoreSettings() {
  // 恢复章节导航状态
  const chapterNavHidden = localStorage.getItem('viewerChapterNavHidden');
  if (chapterNavHidden === 'true') {
    const container = document.querySelector('.reader-container');
    const icon = document.getElementById('chapterNavToggleIcon');
    if (container) {
      container.classList.add('chapter-nav-hidden');
    }
  }
  
  // 恢复本章目录状态
  const tocNavHidden = localStorage.getItem('viewerTOCNavHidden');
  if (tocNavHidden === 'true') {
    const container = document.querySelector('.reader-container');
    const icon = document.getElementById('tocNavToggleIcon');
    if (container) {
      container.classList.add('toc-nav-hidden');
    }
  }
}

// 页面加载时恢复用户设置
document.addEventListener('DOMContentLoaded', function() {
  viewerRestoreSettings();
});

// 键盘快捷键支持
document.addEventListener('keydown', function(e) {
  // Ctrl+1 切换章节导航
  if (e.ctrlKey && e.key === '1') {
    e.preventDefault();
    viewerToggleChapterNav();
  }
  // Ctrl+2 切换本章目录
  if (e.ctrlKey && e.key === '2') {
    e.preventDefault();
    viewerToggleTOCNav();
  }
});
