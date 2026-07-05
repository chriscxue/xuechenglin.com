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

// DOM元素
const submissionsLoop = document.querySelector('.submissionsLoop');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderArtworks(artworks);
});

// 渲染作品卡片
function renderArtworks(artworksToRender) {
    submissionsLoop.innerHTML = '';

    artworksToRender.forEach((artwork) => {
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
});
