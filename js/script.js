$(function() {
	/* kTalk 말풍선 */
	setInterval(function() {
		$('.talk-info').addClass('show');
		setTimeout(function() {
			$('.talk-info').removeClass('show');
		}, 4000)
	}, 8000)


	/* slide banner - bxslider */
	$('.slider').bxSlider({
		auto: true,
		stopAutoOnClick: true,
		autoControls: true,
		autoControlsCombine: true,
		pager: true,
		pagerType: 'short',
	});

	$('.slider__benefit').bxSlider({
		auto: true,
		stopAutoOnClick: true,
		autoControls: false,
		pager: true,
		pagerType: 'short',
	});
	
	/* main 핫딜 - swiper */
	var swiperThumbs = new Swiper('.swiper-thumb', {
		slidesPerView: 3,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});

	var swiperSlides = new Swiper('.swiper-contents', {
		effect: "fade",
		thumbs: {
			swiper: swiperThumbs,
		}
	});

	/* main CS - jqueryUI - tabs */
	$('.tab-wrapper').tabs();
})