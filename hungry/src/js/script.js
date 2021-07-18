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
    const buttonPrev = document.querySelector('.specialization__button-prev');
    const buttonNext = document.querySelector('.specialization__button-next');
    let offset = 0
    const sliderLine = document.querySelector('.specialization__slider-line');
    let itemWidth = document.querySelector('.specialization__slider-item').offsetWidth;
    const sliderItems = document.querySelectorAll('.specialization__slider-item').length - 1;

    buttonPrev.addEventListener('click', () => {
        offset = offset - itemWidth;

        if (offset < 0) {
            offset = itemWidth * sliderItems;
        };
        console.log(offset);
        sliderLine.style.left = -offset + 'px';
    })

    buttonNext.addEventListener('click', () => {
        offset = offset + itemWidth;

        if (offset > (itemWidth * sliderItems)) {
            offset = 0;
        };
        sliderLine.style.left = -offset + 'px';
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
        
        if(headerMenu.classList.contains('header__menu--active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'visible';
        }
    })
};


menuFilter();
slider();
navigation();