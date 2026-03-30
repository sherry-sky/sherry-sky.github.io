/**
 * 分析化学学习博客 - 交互脚本
 */

// ===== 移动端菜单切换 =====
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.classList.toggle('active');
  }
}

// ===== 答案显示/隐藏切换 =====
function toggleAnswer(id) {
  const answerContent = document.getElementById(id);
  if (answerContent) {
    answerContent.classList.toggle('show');
  }
}

// ===== 课件搜索功能 =====
function searchLectures() {
  const searchInput = document.getElementById('searchInput');
  const lectureGrid = document.getElementById('lectureGrid');
  const noResults = document.getElementById('noResults');
  
  if (!searchInput || !lectureGrid) return;
  
  const searchTerm = searchInput.value.toLowerCase().trim();
  const cards = lectureGrid.querySelectorAll('.resource-card');
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
}

// ===== 习题搜索功能 =====
function searchTutorials() {
  const searchInput = document.getElementById('searchInput');
  const tutorialGrid = document.getElementById('tutorialGrid');
  const noResults = document.getElementById('noResults');
  
  if (!searchInput || !tutorialGrid) return;
  
  const searchTerm = searchInput.value.toLowerCase().trim();
  const cards = tutorialGrid.querySelectorAll('.resource-card');
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
}

// ===== 作业搜索功能 =====
function searchHomework() {
  const searchInput = document.getElementById('searchInput');
  const homeworkGrid = document.getElementById('homeworkGrid');
  const noResults = document.getElementById('noResults');
  
  if (!searchInput || !homeworkGrid) return;
  
  const searchTerm = searchInput.value.toLowerCase().trim();
  const cards = homeworkGrid.querySelectorAll('.resource-card');
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
}

// ===== 考试资料搜索功能 =====
function searchExams() {
  const searchInput = document.getElementById('searchInput');
  const examGrid = document.getElementById('examGrid');
  const noResults = document.getElementById('noResults');
  
  if (!searchInput || !examGrid) return;
  
  const searchTerm = searchInput.value.toLowerCase().trim();
  const cards = examGrid.querySelectorAll('.resource-card');
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
}

// ===== 页面加载完成后的初始化 =====
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
  
  // 搜索框自动聚焦（仅在大屏幕上）
  const searchInput = document.querySelector('.search-input');
  if (searchInput && window.innerWidth > 768) {
    // 可选：自动聚焦搜索框
    // searchInput.focus();
  }
});

// ===== 键盘快捷键 =====
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