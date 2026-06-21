// 艺术作品数据 - 按指定顺序排列
const artworks = [
    {
        id: 1,
        title: "PERHAPS EVERYTHING IS JUST GONE",
        category: "photography",
        image: "images/works/perhaps-everything/cover.jpg",
        description: "40X40 in / Black & White Photography / Digital Print / 2012-2016",
        link: "work.html"
    },
    {
        id: 3,
        title: "INTERVIEW",
        category: "motion",
        image: "images/works/interview/cover.gif",
        description: "3 Channel Video / 3:25 Min / 2012",
        link: "interview.html"
    },
    {
        id: 7,
        title: "ALFRED HILL",
        category: "illustration",
        image: "images/works/alfred-hill/cover.jpg",
        description: "Φ 14 cm h 5 cm / Arduino, Vibration Motor, Ceramic Bowl / 2018",
        link: "alfred-hill.html"
    },
    {
        id: 2,
        title: "VIBRATION",
        category: "website",
        image: "images/works/vibration/cover.jpg",
        description: "20X30 in / Visualization of sound data / Digital Print / 2010",
        link: "vibration.html"
    },
    {
        id: 5,
        title: "SOLILOQUIZE",
        category: "website",
        image: "images/works/soliloquize/cover.jpg",
        description: "Vibration Data, Arduino & Vibration Sensor, MAXMSP / 30X30 in / 2013",
        link: "soliloquize.html"
    },
    {
        id: 4,
        title: "RANDOM NOTES",
        category: "design",
        image: "images/works/random-notes/cover.jpg",
        description: "30X30 in / Black & White, Digital Print / 2010",
        link: "random-notes.html"
    },
    {
        id: 8,
        title: "ONE DAY, ONE PLACE",
        category: "photography",
        image: "images/works/one-day-one-place/cover.jpg",
        description: "Photography",
        link: "one-day-one-place.html"
    },
    {
        id: 6,
        title: "3733 61ST WOODSIDE",
        category: "photography",
        image: "images/works/3733-61st-woodside/cover.jpg",
        description: "3 Panels, each 62X47 in / C-Print / 2013",
        link: "3733-61st-woodside.html"
    }
];

// 分类映射
const categoryMap = {
    'website': 'Digital',
    'design': 'Graphic Design',
    'illustration': 'Installation',
    'motion': 'Video',
    'photography': 'Photography',
    'podcast': 'Podcast',
    'type': 'Typography'
};

// DOM元素
const submissionsLoop = document.querySelector('.submissionsLoop');
const filterRadios = document.querySelectorAll('.sf-input-radio');
const searchToggle = document.querySelector('.other-menu .search');
const aboutToggle = document.querySelector('.other-menu .about');
const searchField = document.querySelector('.sf-field-search');
const aboutBox = document.querySelector('.about-box');
const searchInput = document.querySelector('.sf-input-text');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderArtworks(artworks);
    setupEventListeners();
    
    // 阻止表单提交
    const filterForm = document.getElementById('filter-form');
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) { e.preventDefault(); });
    }
});

// 渲染作品卡片
function renderArtworks(artworksToRender) {
    console.log('renderArtworks called with:', artworksToRender);
    submissionsLoop.innerHTML = '';
    
    if (artworksToRender.length === 0) {
        submissionsLoop.innerHTML = '<div class="loading">No matching works found</div>';
        return;
    }

    artworksToRender.forEach((artwork, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <a href="${artwork.link}" data-id="${artwork.id}">
                <div class="card-image">
                    <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
                </div>
                <div class="card-content">
                    <h1>${artwork.title}</h1>
                </div>
            </a>
        `;
        submissionsLoop.appendChild(card);
    });
    console.log('Rendered', artworksToRender.length, 'cards');
}

// 设置事件监听器
function setupEventListeners() {
    // 筛选功能 - 点击整个筛选项
    document.querySelectorAll('.sf-level-0').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('点击了筛选项');
            const radio = this.querySelector('.sf-input-radio');
            console.log('radio:', radio);
            if (radio) {
                // 更新活动状态
                document.querySelectorAll('.sf-level-0').forEach(li => li.classList.remove('sf-option-active'));
                this.classList.add('sf-option-active');
                
                // 设置radio为选中
                radio.checked = true;
                const filter = radio.value;
                console.log('filter:', filter);
                
                // 筛选作品
                if (filter === '') {
                    renderArtworks(artworks);
                } else {
                    const filteredArtworks = artworks.filter(artwork => artwork.category === filter);
                    console.log('filteredArtworks:', filteredArtworks);
                    renderArtworks(filteredArtworks);
                }
                
                // 关闭搜索和关于页面
                hideSearch();
                hideAbout();
            }
        });
    });

    // 搜索功能
    searchToggle.addEventListener('click', function() {
        if (searchField.classList.contains('hidden') || !searchField.classList.contains('visible')) {
            showSearch();
            hideAbout();
        } else {
            hideSearch();
        }
    });

    // 关于页面
    aboutToggle.addEventListener('click', function() {
        if (aboutBox.classList.contains('hidden')) {
            showAbout();
            hideSearch();
        } else {
            hideAbout();
        }
    });

    // 搜索输入
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            renderArtworks(artworks);
            return;
        }

        const filteredArtworks = artworks.filter(artwork => 
            artwork.title.toLowerCase().includes(searchTerm) ||
            artwork.description.toLowerCase().includes(searchTerm) ||
            categoryMap[artwork.category].toLowerCase().includes(searchTerm)
        );
        
        renderArtworks(filteredArtworks);
    });

    // 键盘快捷键
    document.addEventListener('keydown', function(e) {
        // ESC键关闭搜索和关于页面
        if (e.key === 'Escape') {
            hideSearch();
            hideAbout();
        }
        
        // Ctrl/Cmd + K 打开搜索
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            showSearch();
            hideAbout();
            searchInput.focus();
        }
    });
}

// 显示搜索框
function showSearch() {
    searchField.classList.remove('hidden');
    searchField.classList.add('visible');
    searchInput.focus();
}

// 隐藏搜索框
function hideSearch() {
    searchField.classList.add('hidden');
    searchField.classList.remove('visible');
    searchInput.value = '';
    renderArtworks(artworks);
}

// 显示关于页面
function showAbout() {
    aboutBox.classList.remove('hidden');
    aboutBox.classList.add('visible');
}

// 隐藏关于页面
function hideAbout() {
    aboutBox.classList.add('hidden');
    aboutBox.classList.remove('visible');
}

// 图片懒加载
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// 平滑滚动
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// 添加滚动动画
function addScrollAnimations() {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// 页面加载完成后初始化动画
window.addEventListener('load', function() {
    addScrollAnimations();
    lazyLoadImages();
});