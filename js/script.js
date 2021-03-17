var elements = $('.modal-overlay, .modal');

$('.call__btn').click(function(){
    elements.addClass('active');
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});
$(document).ready(function(){
	$('.header__burger').click(function(event) {
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.menu__sidebar__wrapper').removeClass('active');
	});
});

$('.widget').click(function(e){
	$('.window').fadeIn();
	$('.window').addClass('active');
});

$('.close').click(function(event){
	event.preventDefault();
	$('.window').fadeOut();
	$('.window').siblings().removeClass('active');
});

$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:3,
		speed:600,
		easing:'ease',
		infinite:false,
		autoplay:false,
		autoplaySpeed:0,
		draggable:false,
		responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
		draggable:true
      }
    },
    {
		breakpoint: 500,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
    }
  ]
	});
});
$(document).ready(function() {
	$('.header__slider').slick({
		arrows: false,
		dots: false,
		adaptiveHeight: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		easing:'ease',
		infinite: true,
		autoplay: true,
		speed: 1500,
		autoplaySpeed: 3000,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		draggable: false,
	});
});

// Animation

AOS.init({ 

  disable: 'phone', // Убираем анимацию на конкретных устройствах: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // Обязательный класс / class applied after initialization 
  animatedClassName: 'aos-animate', // Обязательный класс / class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // Пиксели при скроле страницы / offset (in px) from the original trigger point
  delay: 0, // Задержка / values from 0 to 3000, with step 50ms
  duration: 1000, // Скорость анимации / values from 0 to 3000, with step 50ms
  easing: 'ease', // Тип анимации / default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // Будет ли элемент анимировать еще раз при последующих скролах страницы / whether elements should animate out while scrolling past them
  anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
});
