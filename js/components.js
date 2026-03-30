/**
 * 学习博客 - 组件加载脚本
 * 用于动态加载公共组件（导航栏、页脚等）
 */

// 当前页面标识
let currentPage = '';

/**
 * 获取组件基础路径 - 根据当前页面位置动态计算
 */
function getComponentsBasePath() {
  const path = window.location.pathname;
  // 如果在 courses 子目录下，需要返回上级目录
  if (path.includes('/courses/')) {
    return '../../components/';
  }
  return 'components/';
}

/**
 * 加载组件
 * @param {string} componentName - 组件名称（如 'navbar', 'footer'）
 * @param {string} containerId - 目标容器 ID
 * @param {Object} options - 可选配置项
 */
async function loadComponent(componentName, containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`容器 #${containerId} 未找到`);
    return;
  }

  try {
    const response = await fetch(`${getComponentsBasePath()}${componentName}.html`);
    if (!response.ok) {
      throw new Error(`加载 ${componentName} 组件失败：${response.statusText}`);
    }
    
    const html = await response.text();
    container.innerHTML = html;
    
    // 加载完成后执行回调
    if (options.onLoad) {
      options.onLoad(container);
    }
    
    // 如果是导航栏，设置当前页面高亮
    if (componentName === 'navbar') {
      highlightCurrentNav();
    }
    
  } catch (error) {
    console.error(`加载组件 ${componentName} 失败:`, error);
    container.innerHTML = `<div class="component-error">加载失败：${componentName}</div>`;
  }
}

/**
 * 设置当前页面标识并高亮导航
 * @param {string} page - 页面标识（如 'index', 'lectures', 'tutorials' 等）
 */
function setCurrentPage(page) {
  currentPage = page;
  highlightCurrentNav();
}

/**
 * 高亮当前导航项
 */
function highlightCurrentNav() {
  if (!currentPage) return;
  
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    const dataPage = link.getAttribute('data-page');
    if (dataPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * 通用资源搜索功能
 * @param {string} gridId - 卡片网格容器 ID
 * @param {string} placeholder - 搜索框占位符
 */
function initResourceSearch(gridId, placeholder = '搜索...') {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  // 设置占位符
  searchInput.placeholder = placeholder;
  
  // 绑定搜索事件（已在 HTML 中绑定 onkeyup，这里不需要重复绑定）
  window.searchResources = function() {
    const grid = document.getElementById(gridId);
    const noResults = document.getElementById('noResults');
    
    if (!grid) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    const cards = grid.querySelectorAll('.resource-card');
    let hasResults = false;
    
    cards.forEach(card => {
      const title = card.getAttribute('data-title') || '';
      const cardTitle = card.querySelector('.card-title')?.textContent || '';
      const cardDesc = card.querySelector('.card-description')?.textContent || '';
      
      const searchText = (title + ' ' + cardTitle + ' ' + cardDesc).toLowerCase();
      
      if (searchText.includes(searchTerm)) {
        card.style.display = 'flex';
        hasResults = true;
      } else {
        card.style.display = 'none';
      }
    });
    
    // 显示/隐藏无结果提示
    if (noResults) {
      noResults.style.display = hasResults ? 'none' : 'block';
    }
  };
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  // 添加卡片进入动画
  const cards = document.querySelectorAll('.resource-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = (index * 0.1) + 's';
  });
  
  // 移动端菜单点击外部关闭
  document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (navLinks && menuToggle && 
        !navLinks.contains(event.target) && 
        !menuToggle.contains(event.target) &&
        navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// 键盘快捷键
document.addEventListener('keydown', function(event) {
  // 按 "/" 键聚焦搜索框
  if (event.key === '/' && !event.target.matches('input, textarea')) {
    event.preventDefault();
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.focus();
    }
  }
  
  // 按 ESC 键关闭移动端菜单
  if (event.key === 'Escape') {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.remove('active');
    }
  }
});