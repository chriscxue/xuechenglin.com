// header.js - 动态加载header组件
function loadHeader() {
    const headerHTML = `
        <header id="masthead" class="site-header">
            <div class="container">
                <div class="site-branding">
                    <a href="index.html" class="site-title" rel="home">Chris Chenglin Xue</a>
                </div>
                <button class="menu-toggle" aria-label="Toggle menu">&#9776;</button>
                <div class="nav-right">
                    <div class="searchandfilter">
                        <ul>
                            <li class="sf-field-category">
                                <ul>
                                    <li class="sf-level-0 sf-item-0">
                                        <a href="work.html" class="nav-link">perhaps everything is just gone</a>
                                    </li>
                                    <li class="sf-level-0 sf-item-1">
                                        <a href="interview.html" class="nav-link">interview</a>
                                    </li>
                                    <li class="sf-level-0 sf-item-2">
                                        <a href="alfred-hill.html" class="nav-link">alfred hill</a>
                                    </li>
                                    <li class="sf-level-0 sf-item-3">
                                        <a href="vibration.html" class="nav-link">vibration</a>
                                    </li>
                                    <li class="sf-level-0 sf-item-4">
                                        <a href="soliloquize.html" class="nav-link">soliloquize</a>
                                    </li>
                                    <li class="sf-level-0 sf-item-5">
                                        <a href="random-notes.html" class="nav-link">random notes</a>
                                    </li>
                                    <li class="sf-level-0 sf-item-6">
                                        <a href="one-day-one-place.html" class="nav-link">one day, one place</a>
                                    </li>
                                    <li class="sf-level-0 sf-item-7">
                                        <a href="3733-61st-woodside.html" class="nav-link">3733 61st woodside</a>
                                    </li>
                                    <li class="sf-level-0 sf-item-8">
                                        <a href="about.html" class="nav-link">about</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    `;
    
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
        
        // 设置当前页面的导航链接为active
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });

        // 汉堡菜单
        const toggle = document.querySelector('.menu-toggle');
        const navRight = document.querySelector('.nav-right');
        if (toggle && navRight) {
            toggle.addEventListener('click', () => {
                navRight.classList.toggle('open');
                toggle.innerHTML = navRight.classList.contains('open') ? '&#10005;' : '&#9776;';
            });
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navRight.classList.remove('open');
                    toggle.innerHTML = '&#9776;';
                });
            });
        }
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', loadHeader);