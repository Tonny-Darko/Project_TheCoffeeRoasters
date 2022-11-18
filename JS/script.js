const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() || 
            isMobile.BlackBerry() || 
            isMobile.iOS() || 
            isMobile.Opera() || 
            isMobile.Windows()); 
        
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
};

//Меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
};



//Плавна прокрутка
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            if(iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top:gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
};

// ТАБИ

const tabNavItems = document.querySelectorAll('.tabs-gallery__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
    const targetElement = e.target;
    let currentActiveIndex = null;
    let newActiveIndex = null;
    if (targetElement.closest('.tabs-gallery__button')) {
        tabNavItems.forEach((tabNavItem, index) => {
            if(tabNavItem.classList.contains('active')) {
                currentActiveIndex = index;
                tabNavItem.classList.remove('active');
            }
            if(tabNavItem === targetElement) {
                newActiveIndex = index;
            }
        });
        targetElement.classList.add('active');
        tabItems[currentActiveIndex].classList.remove('active');
        tabItems[newActiveIndex].classList.add('active');
    }
});

// SLIDER

new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCurcor: true,
    // mousewheel: {
    //     sensitivity: 1,
    //     eventsTarget: ".image-slider"
    // },
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoplay: {
        delay: 6000,
        disableOnInterection: false
    },
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
})