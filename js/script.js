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
	


})