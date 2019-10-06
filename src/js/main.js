// $(document).ready(function() { // Ждём загрузки страницы
	
// 	$(".image").click(function(){	// Событие клика на маленькое изображение
// 	  	var img = $(this);	// Получаем изображение, на которое кликнули
// 		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
// 		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
// 						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
// 						 "<img src="+src+" class='popup_img' />"+ // Само увеличенное фото
// 						 "</div>"); 
// 		$(".popup").fadeIn(800); // Медленно выводим изображение
// 		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
// 			$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
// 			setTimeout(function() {	// Выставляем таймер
// 			  $(".popup").remove(); // Удаляем разметку высплывающего окна
// 			}, 800);
// 		});
// 	});
// });

// var swiper = new Swiper('.swiper-container', {
// 	slidesPerView: 2.6,
// 	spaceBetween: 30,
// 	pagination: {
// 	  el: '.swiper-pagination',
// 	  clickable: true,
	  
// 	},
// 	// if ( $(window).width() < 768 )
//   });
function getWindowWidth() {
	return window.innerWidth || document.body.clientWidth;

}
if (getWindowWidth() >1024) {
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 2.6,
	spaceBetween: 30,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	  
	},
	// if ( $(window).width() < 768 )
  });
};

if (getWindowWidth() <=1024) {
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 2,
		spaceBetween: 30,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		  
		},
		// if ( $(window).width() < 768 )
	  });
	  
};
if (getWindowWidth() <=768) {
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1.5,
		spaceBetween: 30,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		  
		},
		// if ( $(window).width() < 768 )
	  });
	  
};
if (getWindowWidth() <=500) {
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		  
		},
		// if ( $(window).width() < 768 )
	  });
	  
}