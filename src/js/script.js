function menuFilter() {
    const buttons = document.querySelectorAll('.menu__filter-button');
    const items = document.querySelectorAll('.menu__item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {

            buttons.forEach(button => {
                button.classList.remove('menu__filter-button--active');
            });

            button.classList.add('menu__filter-button--active');

            filter(button.dataset.filter, items);
        });
    });

    function filter(category, items) {
        items.forEach(item => {
            const itemFiltered = !item.classList.contains(category);
            const showAll = category.toLowerCase() === 'all';

            if (itemFiltered && !showAll) {
                item.classList.add('menu__item--hide');
            } else {
                item.classList.remove('menu__item--hide');
            };
        });
    };
};

function slider() {
    const sliderLine = document.querySelector('.specialization__slider-line');
    const sliderDots = document.querySelectorAll('.specialization__dot');

    sliderDots.forEach(sliderDot => {
        sliderDot.addEventListener('click', () => {
            let tabId = sliderDot.getAttribute('data-dot');
            let currentSlide = document.querySelector(tabId);
    
            sliderDots.forEach(sliderDot => {
                sliderDot.classList.remove('specialization__dot--active');
            })
            sliderDot.classList.add('specialization__dot--active');
    
            sliderLine.style.left = -currentSlide.offsetLeft + 'px';
        });
    });

}

function navigation() {
    const header = document.querySelector('.header');
    const headerButton = document.querySelector('.header__menu-button');
    const headerMenu = document.querySelector('.header__menu');
    const body = document.querySelector('body');
    const links = document.querySelectorAll('.link');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            headerMenu.classList.remove('header__menu--active');
            headerButton.classList.remove('header__menu-button--active')
            body.style.overflow = 'visible';

            const href = link.getAttribute('href');

            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        });
    });

    window.onscroll = () => {
        if (pageYOffset > 200) {
            header.classList.add('header--sticky');
        } else {
            header.classList.remove('header--sticky');
        };
    };

    headerButton.addEventListener('click', () => {
        headerMenu.classList.toggle('header__menu--active');
        headerButton.classList.toggle('header__menu-button--active')
        
        if(headerMenu.classList.contains('header__menu--active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'visible';
        }
    })
};

window.addEventListener('resize', slider)
menuFilter();
slider();
navigation();