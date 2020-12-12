document.addEventListener('DOMContentLoaded', () => {
    const languageSelets = document.querySelectorAll('.js-language');
    const servicesBtn = document.querySelector('.js-services-btn');
    const scrollLinks = document.querySelectorAll('.js-scroll-link');

    const houseTypeInputs = document.querySelectorAll('.js-house-type-input');

    const calcForm = document.querySelector('.js-calc-form');

    const burger = document.querySelector('.js-burger');

    const whichPage = () => {
        return document.querySelector('.js-page-id').dataset.page;
    }

    const createOptionPopupItem = (option, index) => {
        let languagePopupItem = document.createElement('li');
        languagePopupItem.classList.add('language__value');
        languagePopupItem.setAttribute('tabindex', 0);

        languagePopupItem.innerText = option.innerText;
        languagePopupItem.dataset.index = index;

        return languagePopupItem;
    }

    const toggleServicesMenu = () => {
        event.stopImmediatePropagation();
        servicesBtn.classList.toggle('active');

        document.addEventListener('click', () => {   
            if(servicesBtn.classList.contains('active')){
                servicesBtn.classList.remove('active');
            }
        });
    }

    const calcFormCount = () => {
        event.preventDefault();

        const var_meterPrice = 1000;

        let formData = new FormData(calcForm);

        document.querySelector('.js-calc-btn').classList.add('animate');

        let totalPrice;

        if(formData.get('house_type') == 1){
            let var_a = parseFloat(formData.get('house_a')) || 0;
            let var_b = parseFloat(formData.get('house_b')) || 0;
            let var_h1 = parseFloat(formData.get('house_h1')) || 0;
            let var_h2 = parseFloat(formData.get('house_h2')) || 0;
            totalPrice = var_a * var_b * (var_h1 + var_h2) * 0.5 * var_meterPrice;
        }
        else if(formData.get('house_type') == 2){
            let var_a = parseFloat(formData.get('house_a-1')) || 0;
            let var_b = parseFloat(formData.get('house_b-1')) || 0;
            let var_h = parseFloat(formData.get('house_h')) || 0;

            totalPrice = var_a * var_b * var_h * var_meterPrice;
        }

        setTimeout(() => {
            calcForm.reset();
            document.querySelector('.js-calc-btn').classList.remove('animate');
            if(totalPrice){
                document.querySelector('.js-calc-price').innerHTML = totalPrice + ' грн';
            }
        }, 1550);
    }

    const scrollLinkClick = () => {
        event.preventDefault();

        const targetLink = event.target;
    
        toggleMenu(false);
        let href;
        let offset = -100;
        
        href = targetLink.getAttribute('href');
        
        window.scrollTo({
            top: document.querySelector(href).offsetTop + offset,
            behavior: 'smooth'
        });
    }

    const toggleMenu = (state = null) => {
        if(state == null){
            return () => {
                burger.classList.toggle('active');
            };
        }
        else{

        }
    }

    const languageSelectInit = languageItems => {
        languageItems.forEach(item => {
            const options = item.querySelectorAll('option');
            options[0].selected = true;
            
            let languageTrigger = document.createElement('button');
            languageTrigger.classList.add('button', 'language__trigger', 'js-language-select');
            languageTrigger.setAttribute('type', 'button');
            
            let languageText = document.createElement('span');
            languageText.classList.add('language__trigger-text');
            languageText.innerText = options[0].innerText;

            let languagePopupList = document.createElement('ul');
            languagePopupList.classList.add('language__list');

            options.forEach((option, index) => {
                if(option.value != 'none'){
                    let languagePopupItem = createOptionPopupItem(option, index);
                    languagePopupList.appendChild(languagePopupItem);

                    languagePopupItem.addEventListener('click', () => {
                        let targetItem = event.target;
                        event.stopImmediatePropagation();
            
                        while(!targetItem.classList.contains('language__value')){
                            targetItem.parentNode;
                        }
                        targetItemIndex = parseInt(targetItem.dataset.index);
            
                        options[targetItemIndex].selected = true;
            
                        options.forEach(option => {
                            if(option.selected) languageText.innerText = option.innerText;
                        });
                        languagePopupList.classList.remove('active');
                        languageTrigger.classList.remove('active');
                    });
                }
            });

            languageTrigger.appendChild(languageText);

            item.appendChild(languageTrigger);
            item.appendChild(languagePopupList);

            languageTrigger.addEventListener('click', () => {
                event.stopImmediatePropagation();
                let target = event.target;

                while(!target.classList.contains('js-language-select')){
                    target = target.parentNode;
                }

                target.classList.toggle('active');
                languagePopupList.classList.toggle('active');

                document.addEventListener('click', () => {
                    event.stopImmediatePropagation();
                    let target = event.target;
                    if(!target.parentNode.classList.contains('js-language-select') && !target.classList.contains('js-language-select')){
                        document.querySelectorAll('.language__list').forEach(item => item.classList.remove('active'));
                        document.querySelectorAll('.js-language-select').forEach(item => item.classList.remove('active'));
                    }
                }, {onse: true});
            });

            item.querySelector('select').addEventListener('change', () => {
                let targetOption = event.target;

                options.forEach(option => {
                    if(option.selected) languageText.innerText = option.innerText;
                });
            });
        });
    }

    const indexSwiperInit = () => {
        let indexSwiper = new Swiper('.index-portfolio__slider', {
            
            spaceBetween: 30,
            loop: true,
            preloadImages: false,
            navigation: {
                prevEl: '.index-portfolio__control_prev',
                nextEl: '.index-portfolio__control_next',
            },
            lazy: {
                loadPrevNext: true,
                loadOnTransitionStart: true,
            },
            breakpoints: {
                1250: {
                    slidesPerView: 4,
                },
                900: {
                    slidesPerView: 3,
                },
                600: {
                    slidesPerView: 2,
                },
                300: {
                    slidesPerView: 1,
                },
            }
        });
    }

    const houseTypeInputChange = () => {
        if(event.target.value){
            document.querySelectorAll('.calc__type-item').forEach(item => item.classList.remove('active'));

            event.target.parentNode.parentNode.classList.add('active');

            document.querySelectorAll('.js-house-type').forEach(item => item.classList.remove('active'));
            document.querySelectorAll('.js-house-type')[parseInt(event.target.value) - 1].classList.add('active');
        }
    }

    const scrollHandler = () => {
        window.pageYOffset > 60 ? document.querySelector('.header').classList.add('fixed') : document.querySelector('.header').classList.remove('fixed');
    }

    const resizeHandler = () => {
        if(whichPage() == 'main'){
            if(window.innerWidth <= 1360){
                document.querySelectorAll('.footer .footer__col .button').forEach(btn => {
                    document.querySelector('.footer .footer__col').insertBefore(btn, document.querySelector('.footer .footer__col .footer__social'));
                });
            }
            else{
                document.querySelectorAll('.footer .footer__col .button').forEach(btn => {
                    document.querySelectorAll('.footer .footer__col')[document.querySelectorAll('.footer .footer__col').length - 1].appendChild(btn);
                });
            }

            if(window.innerWidth <= 1080){
                document.querySelector('.js-transit-parent').appendChild(document.querySelector('.js-transit-child'));
            }
            else{
                document.querySelector('.footer__wrap').insertBefore(document.querySelector('.js-transit-child'), document.querySelector('.js-transit-sibling'));
            }
        }
    }

    scrollLinks.forEach(link => link.addEventListener('click', scrollLinkClick));
    houseTypeInputs.forEach(input => input.addEventListener('change', houseTypeInputChange));

    servicesBtn.addEventListener('click', toggleServicesMenu);
    burger.addEventListener('click', toggleMenu());

    languageSelectInit(languageSelets);

    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);

    scrollHandler();
    resizeHandler();

    if(whichPage() == 'main'){
        indexSwiperInit();

        calcForm.addEventListener('submit', calcFormCount);
    }
});