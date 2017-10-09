$(document).ready(function() {
  $(document).foundation();

  // Colorbox localization
  jQuery.extend(jQuery.colorbox.settings, {
    maxWidth: '95%',
    maxHeight: '95%',
    current: "Изображение {current} из {total}",
    previous: "&#10508;",
    next: "&#10509",
    close: "&#215;",
    xhrError: "Не удалось загрузить содержимое.",
    imgError: "Не удалось загрузить изображение.",
    slideshowStart: "Начать слайд-шоу",
    slideshowStop: "Остановить слайд-шоу",
    onComplete: function() {
      $.colorbox.resize();
    }
  });

  // Toggle menu icon
  $('#menuIcon').on('click', function() {
    $(this).toggleClass('open');
  });

  // Hero slider
  $('#heroSlider').slick({
    mobileFirst: true,
    infinite: true,
    arrows: false,
    dots: true,
    dotsClass: 'dots',
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 1199,
      settings: {
        adaptiveHeight: false,
      }
    }]
  });

  // Apartment item gallery
  var apartmentsList = $('.apartment');

  apartmentsList.each(function(index) {
    var apartment = $(this),
        thumbnails = apartment.find('.apartmentThumbnails'),
        photo = apartment.find('.apartmentPhoto');

    thumbnails.slick({
      mobileFirst: true,
      variableWidth: true,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: photo,
      focusOnSelect: true,
      draggable: true,
      responsive: [{
        breakpoint: 1023,
        settings: {
          vertical: true,
          variableWidth: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          verticalSwiping: true
        }
      }]
    });
    photo.slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      dotsClass: 'dots',
      lazyLoad: 'progressive',
      asNavFor: thumbnails,
      responsive: [{
        breakpoint: 1023,
        settings: {
          dots: false,
          draggable: false,
          fade: true
        }
      }]
    });
  });

  // Apartment gallery
  $('.apartmentPhoto a').colorbox({ rel: 'apartmentsGalleryGroup' });

  // About slider
  $('#aboutSlider').slick({
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: '<button type="button" class="arrow prev">&#8249;</button>',
    nextArrow: '<button type="button" class="arrow next">&#8250;</button>',
    dots: true,
    dotsClass: 'dots',
    responsive: [{
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        arrows: true,
        dots: false,
      }
    }, {
      breakpoint: 640,
      settings: {
        slidesToShow: 4,
        dots: false,
        arrows: true
      }
    }, {
      breakpoint: 820,
      settings: {
        slidesToShow: 5,
        dots: false,
        arrows: true
      }
    }, {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        dots: false,
        arrows: true
      }
    }]
  });

  // About gallery
  $('#aboutSlider a').colorbox({ rel: 'aboutGalleryGroup' });
  
  // Feedback slider
  $('#feedbackSlider').slick({
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    dotsClass: 'dots',
    prevArrow: '<button type="button" class="arrow prev"></button>',
    nextArrow: '<button type="button" class="arrow next"></button>',
    responsive: [{
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1399,
      settings: {
        slidesToShow: 3,
        arrows: true,
        dots: false
      }
    }]
  });

  // Places slider
  $('#placesSlider').slick({
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'dots',
    responsive: [{
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 1023,
      settings: {
        variableWidth: true,
        centerMode: true,
        centerPadding: '0px',
        speed: 500,
        arrows: true,
        prevArrow: '<button type="button" class="arrow prev">&#8249;</button>',
        nextArrow: '<button type="button" class="arrow next">&#8250;</button>',
        appendArrows: $('#placesSlider .place'),
        dots: false,
        // draggable: false
      }
    }]
  });

  var placesSlider = $('#placesSlider'),
      placesPrevArrow = $('#placesSlider .slide .arrow.prev'),
      placesNextArrow = $('#placesSlider .slide .arrow.next');

    placesPrevArrow.on('click', function() { placesSlider.slick('slickPrev') });
    placesNextArrow.on('click', function() { placesSlider.slick('slickNext') });

  // Google Maps API
	function initialize() {
		var mapCanvas = document.getElementById('map');
		var mapOptions = {
			center: new google.maps.LatLng(44.577249, 38.009312),
			zoom: 14,
			scrollwheel: false,
			disableDefaultUI: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		};
		var map = new google.maps.Map(mapCanvas, mapOptions);
		var markerPos = new google.maps.LatLng(44.577249, 38.009312);
		var iconBase = 'images/marker.png';
		var marker = new google.maps.Marker({
			position: markerPos,
			map: map,
			title: 'улица Пограничная, 1',
			icon: iconBase
		});
	}
	// icon: iconBase
  google.maps.event.addDomListener(window, 'load', initialize);
  
  // Content gallery
  $('.content a.thumbnail').colorbox();
  $('.contentGallery a').colorbox({ rel: 'contentGalleryGroup' });

  // Replace select values
  function replaceSelectValues() {
    var amountSelects = $('select.peopleAmount');

    for (var i = 0; i < amountSelects.length; i++) {
      setSelectValue(amountSelects.eq(i));
    }
  }

  function setSelectValue(item) {
    var isAdultsSelect = item.hasClass('adults'),
        isChildrenSelect = item.hasClass('children');

    if ($(window).width() < 544) {
      if (isAdultsSelect) item[0].options[0].text = 'Взрослых';
      if (isChildrenSelect) item[0].options[0].text = 'Детей';
    } else {
      if (isAdultsSelect) item[0].options[0].text = 'Количество взрослых';
      if (isChildrenSelect) item[0].options[0].text = 'Количество детей';
    }
  }

  replaceSelectValues();
  $(window).resize(replaceSelectValues);
  
});
