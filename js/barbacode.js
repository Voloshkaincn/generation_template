


$( document ).ready(function() {
    var FadeTransition = Barba.BaseTransition.extend({
        start: function() {

            AOS.init({
                once: true,
                disable: 'tablet',
                disable: 'phone',
                disable: 'mobile'
            });


             //onload();


	
	
	//INSTAGRAM
    (function (container) {
        if (!container.length) {
            return;
        }

        var accessToken = $.trim(container.data('access-token'));
        if (accessToken === '') {
            return;
        }
		
		var limit = 4;
		
		if( $(window).outerWidth() < 768 ){
			
			limit = 20;
		}

    
    
        var feed = new Instafeed({
            get: 'user',
            userId: container.data('user-id'),
            accessToken: accessToken,
            target: 'instagram_blk',
            limit: limit,
            resolution: 'standard_resolution',
           
            template: '<a href="{{link}}" class="inst-gall__item" target="_blank" rel="nofollow"><div class="inst-gall-item"><div class="inst-gall-item__img"><img src="{{image}}" alt="Generation Family Dentist instagram"></div><div class="inst-gall-item__ico"></div></div></a>',
            after: function () {
				
				//console.log('12341234');
					
					if( $(window).outerWidth() < 768 ){
										
						// instagram_slider

						$('.inst-gall__item').wrap("<div class='swiper-slide'></div>");
						$('.inst-gall .swiper-slide').wrapAll("<div class='swiper-wrapper'></div>");
						$('.inst-gall').addClass('swiper-container');
						
						
						var inst_slider_ = new Swiper('.inst-gall', {
							//effect: 'fade',
							slidesPerView: 2,
							spaceBetween: 10,
							loop: true,
							nav: true,
							centeredSlides:true,
				
						});
						
						
					}
					
	
		
		
		

            }
        });

        feed.run();
    })($('#instagram_blk'));


            Promise
                .all([this.newContainerLoading, this.fadeOut()])
                .then(this.fadeIn.bind(this));



                   // $(".burger").trigger('click');


        },

        fadeOut: function() {

            return $(this.oldContainer).animate({
                opacity: 0
            }).promise();

        },

        fadeIn: function() {

            var _this = this;
            var $el = $(this.newContainer);

            $(this.oldContainer).hide();

            $el.css({
                visibility : 'visible',
                opacity : 0
            });

            $el.animate({ opacity: 1 }, 2000, function() {


                _this.done();
            });

            onload();
			
			
			if( $('.image_crop_wrapper').length >0 ){
					
				$('.image_crop_wrapper .morph_images').attr('data-aos-delay', '3100');
				$('.video-info .slider-changer__title .crop_text_wrap_text').attr('data-aos-delay', '3200');
				$('.video-info .slider-changer__title .sub-title').attr('data-aos-delay', '3300');
				$('.video-info .slider-changer__text').attr('data-aos-delay', '3500');
			}
			
            AOS.refreshHard();

        }
    });

    function InputColor(){
        $('input, textarea')
        .mouseenter(function() {
            $(this).parent().addClass('val');
        })
        .mouseleave(function() {
            input = $(this).val();
            if(input == '') {
                $(this).parent().removeClass('val');
            } else {
                $(this).parent().addClass('val');
            }
        })
        .focus(function() {
            $(this).parent().addClass('val');
        })
        .blur(function() {
            $(this).parent().addClass('val');
        })
        .keypress(function(){
            $(this).parent().addClass('val');
        })
        .change(function(){
            input = $(this).val();
            if(input == '') {
                $(this).parent().removeClass('val');
            } else {
                $(this).parent().addClass('val');
            }
        });
    }

    function Validation(){
        $("#FeedbackForm").validate({
            // errorClass: "error",
            errorPlacement: function(error, element) {
                $('.input-wrap').addClass('error').addClass('val');
            },
            rules: {
                name: {
                  required: true,
                },
                contacts: {
                  required: true,
                }
            },
        });
    }

    Barba.Pjax.getTransition = function() {
        return FadeTransition;
    };

    var index = Barba.BaseView.extend({
        namespace: 'index',

        onEnter: function() {


        },
        onEnterCompleted: function() {


            InputColor();
            Validation();


        },
        onLeave: function() {
        },
        onLeaveCompleted: function() {


        }
    });


    var contacts = Barba.BaseView.extend({
        namespace: 'contacts',

        onEnter: function() {


        },
        onEnterCompleted: function() {
       
       //     $('head').append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC-Wv_-QC0MIogO2EKnRsPo8J30v51zDN8&callback=initMap" async="" defer="" id="wewe"></script>');
        },
        onLeave: function() {
            $('script[src^="https://maps.googleapis.com"]').remove();

        },
        onLeaveCompleted: function() {


        }
    });

    var job = Barba.BaseView.extend({
        namespace: 'job',

        onEnter: function() {


        },
        onEnterCompleted: function() {

        },
        onLeave: function() {


        },
        onLeaveCompleted: function() {


        }
    });

    var time_g = Barba.BaseView.extend({
        namespace: 'time_g',

        onEnter: function() {


        },
        onEnterCompleted: function() {

        },
        onLeave: function() {


        },
        onLeaveCompleted: function() {


        }
    });
    var g_family = Barba.BaseView.extend({
        namespace: 'g_family',

        onEnter: function() {


        },
        onEnterCompleted: function() {

        },
        onLeave: function() {


        },
        onLeaveCompleted: function() {


        }
    });
	
	
	 var documents = Barba.BaseView.extend({
        namespace: 'documents',

        onEnter: function() {
			

        },
        onEnterCompleted: function() {
			setTimeout(function(){
				$('.docs-cont').removeClass('hidden');
				
			},2300)
        },
        onLeave: function() {


        },
        onLeaveCompleted: function() {


        }
    });
	 var team = Barba.BaseView.extend({
        namespace: 'team',

        onEnter: function() {
			

        },
        onEnterCompleted: function() {
			setTimeout(function(){
				$('.team_container').removeClass('hidden');
				
			},2300)
        },
        onLeave: function() {


        },
        onLeaveCompleted: function() {


        }
    });
	


    Barba.Dispatcher.on('initStateChange', function(currentStatus, oldStatus, container) {
		
		
		var splash_scr = '<div class="preloader"><div class="preloader__item preloader__item_white"></div><div class="preloader__item preloader__item_lightblue"></div><div class="preloader__item preloader__item_blue"></div></div>'
		

		$('.preloader').remove();
		$('body').prepend(splash_scr).addClass('noscroll');	
		
		setTimeout(function(){
			$('.preloader').addClass('hide_me');
			$('body').removeClass('noscroll');
			
		},2500);
		
		setTimeout(function(){
			$('body, html').scrollTop(0);
			$('.footer__inner').addClass('hide_me');
		},1000);
		
		setTimeout(function(){
			$('.footer__inner').removeClass('hide_me');
		},4000);
		
		
		
		

        $('.menu-burger').removeClass("menu-burger_on");
        $('.menupanel').removeClass("open");

        //setTimeout(function() {
        //    $('body,html').animate({scrollTop: 0}, 400);
        //}, 1000);

        $('.menu__proj').addClass('hiddenonpage');

        $('script[src^="https://maps.googleapis.com"]').remove();

        $('.menu__back').addClass("hidden");

    });
    Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container) {

        var height = $('.bottom-containers').height(),
            marginCont = $('.containers-wrap');
        marginCont.css('margin-bottom', height);
		
	if( window.mobileAndTabletcheck()  ){
		//$('body').addClass('mob_or_tablet');
		//$('[data-aos]').removeAttr( "data-aos" );
	}
	
	
	setTimeout(function(){$('.first_enter_mask').addClass('hide');},1700);
		
		
		
		$('.slider-changer__title').trigger('click')
		
	// PLYR
	
	



	
	if( $('#player-1').length > 0 ){
		const player1 = new Plyr('#player-1');
		window.player1 = player1;
	
		player1.volume = 0;
	
		$(document).on('click', '.video-videoplay', function (e) {
			$(this).addClass('away');
			player1.volume = 1;
		});
		
		$('.slider-changer__title').trigger('click');
	
		setTimeout(function() {
			
			
			var thePromise = player1.play();
			
			//console.log(thePromise);
			
			

			if (thePromise != undefined) {
		
				thePromise.then(function(_) {
		
					player1.pause();
					player1.currentTime = 0;
		
				});
		
			}
	
	
	
			//player1.play();
		}, 1000);
		
		
		setTimeout(function() {
			player1.pause();
			player1.play();
		}, 4000);
		
		
		setTimeout(function() {
			player1.pause();
			player1.play();
		}, 6000);
		
	}


	if( $('#player-2').length > 0 ){
		const player2 = new Plyr('#player-2');
		window.player2 = player2;
	
		player2.volume = 0;
	
		$(document).on('click', '.video_wrap_ii .video-videoplay', function (e) {
			$(this).addClass('away');
			player2.volume = 1;
		});
	
		setTimeout(function() {
			player2.play();
		}, 1000);
		
	}
	

	if( $('.service_boxxxx svg').length > 0 ){
		
		var w = $('.service_image_box').outerWidth() + 60;
		var h = $('.service_image_box').outerHeight() + 60;
		
		
		setTimeout(function() {

			$('.service_boxxxx svg').css('display','block')
			$('.service_boxxxx svg').addClass('go')
		
		
		
		}, 4000);
	
		
		$('.column-box_col2.service_boxxxx svg').css({
			'width':w,
			'height': h
		})
	}

	
	
	if( $(window).outerWidth() < 1024 ){
	    
	    $('.pp_doc_fullname_n br').after('<span class="spacer"></span>');
	}
	
	
			
	
	//INSTAGRAM
    (function (container) {
        if (!container.length) {
            return;
        }

        var accessToken = $.trim(container.data('access-token'));
        if (accessToken === '') {
            return;
        }

    
		var limit = 4;
		
		if( $(window).outerWidth() < 768 ){
			
			limit = 20;
		}
    
        var feed = new Instafeed({
            get: 'user',
            userId: container.data('user-id'),
            accessToken: accessToken,
            target: 'instagram_blk',
            limit: limit,
            resolution: 'standard_resolution',
           
            template: '<a href="{{link}}" class="inst-gall__item" target="_blank" rel="nofollow"><div class="inst-gall-item"><div class="inst-gall-item__img"><img src="{{image}}" alt="Generation Family Dentist instagram"></div><div class="inst-gall-item__ico"></div></div></a>',
            after: function () {
				
				//console.log('12341234');
					
					if( $(window).outerWidth() < 768 ){
										
						// instagram_slider

						$('.inst-gall__item').wrap("<div class='swiper-slide'></div>");
						$('.inst-gall .swiper-slide').wrapAll("<div class='swiper-wrapper'></div>");
						$('.inst-gall').addClass('swiper-container');
						
						
						var inst_slider_ = new Swiper('.inst-gall', {
							//effect: 'fade',
							slidesPerView: 2,
							spaceBetween: 10,
							loop: true,
							nav: true,
							centeredSlides:true,
				
						});
						
						
					}
					
	
		
		
		

            }
        });

        feed.run();
    })($('#instagram_blk'));
	
	
	

    });



    contacts.init();
    time_g.init();
    g_family.init();
    job.init();
    index.init();
	documents.init();
	team.init();

    Barba.Pjax.start();
    Barba.Pjax.cacheEnabled = false;
    Barba.Pjax.ignoreClassLink = 'ignore';

});