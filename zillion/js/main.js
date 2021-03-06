window.onload = () => {
    const body = document.body;
    setTimeout(() => {
        body.classList.add('loaded_hiding');
    }, 300);

    setTimeout(() => {
        body.classList.add('loaded');
        body.classList.remove('loaded_hiding');
    }, 1000);
};

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.js-menu');
    const burger = document.querySelector('.js-burger');

    const unrollBtns = document.querySelectorAll('.js-button-more');

    const requestOpen = document.querySelectorAll('.js-open-request');
    const popupCloseBtns = document.querySelectorAll('.js-popup-close');

    const forms = document.querySelectorAll('form');

    const picsetButtons = document.querySelectorAll('.js-picture-button');

    const bandito = document.querySelector('.js-bandito');

    const header = document.querySelector('.header');

    let mainSliderTimer;

    const whichPage = () => {
        const pageIdentifier = document.querySelector('.js-page-identifier');

        return pageIdentifier.dataset.page;
    }

    const constrain = (val, min, max) => {
        return val > max ? max : val < min ? min : val;
    }

    const unrollBtnClick = () => {
        const button = event.target;
        const targetSelector = button.dataset.target;

        const targetNode = document.querySelector(`.${targetSelector}`);

        targetNode.classList.toggle('active');

        button.innerText = targetNode.classList.contains('active') ? 'less news' : 'more news';
    }

    const scrollHandler = () => {
        window.pageYOffset > 80 ? document.querySelector('.header').classList.add('fixed') : document.querySelector('.header').classList.remove('fixed');

    }

    const resizeHandler = () => {
        
        if(whichPage() == 'index') banditoWatch();

        if(window.innerWidth >= 980) toggleMenu(false);

        if(window.innerWidth >= 880){
            if(whichPage() == 'game'){
                document.querySelector('.game-page__description').appendChild(document.querySelector('.js-play-demo'));
            }
        }
        else if(window.innerWidth <= 880 && window.innerWidth > 680) {
            if(whichPage() == 'game'){
                document.querySelector('.game-page__info').prepend(document.querySelector('.js-play-demo'));
            }
        }
        else{
            if(whichPage() == 'about'){
                document.querySelector('.about-page__top').prepend(document.querySelector('.js-about-img'));
            }
            else if(whichPage() == 'game'){
                document.querySelector('.game-page__text').prepend(document.querySelector('.js-play-demo'));            
            }
        }

        if(window.innerWidth <= 770){
            if(whichPage() == 'index'){
                document.querySelector('.slide__data').insertBefore(document.querySelector('.slide__images'), document.querySelector('.slide__controls'))
            }   
        }
    }

    const toggleScrolling = (state = null) => {
        const body = document.querySelector('body');

        if(window.innerWidth < 960 || true){
            if(state == null){
                body.classList.toggle('block-scroll');
            }
            else if( state == true){
                body.classList.add('block-scroll');
            }
            else if( state == false){
                body.classList.remove('block-scroll');
            }
        }
    }

    const closePopup = () => {
        const popupOverlay = document.querySelector('.js-popup-overlay');

        if(popupOverlay.classList.contains('active')){
            toggleScrolling(false);
        }

        popupOverlay.classList.remove('active');
        popupOverlay.querySelectorAll('.popup').forEach(popup => popup.classList.remove('active'));
    }

    const togglePopup = (selector, state = null) => {
        const targetPopup = document.querySelector(selector);
        const popupOverlay = document.querySelector('.js-popup-overlay');
        
        if(state === null){
            return () => {
                toggleMenu(false);
                targetPopup.classList.add('active');
                popupOverlay.classList.add('active');
                toggleScrolling(true);
    
                popupOverlay.addEventListener('click', () => {
                    if(event.target.classList.contains('js-popup-overlay')){
                        closePopup();
                    }
                });
            }
        }
        else if(state == true) {
            targetPopup.classList.add('active');
            popupOverlay.classList.add('active');
            toggleScrolling(true);
        }
        else{
            targetPopup.classList.remove('active');
            popupOverlay.classList.remove('active');
            toggleScrolling(false);
        }
        toggleMenu(false);
        
        popupOverlay.addEventListener('click', () => {
            if(event.target.classList.contains('js-popup-overlay')){
                closePopup();
            }
        });
    }

    const showSliderPage = (page = 1) => {
        const slider = document.querySelector('.js-slider');
        const sliderMaxPages = parseInt(slider.dataset.pages);

        page = page > getMaxSliderPage() ? 1 : page <= 0 ? getMaxSliderPage() : page;

        slider.dataset.page = page;

        const pageData = slider.querySelectorAll('.js-slider-changable');

        pageData.forEach(data => data.classList.remove('active'));

        let targetPageData = Array.prototype.slice.call(pageData).filter(item => item.dataset.slide == page) || pageData[sliderMaxPages - 1];

        targetPageData.forEach(data => data.classList.add('active'));
    }

    const getActiveSliderPage = () => {
        const slider = document.querySelector('.js-slider');

        return parseInt(slider.dataset.page);
    }

    const getMaxSliderPage = () => {
        const slider = document.querySelector('.js-slider');

        return parseInt(slider.dataset.pages);
    }

    const formSubmitHandler = () => {

        event.preventDefault();

        const targetForm = event.target;
        const url = '';

        const formData = new FormData(targetForm);

        // fetch(url, {
        //     method: 'POST',
        //     body: formData,
        // })
        // .then(response => {
            // targetForm.reset();
            // closePopup();
            // togglePopup('.js-popup-thx', true);
            // setTimeout(closePopup, 2000);
        // });

        targetForm.reset();
        closePopup();
        togglePopup('.js-popup-thx', true);
        setTimeout(closePopup, 2000);
    }

    const toggleMenu = (state=null) => {

        if(typeof(state) == 'object'){
            return () => {
                burger.classList.toggle('active');
                menu.classList.toggle('active');

                burger.classList.contains('active') ? toggleScrolling(true) : toggleScrolling(false) ;
                burger.classList.contains('active') ? header.classList.add('menu-opened') : header.classList.remove('menu-opened');
                
                closePopup();
            }
        }
        else{
            state ? menu.classList.add('active') : menu.classList.remove('active');
            state ? burger.classList.add('active') : burger.classList.remove('active');
            state ? header.classList.add('menu-opened') : header.classList.remove('menu-opened');
            
            state ? toggleScrolling(true) : toggleScrolling(false);
            
            if(state) closePopup();
        }
    }

    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const picsetButtonClick = () => {
        let button = event.target;
        let picture = document.querySelector('.js-picture');

        picture.querySelectorAll('source').forEach(source => source.remove());

        while(!button.classList.contains('js-picture-button')){
            button = button.parentNode;
        }

        picture.querySelector('img').setAttribute('src', button.dataset.imgSrc);
        picture.querySelector('img').setAttribute('alt', "?????????? ????????");

        if(button.dataset.imgSrcWebp != undefined && button.dataset.imgSrcWebp.length > 0){
            let source = document.createElement('source');
            source.setAttribute('type', 'image/webp');
            source.setAttribute('srcset', button.dataset.imgSrcWebp);

            picture.prepend(source);
        }
    }

    const banditoWatch = () => {
        if(bandito.classList.contains('bandito_blocked') || whichPage() != 'index') return;
        const marginTop = parseInt(getComputedStyle(bandito.querySelectorAll('.bandito__item')[1]).marginTop);

        bandito.querySelectorAll('.bandito__item').forEach(item => {
            let height = Math.ceil(bandito.querySelector('.bandito__body').getBoundingClientRect().height - 2 * marginTop) / 3;

            item.style.height = `${height}px`;
        });

        const itemDementions = {
            width: bandito.querySelector('.bandito__item').getBoundingClientRect().width,
            height: bandito.querySelector('.bandito__item').getBoundingClientRect().height
        };

        return itemDementions;
    }

    const banditoInit = () => {
        if(bandito.classList.contains('bandito_blocked') || whichPage() != 'index') return;
        const banditoCols = bandito.querySelectorAll('.bandito__col');
        let itemDementions = banditoWatch();
        let marginTop = parseInt(getComputedStyle(bandito.querySelectorAll('.bandito__item')[1]).marginTop);

        const createItem = () => {
            let height = Math.ceil(bandito.querySelector('.bandito__body').getBoundingClientRect().height - 2 * marginTop) / 3;
            const svgItems = ['lamp', 'brackets', 'penciles', 'logo'];

            let item = document.createElement('div');
            item.classList.add('bandito__item');
            item.classList.add('choseble');
            item.classList.add('created');
            item.innerHTML = `<svg><use xlink:href="#${svgItems[random(0, svgItems.length - 1)]}"></use></svg>`;

            item.style.height = `${height}px`;

            return item;
        }

        const banditoAnimate = () => {
            itemDementions = banditoWatch();

            let targetItems = new Array();

            banditoCols.forEach(col => {
                targetItems.push(random(10, col.querySelectorAll('.bandito__item.choseble').length - 3));
            });

            banditoCols.forEach((col, index) => {
                marginTop = parseInt(getComputedStyle(col.querySelectorAll('.bandito__item')[1]).marginTop);

                let pos = (targetItems[index] * (itemDementions.height + marginTop));

                col.style.transform = `translateY(${-pos}px)`;

                setTimeout(() => col.querySelectorAll('.bandito__item.active').forEach(item => item.classList.remove('active')), 1000);
                setTimeout(() => col.querySelectorAll('.bandito__item')[targetItems[index] + 1].classList.add('active'), 1000 + index * 500);
                                
            });
        }

        banditoAnimate();

        setInterval(banditoAnimate, 4000);
    }

    unrollBtns.forEach( button => button.addEventListener('click', unrollBtnClick));

    picsetButtons.forEach( button => button.addEventListener('click', picsetButtonClick));

    popupCloseBtns.forEach( button => button.addEventListener('click', closePopup));
    requestOpen.forEach( button => button.addEventListener('click', togglePopup('.js-popup-request')));

    forms.forEach( button => button.addEventListener('submit', formSubmitHandler));

    burger.addEventListener('click', toggleMenu());

    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);

    scrollHandler();
    resizeHandler();

    if(whichPage() == 'index'){
        banditoInit();
        showSliderPage();
        
        mainSliderTimer = setInterval(() => getActiveSliderPage() == getMaxSliderPage() ? showSliderPage() : showSliderPage(getActiveSliderPage() + 1), 5000);
        
        

        document.querySelector('.js-slider-prev').addEventListener('click', () => {
            clearInterval(mainSliderTimer);
            mainSliderTimer = setInterval(() => getActiveSliderPage() == getMaxSliderPage() ? showSliderPage() : showSliderPage(getActiveSliderPage() + 1), 5000);
            
            showSliderPage(getActiveSliderPage() - 1);
        });
        document.querySelector('.js-slider-next').addEventListener('click', () => {
            clearInterval(mainSliderTimer);
            mainSliderTimer = setInterval(() => getActiveSliderPage() == getMaxSliderPage() ? showSliderPage() : showSliderPage(getActiveSliderPage() + 1), 5000);
            
            showSliderPage(getActiveSliderPage() + 1);
        });
    }
});