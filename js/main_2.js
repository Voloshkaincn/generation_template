
/** РР·РѕР»СЏС†РёСЏ */
var mobile=(/iphone|iemobile|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));


$(document).ready(function(){

    var swiper_container_double = new Swiper('.swiper-container_double', {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 0,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: true
        // },
        loop: true,
        nav: true,
        navigation: {
            nextEl: '.slider-changer__slider-nav .slider-nav__button_next',
            prevEl: '.slider-changer__slider-nav .slider-nav__button_prev',
        },
        on: {
            slideChangeTransitionStart: function () {

                var classtitle = $('.swiper-container_double .swiper-slide.swiper-slide-active').attr('data-slider-block');

                $('.slider-changer').removeClass('active');
                $('.slider-changer[data-slider-block="' + classtitle + '"]').addClass('active');

            }
        },
        breakpoints: {
            769: {
                slidesPerView: 'auto'
            }
        }
    });



    // Instagram blocks

    function instHeights() {
        var instBlock = $('.inst-gall__item'),
            instBlockW = instBlock.width();
        instBlock.css('height', + instBlockW + 'px');
    }
    $(window).resize(function() {
        instHeights();
    });
    instHeights();




	
	



























});




