
// 定義食記數據
const foodData = [
    {
        category: "taipei",
        date: "2024-10-23",
        location: "台北・中山區",
        image: "https://findlife.com.tw/menu/blog/wp-content/uploads/2018/12/eec49713-5948-452c-b8ba-098dd2708e94_i_image.jpg",
        title: "隱世法式料理",
        rating: 4.7,
        price: "$$$$",
        description: "隱身在巷弄中的法式餐廳，主廚堅持使用當季食材，每一道料理都充滿驚喜..."
    },
    {
        category: "taichung",
        date: "2024-10-22",
        location: "台中・大安區",
        image: "https://findlife.com.tw/menu/blog/wp-content/uploads/2018/12/eec49713-5948-452c-b8ba-098dd2708e94_i_image.jpg",
        title: "老巷手工麵館",
        rating: 5,
        price: "$",
        description: "三代傳承的好味道，每日手工現作的麵條，搭配秘製醬料，樸實中藏著驚艷..."
    },
    {
        category: "tainan",
        date: "2024-10-23",
        location: "台南・中山區",
        image: "https://findlife.com.tw/menu/blog/wp-content/uploads/2018/12/eec49713-5948-452c-b8ba-098dd2708e94_i_image.jpg",
        title: "隱世法式料理",
        rating: 1,
        price: "$$$$",
        description: "隱身在巷弄中的法式餐廳，主廚堅持使用當季食材，每一道料理都充滿驚喜..."
    },
    {
        category: "tainan",
        date: "2024-10-23",
        location: "台南・中山區",
        image: "https://findlife.com.tw/menu/blog/wp-content/uploads/2018/12/eec49713-5948-452c-b8ba-098dd2708e94_i_image.jpg",
        title: "隱世法式料理",
        rating: 3,
        price: "$$$$",
        description: "隱身在巷弄中的法式餐廳，主廚堅持使用當季食材，每一道料理都充滿驚喜..."
    },
    {
        category: "tainan",
        date: "2024-10-23",
        location: "台南・中山區",
        image: "https://findlife.com.tw/menu/blog/wp-content/uploads/2018/12/eec49713-5948-452c-b8ba-098dd2708e94_i_image.jpg",
        title: "隱世法式料理",
        rating: 1,
        price: "$$$$",
        description: "隱身在巷弄中的法式餐廳，主廚堅持使用當季食材，每一道料理都充滿驚喜..."
    },
    {
        category: "tainan",
        date: "2024-10-23",
        location: "台南・中山區",
        image: "https://findlife.com.tw/menu/blog/wp-content/uploads/2018/12/eec49713-5948-452c-b8ba-098dd2708e94_i_image.jpg",
        title: "隱世法式料理",
        rating: 1,
        price: "$$$$",
        description: "隱身在巷弄中的法式餐廳，主廚堅持使用當季食材，每一道料理都充滿驚喜..."
    },
    {
        category: "tainan",
        date: "2024-10-23",
        location: "台南・中山區",
        image: "https://findlife.com.tw/menu/blog/wp-content/uploads/2018/12/eec49713-5948-452c-b8ba-098dd2708e94_i_image.jpg",
        title: "隱世法式料理",
        rating: 1,
        price: "$$$$",
        description: "隱身在巷弄中的法式餐廳，主廚堅持使用當季食材，每一道料理都充滿驚喜..."
    },

];

// 生成食記卡片的函數
function generateFoodCard(foodItem) {
    return `
        <div class="col-md-6 col-lg-4 blog-card" category="${foodItem.category}"rating="${foodItem.rating}" date="${foodItem.date}">
            <div class="card food-card">
                <div class="location-tag">
                    ${foodItem.location}
                </div>
                <div class="card-image-wrapper">
                    <img src="${foodItem.image}" class="card-img-top" alt="餐廳美食照片">
                </div>
                <div class="card-body">
                    <h5 class="card-title">
                        ${foodItem.title}
                        <span class="card-date">${foodItem.date}</span>
                    </h5>
                    <div class="mb-2">
                        <span class="rating">
                        ${generateStarRating(foodItem.rating)}
                        </span>
                        <span class="ms-2">${foodItem.rating}</span>
                        <span class="price-tag float-end">${foodItem.price}</span>
                    </div>
                    <p>${foodItem.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-primary btn-view">查看完整食記</button>
                            <div class="interaction-icons">
                                <span class="me-2"><i class="fas fa-heart text-danger"></i> 326</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateStarRating(rating) {
    let starsHTML = '';

    // 檢查評分並設置相應的星星
    if (rating === 5) {
        starsHTML += '<i class="fas fa-star"></i>'; 
    } else if (rating >= 1 && rating < 5) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>'; 
    }



    return starsHTML;
}


// 初始化頁面時渲染所有食記卡片
function initializeFoodCards() {
    const container = document.querySelector('.row.g-4');
    if (!container) return;

    const cardsHTML = foodData.map(food => generateFoodCard(food)).join('');
    container.innerHTML = cardsHTML;
}

// DOM加載完成後初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeFoodCards();
});

// 新增食記的函數
function addNewFoodCard(foodData) {
    const container = document.querySelector('.row.g-4');
    if (!container) return;
    
    const newCardHTML = generateFoodCard(foodData);
    container.insertAdjacentHTML('beforeend', newCardHTML);
}

// 等待DOM加載完成
document.addEventListener('DOMContentLoaded', function() {
    
    // 導航欄滾動效果
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            // 向下
            navbar.classList.add('scroll-down');
            navbar.style.transform = 'translateY(-100%)';
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            // 向上
            navbar.classList.remove('scroll-down');
            navbar.style.transform = 'translateY(0)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
        
        lastScroll = currentScroll;
    });

    // 分類標籤切換
    const categoryBadges = document.querySelectorAll('.category-badge');
    categoryBadges.forEach(badge => {
        badge.addEventListener('click', function() {
            categoryBadges.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 輪播圖自動播放設置
    const carousel = new bootstrap.Carousel(document.querySelector('#heroCarousel'), {
        interval: 5000,
        touch: true
    });


    const initialCardCount = 6; // 預設顯示卡片數量
    let visibleCardCount = initialCardCount;
    const cards = document.querySelectorAll('.food-card');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const allFoodBtn = document.querySelector('button[onclick*="全部美食"]'); 

    loadMoreBtn.style.display = 'block';

    // 顯示初始設定的卡片
    const showCards = (count) => {
        cards.forEach((card, index) => {
            card.style.display = (index < count) ? 'block' : 'none';
        });
    };

    // 初始顯示部分卡片
    showCards(visibleCardCount);

    // 點擊載入更多顯示更多卡片
    loadMoreBtn.addEventListener('click', function() {
        visibleCardCount += initialCardCount; // 每次多顯示6張
        showCards(visibleCardCount);

        // 當所有卡片顯示時，隱藏載入更多按鈕
        if (visibleCardCount >= cards.length) {
            loadMoreBtn.style.display = 'none';
        }
    });

    // 點擊全部美食按鈕隱藏載入更多的卡片，並顯示初始狀態
    allFoodBtn.addEventListener('click', function() {
        visibleCardCount = initialCardCount; 
        showCards(visibleCardCount);
        loadMoreBtn.style.display = 'block'; 
    });
    loadMoreBtn.style.display = 'block'; 

    // 滾動動畫
    const scrollElements = document.querySelectorAll('.food-card');
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = element => {
        element.classList.add('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // 初始化提示工具
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // 平滑滾動
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 電子報訂閱表單處理
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            // 添加訂閱相關的API調用
            alert('感謝訂閱！');
            this.reset();
        });
    }
});



let currentCategory = 'all';


function filterCards(category, status) {
    currentCategory = category;
    const cards = Array.from(document.querySelectorAll('.blog-card'));

    // 显示所有卡片
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('category') === category) {
            card.classList.remove('hidden'); 
        } else {
            card.classList.add('hidden'); //隱藏卡片
        }
    });

    // 更新
    document.getElementById('currentStatus').innerText = status;
}



// 按日期排序（新到舊）
function sortByDateDesc() {
    const cards = Array.from(document.querySelectorAll('.blog-card'));
    

    const visibleCards = cards.filter(card => 
        !card.classList.contains('hidden')
    );
    

    visibleCards.sort((a, b) => {
        const dateA = new Date(a.getAttribute('date'));
        const dateB = new Date(b.getAttribute('date'));
        return dateB - dateA;//降序
    });
    
    const cardContainer = document.querySelector('.row.g-4');
    
    // 保存所有隐藏的卡片
    const hiddenCards = cards.filter(card => 
        card.classList.contains('hidden')
    );
    
    // 清空容器
    cardContainer.innerHTML = '';
    

    visibleCards.forEach(card => {
        cardContainer.appendChild(card);
    });
    

    hiddenCards.forEach(card => {
        cardContainer.appendChild(card);
    });
}

// 按日期排序（舊到新）
function sortByDateAsc() {
    const cards = Array.from(document.querySelectorAll('.blog-card'));
    

    const visibleCards = cards.filter(card => 
        !card.classList.contains('hidden')
    );
    

    visibleCards.sort((a, b) => {
        const dateA = new Date(a.getAttribute('date'));
        const dateB = new Date(b.getAttribute('date'));
        return dateA - dateB; 
    });
    
    const cardContainer = document.querySelector('.row.g-4');
    

    const hiddenCards = cards.filter(card => 
        card.classList.contains('hidden')
    );
    

    cardContainer.innerHTML = '';
    

    visibleCards.forEach(card => {
        cardContainer.appendChild(card);
    });
    

    hiddenCards.forEach(card => {
        cardContainer.appendChild(card);
    });
}

function sortByRatingDesc() {
    const cards = Array.from(document.querySelectorAll('.blog-card'));


    const visibleCards = cards.filter(card => 
        !card.classList.contains('hidden')
    );


    visibleCards.sort((a, b) => {
        const ratingA = parseFloat(a.getAttribute('rating')); 
        const ratingB = parseFloat(b.getAttribute('rating'));
        return ratingB - ratingA; 
    });

    updateCardDisplay(visibleCards);
}

function sortByRatingAsc() {
    const cards = Array.from(document.querySelectorAll('.blog-card'));


    const visibleCards = cards.filter(card => 
        !card.classList.contains('hidden')
    );


    visibleCards.sort((a, b) => {
        const ratingA = parseFloat(a.getAttribute('rating'));
        const ratingB = parseFloat(b.getAttribute('rating'));
        return ratingA - ratingB;
    });

    updateCardDisplay(visibleCards);
}


function updateCardDisplay(visibleCards) {
    const cardContainer = document.querySelector('.row.g-4');
    

    const hiddenCards = Array.from(document.querySelectorAll('.blog-card')).filter(card => 
        card.classList.contains('hidden')
    );


    cardContainer.innerHTML = '';


    visibleCards.forEach(card => {
        cardContainer.appendChild(card);
    });


    hiddenCards.forEach(card => {
        cardContainer.appendChild(card);
    });
}


const scrollToTopButton = document.getElementById('scrollToTopButton');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block"; 
    } else {
        scrollToTopButton.style.display = "none"; 
    }
};
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});