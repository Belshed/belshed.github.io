$(document).ready(function(event){

    let orderSwiper;
    let orderSwiperQ = document.querySelector('.section__actions');
    let benefitsSwiper;
    let benefitsSwiperQ = document.querySelector('#benefitsSlider');
    let programsSwiper;
    let programsSwiperQ = document.querySelector('.section__programs');
    let cardSwiper;
    let cardSwiperQ = document.querySelector('.show-slider');

    let show__bg = new Rellax('.show__bg', {
        speed: -1,
        center: true,
    });

    let animators_1 = new Rellax('.animators-item1', {
        speed: -1,
        center: true,
    });

    let animators_2 = new Rellax('.animators-item2', {
        speed: -3,
        center: true,
    });

    let section_8 = new Rellax('.section__item8', {
        speed: -0.3,
        center: true,
    });

    let section_9 = new Rellax('.section__item9', {
        speed: -0.35,
        center: true,
    });

    let programs__1 = new Rellax('.programs__item1', {
        speed: -1,
        center: true,
    });

    let programs__2 = new Rellax('.programs__item2', {
        speed: -1.35,
        center: true,
    });

    let review__1 = new Rellax('.review__1', {
        speed: -1,
        center: true,
    });

    let review__2 = new Rellax('.review__2', {
        speed: -2.35,
        center: true,
    });

    let about__5 = new Rellax('.about__item5', {
        speed: -1.7,
        center: true,
    });

    let dlcSwiper = new Swiper ('.dlc__swiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.dlc__next',
            prevEl: '.dlc__prev',
        },
        
        breakpoints: {
            780: {
                slidesPerView: 5,
            },
            480: {
                slidesPerView: 3,
            },
            300: {
                slidesPerView: 1,
            }
        },
        
    });

    let reviewSwiper = new Swiper ('.review__swiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        speed:800,
        navigation: {
            nextEl: '.review__next',
            prevEl: '.review__prev',
        },
        slidesPerView: 1,
    });

    let repliesSwiper = new Swiper ('.replies__slider', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 50,
        speed:800,
        autoHeight: true,
        pagination: {
            el: '.replies__pagination',
          },
        navigation: {
            nextEl: '.replies__next',
            prevEl: '.replies__prev',
        },
        slidesPerView: 1,
    });

    let repliesVideoSwiper = new Swiper ('.replies__videos', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        speed:800,
        slidesPerView: 2,
        navigation: {
            nextEl: '.replies-video__next',
            prevEl: '.replies-video__prev',
        },
        breakpoints: {
            570: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
            }
        },
    });

    let actionsSwiper = new Swiper ('.section__slider', {
        direction: 'horizontal',
        spaceBetween: 20,
        speed:800,
        navigation: {
            nextEl: '.section__action-next',
            prevEl: '.section__action-prev',
        },
        breakpoints: {
            1135: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
            }
        },
    });

    let bigSwiper = new Swiper ('.big-slider', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 0,
        speed: 800,
        simulateTouch: false,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.big-next',
            prevEl: '.big-prev',
        },
        slidesPerView: 1,
    });

    let examplesSwiper = new Swiper ('.examples__slider', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        breakpoints: {
            570: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
            }
        },
        navigation: {
            nextEl: '.examples-next',
            prevEl: '.examples-prev',
        },
    });

    let popupSwiper = new Swiper ('.popup__bundle-slider', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        centeredSlides: true,
        breakpoints: {
            570: {
                slidesPerView: 3,
            },
            300: {
                slidesPerView: 1,
            }
        },
        navigation: {
            nextEl: '.popup__bundle-next',
            prevEl: '.popup__bundle-prev',
        },
    });

    let popupSwiperQ = document.querySelector('.popup__bundle-slider').swiper;

    $('.popup').fadeOut(0);

    function startCounter(hoursCountdown) {
        function counterPlaceNum(position, value) {
            let counterFields = document.querySelectorAll('.section__slide-count');
    
            let symbolPos = [position * 2, (position * 2) + 1];

            if (value.length < 2) {
                value = '0' + value[0];
            }

            counterFields[symbolPos[0]].innerHTML = value[0];
            counterFields[symbolPos[1]].innerHTML = value[1];
        }

        if(sessionStorage.getItem('lastSettedHours') != hoursCountdown){
            sessionStorage.clear();

            sessionStorage.setItem('lastSettedHours', hoursCountdown);
        }
    
        let secsInHour = 3600;
        let minsInHour = 60;
        let countdownSecs = sessionStorage.getItem('countdownSecs');

        if(countdownSecs == null){
            countdownSecs = hoursCountdown * secsInHour;
        }
        
        let hoursRem,
            minRem,
            secRem;
    
        let strHoursRem,
            strMinRem,
            strSecRem;
        
        let zeroStr = '00';

        let countdownTimer = setInterval(() => {
            if(--countdownSecs > 0){
    
                hoursRem = Math.trunc(countdownSecs / secsInHour);
                minRem = Math.trunc((countdownSecs - hoursRem * secsInHour) / minsInHour);
                secRem = countdownSecs - hoursRem * secsInHour - minRem * minsInHour;

                sessionStorage.setItem('countdownSecs', countdownSecs);
    
                strHoursRem = String(hoursRem);
                strMinRem = String(minRem);
                strSecRem = String(secRem);
    
                counterPlaceNum(0, strHoursRem);
                counterPlaceNum(1, strMinRem);
                counterPlaceNum(2, strSecRem);
            }
            else{
                counterPlaceNum(0, zeroStr);
                counterPlaceNum(1, zeroStr);
                counterPlaceNum(2, zeroStr);

                clearTimeout(countdownTimer);

                let button = document.querySelector('.button__inform');
                button.remove();
            }
        }, 1000);
    }

    function hideElems(){
        if(window.innerWidth <= 570){
            $('.section__personage').each(function(event){
                if($(this).index() > 5){
                    $(this).css('display', 'none');
                }
            });

            $('.section__gift').each(function(event){
                if($(this).index() > 2){
                    $(this).css('display', 'none');
                }
            });

            $('.section__card').each(function(event){
                if($(this).index() > 5){
                    $(this).css('display', 'none');
                }
            });
            
            $('.questions__form').each(function(event){
                let agreement,
                    submitBtn;
                agreement = $($(this).find('.questions__form-col').get(0)).find('p');
                submitBtn = $($(this).find('.questions__form-col').get(1)).find('.button');
                submitBtn.before(agreement);                
            });
        }
        else{
            $('.section__personage').each(function(event){
                if($(this).index() > 5){
                    $(this).removeAttr('style');
                }
            });

            $('.section__gift').each(function(event){
                if($(this).index() > 2){
                    $(this).removeAttr('style');
                }
            });

            $('.section__card').each(function(event){
                if($(this).index() > 5){
                    $(this).removeAttr('style');
                }
            });

            $('.questions__form').each(function(event){
                let agreement,
                    lastInput;
                agreement = $($(this).find('.questions__form-col').get(1)).find('p');
                lastInput = $($(this).find('.questions__form-col').get(0)).find('input').last();
                lastInput.after(agreement);                
            });
        }
    }

    function scrollHandler() {
        if($(window).outerWidth() < 1130){

            $('.header__mobile').css('padding-top', $('.header').outerHeight() + 10);

            if($(document).scrollTop() >= $('.header').outerHeight()){
                $('.header').toggleClass('fixed', true);
                $('.head__wrap').toggleClass('fixed', true);
                $('.header__logo-text').css('display', 'none');
            }
            else {
                $('.header').toggleClass('fixed', false);
                $('.head__wrap').toggleClass('fixed', false);
                $('.header__logo-text').removeAttr('style');
            }
        }
        else{
            $('.header').toggleClass('fixed', false);
            $('.head__wrap').toggleClass('fixed', false);
            $('.header__logo-text').removeAttr('style');
        }
    }

    function checkMenu(){
        if(window.innerWidth <= 1130){
            $('.header__mobile').append($('.header__nav'));
        }
        else{
            $('.header__menu').prepend($('.header__nav'));
            $('.header__mobile').toggleClass('active', false);
        }
    }

    function mobileOrderSwiper(){
        try{
            if(window.innerWidth <= 720 && orderSwiperQ.dataset.mobile == 'false'){
                orderSwiper = new Swiper ('.section__actions', {
                    grabCursor:true,
                    spaceBetween: 20,
                    updateOnWindowResize: true,
                    breakpoints: {
                        780: {
                            slidesPerView: 3,
                        },
                        450: {
                            slidesPerView: 2,
                        },
                        300: {
                            slidesPerView: 1,
                        }
                    },
                })
    
                orderSwiperQ.dataset.mobile = 'true';
            }
    
            if(window.innerWidth > 720){
                orderSwiperQ.dataset.mobile = 'false';
    
                if(orderSwiperQ.classList.contains('swiper-container-initialized')){
                    orderSwiper.destroy();
                    delete orderSwiper;
                }
            }
        }
        catch(e){}
    }

    function mobileBenefitsSwiper(){
        try{
            if(window.innerWidth <= 720 && benefitsSwiperQ.dataset.mobile == 'false'){
                benefitsSwiper = new Swiper ('#benefitsSlider', {
                    grabCursor:true,
                    spaceBetween: 20,
                    updateOnWindowResize: true,
                    loop: true,
                    navigation: {
                        nextEl: '.section__benefit-next',
                        prevEl: '.section__benefit-prev',
                    },
                    breakpoints: {
                        780: {
                            slidesPerView: 3,
                        },
                        400: {
                            slidesPerView: 2,
                        },
                        300: {
                            slidesPerView: 1,
                        }
                    },
                })
    
                benefitsSwiperQ.dataset.mobile = 'true';
            }
    
            if(window.innerWidth > 720){
                benefitsSwiperQ.dataset.mobile = 'false';
    
                if(benefitsSwiperQ.classList.contains('swiper-container-initialized')){
                    benefitsSwiper.destroy();
                    delete benefitsSwiper;
                }
            }
        }
        catch(e){}
    }

    function mobileProgramsSwiper(){
        try{
            if(window.innerWidth <= 710 && programsSwiperQ.dataset.mobile == 'false'){
                programsSwiper = new Swiper ('.section__programs', {
                    grabCursor:true,
                    spaceBetween: 20,
                    updateOnWindowResize: true,
                    navigation: {
                        nextEl: '.section__program-next',
                        prevEl: '.section__program-prev',
                    },
                    breakpoints: {
                        780: {
                            slidesPerView: 3,
                        },
                        300: {
                            slidesPerView: 1,
                        }
                    },
                })
    
                programsSwiperQ.dataset.mobile = 'true';
            }
    
            if(window.innerWidth > 720){
                programsSwiperQ.dataset.mobile = 'false';
    
                if(programsSwiperQ.classList.contains('swiper-container-initialized')){
                    programsSwiper.destroy();
                    delete programsSwiper;
                }
            }
        }
        catch(e){}
    }

    function cardsSwiper(){
        try{
            if(window.innerWidth <= 720 && cardSwiperQ.dataset.mobile == 'false'){
                cardSwiper = new Swiper ('.show-slider', {
                    grabCursor:true,
                    spaceBetween: 30,
                    updateOnWindowResize: true,
                    navigation: {
                        nextEl: '.section__show-next',
                        prevEl: '.section__show-prev',
                    },
                    breakpoints: {
                        1100: {
                            slidesPerView: 4,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                        300: {
                            slidesPerView: 1,
                        }
                    },
                })
    
               cardSwiperQ.dataset.mobile = 'true';
            }
    
            if(window.innerWidth > 720){
                cardSwiperQ.dataset.mobile = 'false';
    
                if(cardSwiperQ.classList.contains('swiper-container-initialized')){
                    cardSwiper.destroy();
                    delete cardSwiper;
                }
            }
        }
        catch(e){}
    }

    function checkTabs(){
        try{
            if(window.innerWidth <= 960){
                $('.tab__item-top').each(function(event){
                    $(this).append($(this).siblings('.tab__item-title'));
                });
            }
            else{
                $('.tab__item-top').each(function(event){
                    $(this).after($(this).children('.tab__item-title'));
                });
            }

            if(window.innerWidth <= 720){
                //$('.tab__item').prepend('.tab__item-title');
                $('.tab__item').each(function(event){
                    
                    $(this).children('.tab__item-top').wrap('<div class="tab__item-mobile"></div>')
                    $(this).children('.tab__item-mobile').append($(this).children($('.tab__item-list, .tab__item-price')));
                    $(this).find('.tab__item-top').append($(this).find($('.tab__item-price')));
                    
                    $(this).prepend($($(this).find('.tab__item-title')));

                    $(this).children(".tab__item-mobile").hide().prev().click(function() {
                        $(this).parents(".tab__item").find(".tab__item-mobile").not(this).slideUp().prev().removeClass("active");
                        $(this).parents(".tab__item").find(".tab__item-mobile").not(":visible").slideDown().prev().addClass("active");
                    });
                    if($(this).index() == 0){
                        $(this).children(".tab__item-mobile").show();
                        $(this).children(".tab__item-title").toggleClass('active', true);
                    }
                });
                
            }
            else{
                
                $('.tab__item').each(function(event){
                    $(this).children(".tab__item-mobile").show();
                    $(this).prepend($(this).find('.tab__item-top'));
                    $(this).append($(this).find('.tab__item-list'));
                    $(this).append($(this).find('.tab__item-price'));
                    $(this).find('.tab__item-mobile').remove();
                });
            }
        }
        catch(e){           
        }
    }

    function checkFormats(){
        try {
            if((window.innerWidth <= 1010) && (window.innerWidth > 570)){
                $('.format__programs').append($('.format__item.active .format__item-head'));
            }
            else{
                $('.format__item.active').prepend($('.format__programs .format__item-head'));
            }
        }
        catch(e){}
    }
    
    function checkBurger(){
        if(window.innerWidth <= 1130 && window.innerWidth > 570){
            $('.header__logo').append($('.header__burger'));
            $('.header__burger, .header__logo').toggleClass('inLogo', true);
        }
        else {
            $('.header__wrap').prepend($('.header__burger'));
            $('.header__burger, .header__logo').toggleClass('inLogo', false);
        }
    }

    function checkInner(){
        try {
            if(window.innerWidth <= 1010){
                $('.item__description').prepend($('form.item__form'));
            }
            else{
                $('.item__content').append($('form.item__form'));
            }

            if(window.innerWidth <= 660){
                $('.item__head').prepend($('.item__name'));
            }
            else{
                $('.item__content').prepend($('.item__name'));
            }
        }
        catch(e){}
    }

    $('.header__burger').on('click', function(event){
        event.preventDefault();

        $(this).toggleClass('active');
        $('.header__mobile').toggleClass('active');
    });

    $('.popup__close').on('click', function(event){
        event.preventDefault();

        $('.popup__wrap, .popup__thx, .popup__violet, .popup__yellow').fadeOut('ease-in');
    });

    $('.open__thx').on('click', function(event){
        event.preventDefault();

        $('.popup__wrap').fadeIn(function(event){
            $(this).css('display', 'flex');
            $(this).css('opacity', '1');
        });

        $('.popup__thx').fadeIn(function(event){
            $(this).css('display', 'flex');
            $(this).css('opacity', '1');
        });
    });

    $('.open__popup').on('click', function(event){
        event.preventDefault();

        $('.popup__bundle').fadeIn(function(event){
            $(this).css('display', 'flex');
            $(this).css('opacity', '1');
        });

        $('.popup__bundle-body').fadeIn(function(event){
            $(this).css('display', 'flex');
            $(this).css('opacity', '1');
        });
    });

    $('.popup__bundle').on('click', (event) => {
        $('.popup__bundle').fadeOut();
        $('.popup__bundle-body').fadeOut();
    });

    $('.open__yellow').on('click', function(event){
        event.preventDefault();

        $('.popup__wrap').fadeIn(function(event){
            $(this).css('display', 'flex');
            $(this).css('opacity', '1');
        });

        $('.popup__yellow').fadeIn(function(event){
            $(this).css('display', 'flex');
            $(this).css('opacity', '1');
        });
    });

    $('.open__violet').on('click', function(event){
        event.preventDefault();

        $('.popup__wrap').fadeIn(function(event){
            $(this).css('display', 'flex');
            $(this).css('opacity', '1');
        });

        $('.popup__violet').fadeIn(function(event){
            $(this).css('display', 'flex');
            $(this).css('opacity', '1');
        });
    });

    $('.tabs__nav-link').on('click', function(event){
        event.preventDefault();
        $('.tabs__nav-link').each(function(event){
            $(this).toggleClass('active', false);
        });
        $('.tab').each(function(event){
            $(this).toggleClass('active', false);
        });
        
        $(this).toggleClass('active');
        
        let tabIndex = $(this).data('tab') - 1;
        $('.tab').each(function(event){
            if($(this).index() == tabIndex){
                $(this).toggleClass('active');
            }
        });
    });

    $('.format__programs-link').on('click', function(event){
        event.preventDefault();
        $('.format__programs-link').each(function(event){
            $(this).toggleClass('active', false);
        });
        $('.format__item').each(function(event){
            $(this).toggleClass('active', false);
        });
        
        $(this).toggleClass('active');
        
        let tabIndex = $(this).data('tab') - 1;

        $('.format__item').each(function(event){
            if($(this).index() == tabIndex){
                $(this).toggleClass('active');
            }
        });
        
        $($('.format__item').get($('.format__programs .format__item-head').data('tab') - 1)).prepend($('.format__programs .format__item-head'));
        
        if((window.innerWidth <= 1010) && (window.innerWidth > 570)){
            $('.format__programs').append($('.format__item.active .format__item-head'));
        }
        else{
            $('.format__item.active').prepend($('.format__programs .format__item-head'));
        }

    });

    $('.tabs__nav-link').each(function(event){
        if($(this).hasClass('active')){
            let tabIndex = $(this).data('tab') - 1;
            $('.tab').each(function(event){
                if($(this).index() == tabIndex){
                    $(this).toggleClass('active');
                }
            });
        }
    });

    $('.format__programs-link').each(function(event){
        if($(this).hasClass('active')){
            let tabIndex = $(this).data('tab') - 1;
            $('.format__item').each(function(event){
                if($(this).index() == tabIndex){
                    $(this).toggleClass('active');
                }
            });
        }
    });

    $(document).scroll(function () {
        scrollHandler();
    });

    $(window).resize(function(event){
        mobileBenefitsSwiper();
        mobileProgramsSwiper();
        mobileOrderSwiper();
        scrollHandler();
        checkFormats();
        cardsSwiper();
        checkBurger();
        checkInner();
        hideElems();
        checkMenu();
        checkTabs();

        try{
            popupSwiperQ.update();
        }
        catch(e){
            console.log(e);
        }
    });
    
    mobileBenefitsSwiper();
    mobileProgramsSwiper();
    mobileOrderSwiper();
    scrollHandler();
    checkFormats();
    cardsSwiper();
    checkInner();
    hideElems();
    checkMenu();
    checkTabs();
    
    try{
        popupSwiperQ.update();
        startCounter(12);
    }
    catch(e){
        console.log(e);
    }
}); 