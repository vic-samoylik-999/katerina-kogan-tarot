const swiper = new Swiper('.swiper', {
	autoHeight: true,
	grabCursor: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
	slidesPerGroup: 1,
	autoplay: {
		delay: 10000,
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
		renderBullet: function (index, className) {
			return `<span class="${className}">${index + 1}</span>`
		}
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});