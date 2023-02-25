let devWidth = screen.width;
console.log(devWidth);

let slideVar = 1;
let galSlideVar = 1;

const updateScreen = () => {
	if (devWidth > 500 && devWidth < 1100) {
		slideVar = 2;
		galSlideVar = 2;
	} else if (devWidth > 1100) {
		slideVar = 3;
		galSlideVar = 3;
	}

	console.log(slideVar);
};
updateScreen();

var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	loop: true,
	slidesPerView: galSlideVar,
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

var swiper = new Swiper(".mySwiper-team", {
	slidesPerView: slideVar,
	spaceBetween: 10,
	centeredSlides: false,

	loop: true,

	freeMode: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
