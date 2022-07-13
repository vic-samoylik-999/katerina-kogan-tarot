$(document).ready(function () {
	// Accordion
	$(".click-handler").click(function (event) {
		if ($(".spoiler").hasClass("one")) {
			$(".click-handler").not($(this)).removeClass("active");
			$(".spoiler__text").not($(this).next()).slideUp(300);
		}
		$(this).toggleClass("active").next().slideToggle(300);
	})
})