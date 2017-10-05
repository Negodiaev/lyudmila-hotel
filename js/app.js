$(document).ready(function() {
  $(document).foundation();

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
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: thumbnails,
      draggable: false,
      responsive: [{
        breakpoint: 1023,
        settings: {
          vertical: true
        }
      }]
    });
  });

  // About slider
  $('#aboutSlider').slick({
    mobileFirst: true,
    infinite: true,
    slidesToShow: 2,
    prevArrow: '<button type="button" class="arrow prev">&#8249;</button>',
    nextArrow: '<button type="button" class="arrow next">&#8250;</button>',
    responsive: [{
      breakpoint: 480,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 640,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 820,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3
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
    prevArrow: '<button type="button" class="arrow prev">&#8249;</button>',
    nextArrow: '<button type="button" class="arrow next">&#8250;</button>',
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
        draggable: false,
        useTransform: false
      }
    }]
  });

  $('#placesSlider .arrow').on('mouseup', function(){
    $('#placesSlider .arrow').css({'opacity': 0});
    setTimeout(function() {
      $('#placesSlider .arrow').css({'opacity': 1});
    }, 800);
  });

  //Google Maps API
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
  
});
