/**
 * 学习博客 - 主交互脚本
 * 
 * 支持四门课程的多课程学习平台
 */

// ===== 答案显示/隐藏切换 =====
function toggleAnswer(id) {
  const answerContent = document.getElementById(id);
  if (answerContent) {
    answerContent.classList.toggle('show');
  }
}

// ===== 课程切换功能 =====
function switchCourse() {
  const select = document.getElementById('courseSelect');
  const selectedCourse = select.value;
  
  if (selectedCourse) {
    // 获取当前页面类型（lectures, tutorials, homework, exams, notes）
    const currentPage = getCurrentPageType();
    
    // 根据当前页面位置动态生成正确的路径
    const path = window.location.pathname;
    let newHref;
    
    // 检查是否在课程目录下
    const isInCoursesDir = path.includes('/courses/');
    
    if (isInCoursesDir) {
      // 在课程子页面（如 /courses/analytical-chemistry/lectures.html）
      // 需要返回一级到 courses/ 目录，再进入目标课程
      newHref = `../${selectedCourse}/${currentPage}.html`;
    } else {
      // 在根页面或首页（如 /index.html 或 /）
      // 需要进入 courses 目录
      newHref = `courses/${selectedCourse}/${currentPage}.html`;
    }
    
    // 跳转到对应课程的对应页面
    window.location.href = newHref;
  }
}

// ===== 获取当前页面类型 =====
function getCurrentPageType() {
  const path = window.location.pathname;
  const fileName = path.split('/').pop();
  const pageType = fileName.replace('.html', '');
  
  // 如果是课程首页，返回 index
  if (pageType === 'index' || pageType === '') {
    return 'index';
  }
  
  return pageType;
}

// ===== 资源搜索功能 =====
function searchResources() {
  const input = document.getElementById('searchInput');
  const grid = document.getElementById('resourceGrid');
  const noResults = document.getElementById('noResults');
  
  if (!input || !grid) return;
  
  const filter = input.value.toLowerCase();
  const cards = grid.getElementsByClassName('resource-card');
  let hasResults = false;
  
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const title = card.getAttribute('data-title') || '';
    const description = card.querySelector('.card-description')?.textContent || '';
    
    if (title.toLowerCase().includes(filter) || description.toLowerCase().includes(filter)) {
      card.style.display = '';
      hasResults = true;
    } else {
      card.style.display = 'none';
    }
  }
  
  if (noResults) {
    noResults.style.display = hasResults ? 'none' : 'block';
  }
}

// ===== 页面加载完成后的初始化 =====
document.addEventListener('DOMContentLoaded', function() {
  // 添加卡片进入动画
  const cards = document.querySelectorAll('.resource-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = (index * 0.1) + 's';
  });
});

// ===== 移动端菜单切换 =====
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) {
    navLinks.classList.toggle('active');
  }
}