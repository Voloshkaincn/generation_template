
/** РР·РѕР»СЏС†РёСЏ */
var mobile=(/iphone|iemobile|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));


window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function anchor(el){
	
	var id = el.getAttribute('data-anchor');
	var anchor = document.querySelector(id);
	var top = anchor.getBoundingClientRect().top + window.pageYOffset
	window.scrollTo({
	  top, // scroll so that the element is at the top of the view
	  behavior: 'smooth' // smooth scroll
	})
}


//(function() {
//  var follower, init, mouseX, mouseY, positionElement, printout, timer;
//
//  follower = document.getElementById('follower');
//
//  printout = document.getElementById('printout');
//
//  mouseX = (event) => {
//    return event.clientX;
//  };
//
//  mouseY = (event) => {
//    return event.clientY;
//  };
//
//  positionElement = (event) => {
//    var mouse;
//    mouse = {
//      x: mouseX(event),
//      y: mouseY(event)
//    };
//    follower.style.top = mouse.y + 'px';
//    return follower.style.left = mouse.x + 'px';
//  };
//
//  timer = false;
//
//  window.onmousemove = init = (event) => {
//    var _event;
//    _event = event;
//    return timer = setTimeout(() => {
//      return positionElement(_event);
//    }, 1);
//  };
//
//}).call(this);

var linegeight = 10822;
var constCircleOffsetTop = 43;
var screens =  Math.round( $(document).height() / $(window).height() );
//console.log( "screens : " + screens );
var scrollpage = 1;
var scrollDown = 0;
var scrollUp = 0;
var lastScrollTop = 0;
var winScrollHeight = ($(window).height() / 1.2);
var winSDowncrollHeight = ($(window).height() / 1.2);
var vheight = $(window).height();
var i = 1;
var j = 1;
var circleTopOffset = constCircleOffsetTop;
var circleUpTopOffset = constCircleOffsetTop;
var scrollUpOnce = false;

function onload()
{
	
	
if( $('#player-1').length > 0 ){
	    var element = document.getElementById('player-1');
    element.muted = "muted";
	
}
if( $('#player-2').length > 0 ){
	    var element = document.getElementById('player-2');
    element.muted = "muted";
	
}

	
	
	
	
	//console.log("barbaload");
	$(".section_sircle").removeClass("active");
	//$(".logo").removeClass("animated");
	$(".backgrond_pattern").removeClass("start");
	
	
	if( window.mobileAndTabletcheck()  ){
		//$('body').addClass('mob_or_tablet');
		//$('[data-aos]').removeData( "data-aos" );
	}

	$(function(preloading) {
		setTimeout(function() {
			$('.container').fadeIn(500);
		}, 2000);
		//$('.preloader').show();
		//setTimeout(function() {
		//	$('.preloader').hide();
		//}, 2000);
	});

	setTimeout(() => {
		resizeBg();
		footermargin();
	}, 2100);

	setTimeout(() => {
		$(".logo").addClass("animated");
		//console.log('2345')
	}, 1900);

	setTimeout(function() {
		$(".backgrond_pattern").addClass("start");
	}, 4100);
	
	setTimeout(function() {
		$(".background_static").addClass("show_me");
	}, 5600);
	
	

	setTimeout(() => {
		$(".section_sircle").addClass("active");
	}, 4500);


	try
	{
		$('[data-fancybox]').fancybox({
			buttons : [
				'close'
			],

			loop : true,
			hash: false,
		});
	}

	catch(exception){}
	
	
    
    
    

	
	
	
	if( $(window).outerWidth() < 768 ){
		
		
		//mp slider mobile
		
		$('.container_page-cards .card_service').wrap("<div class='swiper-slide'></div>");
		$('.container_page-cards .card-list .swiper-slide').wrapAll("<div class='swiper-wrapper'></div>");
		
		$('.container_page-cards .card-list').addClass('swiper-container');
		
		
		
		
		var mp_services_slider = new Swiper('.container_page-cards .card-list', {
			//effect: 'fade',
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			nav: true,
			centeredSlides:true,

		});
		
		
		// tech_slider_mobile

		$('.tech_slider_images_item').wrap("<div class='swiper-slide'></div>");
		$('.tech_slider_images .swiper-slide').wrapAll("<div class='swiper-wrapper'></div>");
		$('.tech_slider_images').addClass('swiper-container');
		
		
		var tech_slider_ = new Swiper('.tech_slider_images', {
			//effect: 'fade',
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			nav: true,
			centeredSlides:true,

		});
		
		
		
	}
	
	

	

	
	
	
	
}

//ONLOAD END

function navigationLineScroll() {
	if (scrollDown)
	{

		if (scrollUpOnce)
		{
			circleTopOffset = circleUpTopOffset;
			j = i;
		}



		if ( $(document).scrollTop() >= winScrollHeight )
		{
			if (linegeight>0 && linegeight >= (vheight * 1.15)) {
				linegeight -= (vheight * 1.15);
			}
			// console.log("Длина линии : " + linegeight);
			if (linegeight>0)
			{
				$(".background_line .cOxErpYu_0").css({ "stroke-dashoffset": linegeight });
			}


			if (i < screens)
			{
				i++;
				winScrollHeight += vheight;
				// console.log("scrollTop : " + $(document).scrollTop());
				// console.log("Высота экрана  для скролла вниз : " + winScrollHeight);

			}

			if ( j < screens )
			{
				j++;
				// console.log("j : " + j);
				circleTopOffset = (((j-1)*100)+constCircleOffsetTop);
				$(".section_sircle").css({
					"top": (circleTopOffset + "vh"),
					"-webkit-transition": "1s",
					"-o-transition": "1s",
					"transition": "1s"

				});
				// console.log("Смещение точки вниз : " + circleTopOffset);
			}
		}

		winSDowncrollHeight = winScrollHeight - (vheight);
		circleUpTopOffset = circleTopOffset;

	}

	else if ( scrollUp ) {

		// console.log("\n\nНа момент начала скролла : ");
		// console.log("scrollTop : " + $(document).scrollTop());
		// console.log("Высота экрана  для скролла вверх : " + winSDowncrollHeight);
		// console.log("Смещение точки вверх : " + circleUpTopOffset);


		if ( $(document).scrollTop() <= winSDowncrollHeight )
		{

			if (linegeight + (vheight * 1.15) <= 10822) {
				linegeight += (vheight * 1.15);
			}
			// console.log("Длина линии : " + linegeight);
			if (linegeight <= 10822)
			{
				$(".background_line .cOxErpYu_0").css({ "stroke-dashoffset": linegeight });
			}

			if (i > 1)
			{
				i--;
				// console.log("\n\ni : " + i);
				winScrollHeight -= vheight;
				// console.log("Высота экрана  для скролла вниз : " + winScrollHeight);

				if ( winSDowncrollHeight - (vheight) >= 0	)
				{ winSDowncrollHeight -= (vheight); }
				else { winSDowncrollHeight = 0; }
			}

			if ( j > 0 )
			{
				j--;
				// console.log("j : " + j);
				circleUpTopOffset = (((j-1)*100)+constCircleOffsetTop);
				if ( circleUpTopOffset < 43 )
				{
					circleUpTopOffset = constCircleOffsetTop;
				}
				$(".section_sircle").css({
					"top": (circleUpTopOffset + "vh"),
					"-webkit-transition": "1s",
					"-o-transition": "1s",
					"transition": "1s"

				});

			}

			// console.log("На момент конца скролла : ");
			// console.log("scrollTop : " + $(document).scrollTop());
			// console.log("Высота экрана  для скролла вверх : " + winSDowncrollHeight);
			// console.log("Смещение точки вверх : " + circleUpTopOffset);

		}
	}
}

function resizeBg() {
	let bgsvg = $(".backgrond_pattern");
	let bgwidth = bgsvg.width();
	$(".background_static").css("background-size", bgwidth );
	//console.log("bgwidth : " + bgwidth);
	//console.log("resizeBg");
}

function footermargin() {
	var foterheight = $(".footer__inner").height();
	$(".containers-wrap").css("margin-bottom", foterheight);
}

$(window).on('resize', function(){
	resizeBg();
	footermargin();
	
	
	if( $('.service_boxxxx svg').length > 0 ){
		var w = $('.service_image_box').outerWidth() + 60;
		var h = $('.service_image_box').outerHeight() + 60;
	
		$('.column-box_col2.service_boxxxx svg').css({
			'width':w,
			'height': h
		})
	}
	
	
	
});

$(window).scroll(function(event){
	var st = $(this).scrollTop();
	if (st > lastScrollTop){
		scrollUp = false;
		scrollDown = true;
	}
	else {
		scrollDown = false;
		scrollUp = true;
		scrollUpOnce = true;
	}
	lastScrollTop = st;
});






$(document).ready(function(){

	/*===== custom-select ========*/
	
	$(".custom-select").each(function() {
        var classes = $(this).attr("class"),
            id      = $(this).attr("id"),
            name    = $(this).attr("name");
        var template =  '<div class="' + classes + '">';
        var selectTriggerText = $(this).attr("placeholder")?$(this).attr("placeholder"):$(this).find('option:selected').text();
 
        template += '<span class="custom-select-trigger">' + selectTriggerText + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function() {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function() {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function() {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function(event) {
        $('html').one('click',function() {
            $(".custom-select").removeClass("opened");
        });
        $(".select-trigger").not($(this)).parents(".select").removeClass("opened");
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function() {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-select-wrapper").find("select").trigger('change');
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
        var taggUrl = $(this).attr('data-value')
        
        //$("#categorySelectBtn").attr('href','/blog?category='+taggUrl);
        //onclick="location.href='/blog?category=case_dent'"
        $("#categorySelectBtn").attr('onclick',"location.href='/blog?category="+taggUrl+ "'");
    });
    
   
    
    
    
    /*===== end custom-select ========*/

    $('.scheme:not(.scheme_open)').on('click', function(){
    	$(this).addClass('scheme_open');
    	$('.map').addClass('map_close');
    	$('.map_close').on('click', function(){
			$(this).removeClass('map_close');
    		$('.scheme_open').removeClass('scheme_open');
    	});
    });



    /*======== parallax zub =======*/
    $.fn.moveIt = function() {
	    var $window = $(window);
	    var instances = [];

	    $(this).each(function() {
	        instances.push(new moveItItem($(this)));
	    });

	    window.onscroll = function() {
	        var scrollTop = $window.scrollTop();
	        instances.forEach(function(inst) {
	            inst.update(scrollTop);
	        });
	    }
	}

	var moveItItem = function(el) {
	    this.el = $(el);
	    this.speed = parseInt(this.el.attr('data-scroll-speed'));
	};

	moveItItem.prototype.update = function(scrollTop) {
	    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed * -1) + 'px) rotate(' + -(scrollTop / this.speed / -10) + 'deg)');
	};

	// Initialization
	if($('[data-scroll-speed]')){
		$(function() {
		    $('[data-scroll-speed]').moveIt();
		});
	}
	/*========end parallax zub =======*/



	
	
	if( $(window).outerWidth() >768 ){
		$('.list_inside').mouseenter(function(){
		
			$(this).addClass('open')
			$(".menu__contacts").addClass("hide");
		
		
		});
		
	} else {
		$('.list_inside').click(function(){
			$(this).find('.list_inside__list').slideToggle();
			
		})
		
	}
	

	
	$('.menu__list_top-item').mouseenter(function(){
		
		if( !$(this).hasClass('list_inside') ){
			$('.menu__list_top-item').removeClass('open')
			$(".menu__contacts").removeClass("hide");
			
		}

		
		
	});
	$('.menu__list_bottom-item').mouseenter(function(){
			$('.menu__list_top-item').removeClass('open')
			$(".menu__contacts").removeClass("hide");

	});
	
	
	





$('.burger').mouseenter(function(){
	
	if( $(window).outerWidth() >=768 ){
			$('.menu').addClass('menu_hover');
			$('.burger').addClass('burger_hover');
	
	}
	

}).mouseleave(function(){
	if( $(window).outerWidth() >=768 ){
		$('.menu').removeClass('menu_hover');
		$('.burger').removeClass('burger_hover');
	
	}

	
})



	AOS.init({
		once: true,
	});

	onload();

	resizeBg();
	footermargin();
	// Р·Р°РїРѕР»РЅРµРЅРёРµ РёРЅРїСѓС‚Р°

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


	// popups

	$(document).on("click", ".pp_", function (e) {
		e.preventDefault();
		var el = $(this);
		var th_pp = el.attr('data-pp');
		$("html,body").addClass("noscroll");
		$('.pp').removeClass('show');
		$('.pp[data-pp="' + th_pp + '"]').addClass('show');
		$('.nav__inner').css('opacity','0');

	});

	$(document).on('click', ".pp__close, .pp__bg, .btn_cross, .close_btn, .pp__content_close", function () {
		if ( $(this).hasClass("closeagree") )
		{
			$('.pp[data-pp="agree"]').removeClass('show');
		}
		else{
			$('.pp').removeClass('show');
			$("html,body").removeClass("noscroll");
		}
		$('.nav__inner').css('opacity','1');

	});

	document.onkeydown = function(evt) {
		evt = evt || window.event;
		if (evt.keyCode == 27) {
			$('.pp').removeClass('show');
			$('html,body').css('overflow', 'initial');
		}
	};

	// $("a").click(function() {
	// 	if ( $(this).attr("href").indexOf("#") >= 0 ){
	// 		let elementClick = $(this).attr("href").slice($(this).attr("href").indexOf("#"));
	// 		let destination = $(elementClick).offset().top;
	// 		$('html,body').animate({
	// 			scrollTop: (destination - 90)
	// 		}, 1000);
	// 		return false;
	// 	}
	// 	else{}
	// });

	// popups end


	if ($(window).width() <= 1024) {}



	$.fn.scrollEnd = function(callback, timeout) {
		$(this).scroll(function(){
			var $this = $(this);
			if ($this.data('scrollTimeout')) {
				clearTimeout($this.data('scrollTimeout'));
			}
			$this.data('scrollTimeout', setTimeout(callback,timeout));
		});
	};

	$(window).scrollEnd(function(){
		navigationLineScroll();
	}, 100);


	// 	$(document).mouseover(function() {
	// 		$(this).mousemove(function(event) {
	// 				$('.cursor').css('left', (event.pageX)-17);
	// 				$('.cursor').css('top', (event.pageY)-17);
	// 		});
	// }).mouseout(function() {

	// });


	$(document).on('mousemove','.amb_card',function(e){
			
		var offset = $(this).offset();
		var x = e.pageX- offset.left - $(this).find('.amb').outerWidth() / 2;
		var y = e.pageY- offset.top - $(this).find('.amb').outerHeight() / 2;
	
		$(this).find('.amb').css({
		left:  x,
		top:   y
		});
		
		
	});


	$(document).on('click','.card_command',function(e){
		
		var th_id = $(this).attr('data-idx');
		
		
			
		if( $('#doc_player_'+th_id).length > 0 ){
			
			const player_doc = new Plyr('#doc_player_'+th_id);
			window.player_doc = player_doc;
		
			player_doc.volume = 0;
		
			$(document).on('click', '.video-videoplay', function (e) {
				$(this).addClass('away');
				player_doc.volume = 1;
			});
		
			setTimeout(function() {
				player_doc.play();
			}, 1000);
			
		}
		
		
		
	});

    
    
    
    
    $(document).on('click', '.js-slider-ch', function(){
		 var th_dir = $(this).attr('data-dir');
       var active = $('.tech_slider_images_item.active').attr('data-layout');
       
       change_slide(active,th_dir)
		
	})
	
		if( $(window).outerWidth() >= 768 ){
			$(document).on('click','.tech_slider_images_item.active',function(){
				var th_dir = 'next';
				var active = $('.tech_slider_images_item.active').attr('data-layout');
				change_slide(active,th_dir)
			})
			
		}
			
    

    

    
    
    function change_slide(id, direction){
      //  console.log(id);
      //  console.log(direction);
	  
	  if( $(window).outerWidth() >= 768 ){
		  
		var total = $('.tech_slider_images_item').length;
        var slide_to;
        
        
         if( direction == 'next' ){
             
             if( id == total ){
                 slide_to = 1;
                 
             } else {
                 slide_to = parseInt(id)+1;
             }
             
             
         } else {
             
             if( id == 1 ){
                slide_to = total;
             } else {
                 
               slide_to = parseInt(id)-1;  
             }
              
             
         }
         $('.tech_slider_images_item').removeClass('active');
         $('.tech_slider_images_item[data-layout="'+slide_to+'"]').addClass('active');
         
         $('.tech_slider_images_item').removeClass('sl_item_1 sl_item_2 sl_item_3');
         if( slide_to == 1  ){
             $('.tech_slider_images_item[data-layout="1"]').addClass('sl_item_1');
             $('.tech_slider_images_item[data-layout="2"]').addClass('sl_item_2');
             $('.tech_slider_images_item[data-layout="3"]').addClass('sl_item_3');
             
         }
         
         if( slide_to == 2  ){
             $('.tech_slider_images_item[data-layout="1"]').addClass('sl_item_3');
             $('.tech_slider_images_item[data-layout="2"]').addClass('sl_item_1');
             $('.tech_slider_images_item[data-layout="3"]').addClass('sl_item_2');
             
         }
        
        if( slide_to == 3  ){
             $('.tech_slider_images_item[data-layout="1"]').addClass('sl_item_2');
             $('.tech_slider_images_item[data-layout="2"]').addClass('sl_item_3');
             $('.tech_slider_images_item[data-layout="3"]').addClass('sl_item_1');
             
         }
        
        
        $('.slider-changer').removeClass('active');
         $('.slider-changer[data-slider-block="'+slide_to+'"]').addClass('active');

      //  console.log(slide_to);  
		  
	  }
        

  
    }
	
	if( $(window).outerWidth() >= 768 ){
		var slider_tech_interval = setInterval(function() {
			var th_dir = 'next';
			var active = $('.tech_slider_images_item.active').attr('data-layout');
			change_slide(active,th_dir);
			
			//console.log('set tch interval 1');
		}, 5000);	
	
	}
	
	$(document).on("mouseenter", ".container_page-techslider", function(e) {
		//console.log('set tch interval clear');
		clearInterval(slider_tech_interval);
          
    } )
    .on('mouseleave', '.container_page-techslider', function() {
		
			
				 slider_tech_interval = setInterval(function() {
						var th_dir = 'next';
						var active = $('.tech_slider_images_item.active').attr('data-layout');
						//console.log('set tch interval againe');
						change_slide(active,th_dir);
					}, 5000);
				 
	
			 
        });
		
		
	
	
	
    
    $('.js-morh-ch').click(function(){
       
       var th_dir = $(this).attr('data-dir');
       var active = $('.morph_images_item.active').attr('data-item');

       change_slide_morph(active,th_dir)

    });
	
	$(document).on('click','.morph_images_item.active',function(){
          var th_dir = 'next';
        var active = $('.morph_images_item.active').attr('data-item');
        change_slide_morph(active,th_dir);
		
    })
	
	
	var morphInterval = setInterval(function() {
		  var th_dir = 'next';
        var active = $('.morph_images_item.active').attr('data-item');
        change_slide_morph(active,th_dir);
	}, 3000);	
	
	
	function change_slide_morph(id, direction){
       // console.log(id);
       // console.log(direction);
        
        var total = $('.morph_images_item').length;
        
        var slide_to;
        
        
         if( direction == 'next' ){
             
             if( id == total ){
                 slide_to = 1;
                 
             } else {
                 slide_to = parseInt(id)+1;
             }
             
             
         } else {
             
             if( id == 1 ){
                slide_to = total;
             } else {
                 
               slide_to = parseInt(id)-1;  
             }
              
             
         }
         $('.morph_images_item').removeClass('active');
         $('.morph_images_item[data-item="'+slide_to+'"]').addClass('active');

        //console.log(slide_to);
 
    }
	

	
    
$(document)

    .on("mousemove", ".card", function(event) {

        var halfWidthCard = $(this).outerWidth()/2;
        var halfHeightCard = $(this).outerHeight()/2;
		
		//console.log(this.clientWidth)
		//console.log($(this).outerWidth())

        var mouseX = ( halfWidthCard - (event.pageX - this.offsetLeft));
        var mouseY = ( halfHeightCard - (event.pageY - this.offsetTop));

        var xRotationCard = ((mouseY / halfHeightCard) * 5 ) + 'deg';
        var yRotationCard = ((mouseX / halfWidthCard) * -5) + 'deg';


        var yOffset = 0;


        if( $(this).attr('data-marked') == '1' ){
           // console.log('1111')
            yOffset = -$(this).attr('data-offsetY');
        }

        $(this).css('transform', function() {
            return 'perspective(600px) translate3d(0, '+yOffset+'px, 0) scale(1.05) rotateX('+xRotationCard+') rotateY('+yRotationCard+')';
        })
            .children( '.card__summary' )
            .css( 'transform', function() {
                return 'perspective( 600px ) translate3d( 0, '+yOffset+'px, 0 ) rotateX('+ xRotationCard +') rotateY('+ yRotationCard +')';
            } );
    } )
    .on('mouseout', '.card', function() {
        $(this).removeAttr('style')
            .children('card__sumary')
            .removeAttr('style');
    })
    
 
$(document).on("mouseenter", ".morph_images_item", function(e) {
	clearInterval(morphInterval);
	
}).on('mouseleave', '.morph_images_item', function() {
	
		//console.log('mouseleave morph')

        });

$(document).on("mousemove", ".morph_images_item", function(e) {
	
	
	var offset = $(this).offset();
   // var x = e.pageX- offset.left - $(this).find('.amb').outerWidth() / 2;
   // var y = e.pageY- offset.top - $(this).find('.amb').outerHeight() / 2;

	
	

        var halfWidthCard = this.clientWidth/2;
        var halfHeightCard = this.clientHeight/2;
		


        var mouseX = e.pageX- offset.left - $(this).outerWidth() / 2;
        var mouseY = e.pageY- offset.top - $(this).outerHeight() / 2;

        var xRotationCard1 = ((mouseY / halfHeightCard) * -6 ) + 'deg';
        var yRotationCard1 = ((mouseX / halfWidthCard) * -6) + 'deg';

		var xRotationCard2 = ((mouseY / halfHeightCard) * -12 ) + 'deg';
        var yRotationCard2 = ((mouseX / halfWidthCard) * -12) + 'deg';

		var xRotationCard3 = ((mouseY / halfHeightCard) * -18) + 'deg';
        var yRotationCard3 = ((mouseX / halfWidthCard) * -18) + 'deg';

		
	
		// $(this).css('transform', function() {
        //    return 'perspective(600px) translate3d(0, 0, 0) scale(1) rotateX('+xRotationCard3+') rotateY('+yRotationCard3+')';
        //})
		 $(this).find('.morph_images_item_1').css('transform', function() {
            return 'perspective(1500px) translate3d(0, 0, 0) scale(1.15) rotateX('+xRotationCard1+') rotateY('+yRotationCard1+')';
        })
		 $(this).find('.morph_images_item_2').css('transform', function() {
            return 'perspective(1500px) translate3d(0, 0, 0) scale(1.15) rotateX('+xRotationCard2+') rotateY('+yRotationCard2+')';
        })
		 $(this).find('.morph_images_item_3').css('transform', function() {
            return 'perspective(1500px) translate3d(0, 0, 0) scale(1.15) rotateX('+xRotationCard3+') rotateY('+yRotationCard3+')';
        });
		
		//clearInterval(morphInterval);
	//	morphInterval = false;
	//	console.log('morph clearInterval morph_images_item 2 ');
          
    } )
    .on('mouseout', '.morph_images_item', function() {

			 $(this).find('.morph_images_item_1').removeAttr('style');
			 $(this).find('.morph_images_item_2').removeAttr('style');
			 $(this).find('.morph_images_item_3').removeAttr('style');

			 
			  morphInterval = setInterval(function() {
						var th_dir = 'next';
						var active = $('.morph_images_item.active').attr('data-item');
						change_slide_morph(active,th_dir);
					}, 3000);
		
		
		
        });
		
		
   
	
    

	$(document).on('click', ".burger", function(){

		$(this).toggleClass("active");
		$(".menu").toggleClass("active");
		$("html,body").toggleClass("noscroll");
		
		if( $('.menu').hasClass('active') ){
			if( $(window).outerWidth() <= 1023 ){
			
				$('.nav_mobile').addClass('hide');
				$('.menu__grid').addClass('open');
			}	
			
		} else {
			if( $(window).outerWidth() <= 1023 && $(window).scrollTop() > 100 && $(window).outerWidth() > 480 ){
			
				$('.nav_mobile').removeClass('hide');
				$('.menu__grid').removeClass('open');
			}
			
			if( $(window).outerWidth() <= 480 ){
				$('.nav_mobile').removeClass('hide');
				$('.menu__grid').removeClass('open');
			}
			
		}
		


	});
	
	$(document).on('click', ".menu a", function(){

		$('.burger').removeClass("active");
		$(".menu").removeClass("active");
		$("html,body").removeClass("noscroll");
		
		if( $(window).outerWidth() <= 1023 && $(window).scrollTop() > 100 && $(window).outerWidth() > 480){
			
			$('.nav_mobile').removeClass('hide');
			$('.menu__grid').removeClass('open');
		}
		
		if( $(window).outerWidth() <= 480){
			
			$('.nav_mobile').removeClass('hide');
			$('.menu__grid').removeClass('open');
		}
		
		

	});
	

	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        $('video').attr('controls','true');
    }
    if( $(window).outerWidth() <= 1023 ){
    	$('.nav_mobile').addClass('hide');
    }
	
	$(window).scroll(function(){
		if( $(window).outerWidth() <= 1023 && $(window).outerWidth() > 480){
			if( $(this).scrollTop() > 100 ){

				$('.nav_mobile').removeClass('hide');
				$('.menu__grid').removeClass('open');
				$('.burger').addClass('scroll');
			
			} else {
				$('.nav_mobile').addClass('hide');
				$('.menu__grid').addClass('open');
				$('.burger').removeClass('scroll');
			}

		}
		
		
	if ($(document).height() <= ($(window).height() + $(window).scrollTop() + $('.footer__inner').outerHeight())) {
      //  console.log('end');
        $('.language_switch').addClass('language_switch_hide')
    }   else {
         $('.language_switch').removeClass('language_switch_hide')
        
    }
    
    
    

		
	})
	
	
	
	
	
	//mouse follower
	
	
//var mouseX = 0,
//    mouseY = 0;
//
//$(document).mousemove(function(e){
//   mouseX = e.pageX;
//   mouseY = e.pageY; 
//});
//
//var follower = $("#follower");
//var xp = 40, yp = 40;
//var loop = setInterval(function(){
//    // change 12 to alter damping higher is slower
//    xp += (mouseX - xp) / 12 -1;
//    yp += (mouseY - yp) / 12 -1;
//    follower.css({left:xp, top:yp});
//
//}, 1); 





	//$(".list_inside").hover(function(){
    //
	//	$(".menu__contacts").addClass("hide");
    //
	//},
	//function(){
	//	$(".menu__contacts").removeClass("hide");
    //
	//});

	$(document).on('click', ".callback-button, .m_callback, .js-cb", function(){

		$(".callback").addClass("active");
		$("html,body").addClass("noscroll");

	});


	$(document).on('click', ".callback__close", function(){

		$(".callback").removeClass("active");
		$("html,body").removeClass("noscroll");

	});

	/*yandex metrika goals*/
	$(document).on('af_complete', function(event, res) {
		var form = res.form;
		if (res.success && form.attr('id') == 'request-form') {
	            ym(52682245, 'reachGoal', 'request_form'); 
	            return true;

	    }
	});

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".callback"); // тут указываем ID элемента

		if ( div.hasClass("active"))
		{
			if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				$(".callback").removeClass("active");
				$("html,body").removeClass("noscroll"); // скрываем его
			}
		}
	});

	$(document).on('click', ".language_switch-ru, .language_switch-eng", function(e){

		e.preventDefault();
		$(".language_switch-ru, .language_switch-eng").removeClass("active");
		$(this).toggleClass("active");

	});


	$("input").blur(function() {

		let el = $(this);
		el.val(el.val().replace(/\s+/g,' ').trim());

		//console.log(el.val());
		//console.log(el.val().length );

		if ( el.val().length != 0  &&  el.val() != "" && el.val() != " ")
		{
			el.addClass("focused");
		}
		else	if ( el.val().length == 0 || el.val() == "" || el.val() == " " || el.val() == null || el.val() == NaN || el.val() == undefined)
		{
			el.removeClass("focused");
		}
	});


	$('#file').change(function(e){
		var filename = e.target.files[0].name;
		//console.log(filename);
		$('.form-uploaded').html('<span class="filename">'+filename+'</span>');
	});

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

	$('#eapps-instagram-feed-1').find('a[href*="elfsight.com"').remove();

});




