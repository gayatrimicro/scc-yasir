$(document).ready(function() {

  new WOW().init();

  var rellax = new Rellax('.rellax');



  // remove rellax (parallax effect) for devices with a width equal or less than 992px
  $(window).resize(function() {
    if($(window).width() <= 992) {
      rellax.destroy();
    } else {
      rellax.refresh();
    }
  });
  if($(window).width() <= 992) {
    rellax.destroy();
  } else {
    rellax.refresh();
  }


  $('#language_wrap > a').click(function(e) {
    e.preventDefault();
    $('#language_wrap .choices').toggleClass('active');
  });


  // Using animation.css with JS
  const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      node.removeEventListener('animationend', handleAnimationEnd);

      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd);
  });


  function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
      'MacIntel'
    ].includes(navigator.platform);
  }
  // remove background-attachment:fixed; for all iOS
  if(iOS()) {
    $('.bg_parallax').css('background-attachment', 'inherit');
    // $('main#home #hero_titles h1').text(navigator.platform + ':1');
  } else {
    // $('main#home #hero_titles h1').text(navigator.platform + ':2');
  }
  



  // Temoignage animation
  $('#temoignage-controls > a').click(function(e) {
    e.preventDefault();

    var control = $(this).data('control');
    var first_content_element = $('#temoignages-bulle > div:nth-child(3)');
    var last_content_element = $('#temoignages-bulle > div:last-child');
    var current_content_element = $('.temoignage.active');
    var next_content_element = current_content_element.next('.temoignage');
    var prev_content_element = current_content_element.prev('.temoignage');

    var current_detail_element = $('.temoignage-details.active');
    var next_detail_element = current_detail_element.next('.temoignage-details');
    var prev_detail_element = current_detail_element.prev('.temoignage-details');
    var first_detail_element = $('#temoignage-personne > div:first-child');
    var last_detail_element = $('#temoignage-personne > div:last-child');




    if(control == 'next') {
      if(next_content_element.length) {
        // content
        animateCSS('.temoignage.active', 'fadeOut').then((message) => {
          current_content_element.removeClass('active');
          next_content_element.addClass('active');
        });
        // details
        animateCSS('.temoignage-details.active', 'fadeOut').then((message) => {
          current_detail_element.removeClass('active');
          next_detail_element.addClass('active');
        });
      } else {
        // return to the first content
        animateCSS('.temoignage.active', 'fadeOut').then((message) => {
          current_content_element.removeClass('active');
          first_content_element.addClass('active');
        });
        // details
        animateCSS('.temoignage-details.active', 'fadeOut').then((message) => {
          current_detail_element.removeClass('active');
          first_detail_element.addClass('active');
        });
      }
    } else {
      if(prev_content_element.length) {
        animateCSS('.temoignage.active', 'fadeOut').then((message) => {
          current_content_element.removeClass('active');
          prev_content_element.addClass('active');
        });
        // details
        animateCSS('.temoignage-details.active', 'fadeOut').then((message) => {
          current_detail_element.removeClass('active');
          prev_detail_element.addClass('active');
        });
      } else {
        // return to the first content
        animateCSS('.temoignage.active', 'fadeOut').then((message) => {
          current_content_element.removeClass('active');
          last_content_element.addClass('active');
        });
        // details
        animateCSS('.temoignage-details.active', 'fadeOut').then((message) => {
          current_detail_element.removeClass('active');
          last_detail_element.addClass('active');
        });
      }
    }

    
    

  });





  

  function animate_service(service, direction) {
    // animate service
    var fade_out = (direction == 'next') ? 'fadeOutLeft' : 'fadeOutRight';
    var fade_in = (direction == 'next') ? 'fadeInRight' : 'fadeInLeft';
    var order = service.data('order');
    var icon_1_turn = '72deg';
    var icon_2_turn = '37deg';
    var icon_3_turn = '0deg';
    // no need for icon 4 and 5 since the wheel is symmetrical, just change the sign

    animateCSS('.wrap-organisations_content.active', fade_out).then((message) => {
      $('.wrap-organisations_content.active').removeClass('active');

      service.css('opacity', '0');
      service.addClass('active');

      animateCSS('.wrap-organisations_content.active', fade_in).then((message) => {
        service.css('opacity', '1');
      });
    });
    // animate list
    $('#organisations_liste > a.active').removeClass('active');
    $('#organisations_liste > a[data-order="'+order+'"]').addClass('active');
    // roulette - my creativity has no limits
    $('#roulette > a.active').removeClass('active');
    $('#roulette > a[data-order="'+order+'"]').addClass('active');
    switch(order) {
      case 1:
        $('#roulette').css('transform', 'rotate('+icon_1_turn+')');
        $('#roulette > a').css('transform', 'rotate(-'+icon_1_turn+')');
        break;
      case 2:
        $('#roulette').css('transform', 'rotate('+icon_2_turn+')');
        $('#roulette > a').css('transform', 'rotate(-'+icon_2_turn+')');
        break;
      case 3:
        $('#roulette').css('transform', 'rotate('+icon_3_turn+')');
        $('#roulette > a').css('transform', 'rotate('+icon_3_turn+')');
        break;
      case 4:
        $('#roulette').css('transform', 'rotate(-'+icon_2_turn+')');
        $('#roulette > a').css('transform', 'rotate('+icon_2_turn+')');
        break;
      case 5:
        $('#roulette').css('transform', 'rotate(-'+icon_1_turn+')');
        $('#roulette > a').css('transform', 'rotate('+icon_1_turn+')');
        break;
    }
    // disabling arrow if necessary
    if(order == '1') {
      $('#back_organisation').addClass('disable');
      $('#next_organisation').removeClass('disable');
    } else if(order == '5') {
      $('#next_organisation').addClass('disable');
      $('#back_organisation').removeClass('disable');
    } else {
      $('#next_organisation').removeClass('disable');
      $('#back_organisation').removeClass('disable');
    }
  }



  // Page : sante-publique
  // Animation for services
  $('#back_organisation').click(function(e) {
    e.preventDefault();
    var prev_service = $('.wrap-organisations_content.active').prev();

    if(prev_service.length) {
      animate_service(prev_service, 'prev');
    }
  });
  $('#next_organisation').click(function(e) {
    e.preventDefault();
    var next_service = $('.wrap-organisations_content.active').next();

    if(next_service.length) {
      animate_service(next_service, 'next');
    }
  });
  $('#organisations_liste > a, #roulette > a').click(function(e) {
    e.preventDefault();
    var current_order = $('.wrap-organisations_content.active').data('order'); // e.g. 1
    var new_order = $(this).data('order'); // e.g. 2
    var new_service_el = $('.wrap-organisations_content[data-order="'+new_order+'"]');

    if(new_order > current_order) {
      animate_service(new_service_el, 'next');
    } else if(new_order < current_order) {
      animate_service(new_service_el, 'prev');
    }
  });



  // Burger menu animation + Aside's width
  $('#burger_menu').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('left_aside_menu-opened');
    $('#burger_menu').toggleClass('open');
    $('#chatra').fadeToggle();
  });



  // Footer pill animation
  $('.btn-joindre').mouseenter(function(e) {
    $('.wrap_choices').addClass('active');
  });
  $('.btn-essai').mouseenter(function(e) {
    $('.wrap_choices').removeClass('active');
  });



  // On page load, if the page is 120px from the top, hide header and show #sticky_header_btns
  if($(window).scrollTop() >= 120) {
    $('header').css('display', 'none');
    $('#sticky_header_btns').addClass('active');
  }
  // Header and footer fade in/out
  $(window).resize(function() {
    if($(window).width() < 992) {
      $('header').css('display', 'none');
    }
  });
  $(window).scroll(function() {
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if($(window).width() > 992) {
      $('header').css("opacity", 1 - $(window).scrollTop() / 80);
      
      if($(window).scrollTop() >= 120) {
        $('header').css('display', 'none');
        $('#sticky_header_btns').addClass('active');
      } else {
        $('header').css('display', 'block');
        $('#sticky_header_btns').removeClass('active');
      }
    }

    $('footer').css("opacity", (1 - scrollBottom / $('footer').height()) * 3.5); 
  });



  // Hero video
  $('#play_hero_video').click(function(e) {
    e.preventDefault();
    $('#hero_video').fadeIn().get(0).play();
    $('header .logo, header nav, #hero_titles, #img-sthetoscope_planete').fadeOut("slow", function() {
      $('header .logo, header nav, #hero_titles, #img-sthetoscope_planete').attr('style', 'display: none !important');
    });
    $('html').addClass('no_scroll');
    $('#video_controls').addClass('active');
  });
  $('#hero_video').click(function(e) {
    e.preventDefault();
    $('#hero_video').fadeOut().get(0).pause();
    $('header .logo, header nav, #hero_titles, #img-sthetoscope_planete').fadeIn();
    $('html').removeClass('no_scroll');
    $('#video_controls').removeClass('active');
  });
  // Mute/unmute
  $('#video_controls').click(function(e) {
    e.preventDefault();

    if($('#hero_video').get(0).muted == true) {
      $('#hero_video').get(0).muted = false;
      $('#video_controls').html('<i class="fas fa-volume-up"></i>');
    } else {
      $('#hero_video').get(0).muted = true;
      $('#video_controls').html('<i class="fas fa-volume-off"></i>');
    }
    
  });



  // General buttons to open/close a specific HTML element
  $('*[data-action="open"]').click(function(e) {
    e.preventDefault();
    let id_div_to_open = $(this).data('target');
    $('#blue_filter').fadeIn();
    $(id_div_to_open).addClass('open');
    // remove document's scroll
    $('html').addClass('no_scroll');
    // show specific content
    if($(this).data('code')) {
      var code = $(this).data('code');
      $('#pale_blue_aside > div[data-code="'+code+'"]').fadeIn(1000);
    }
  });
  $('*[data-action="close"]').click(function(e) {
    e.preventDefault();
    let id_div_to_close = $(this).data('target');
    $('#blue_filter').fadeOut();
    $(id_div_to_close).removeClass('open');
    // add document's scroll
    $('html').removeClass('no_scroll');
    // hide all contents
    $('#pale_blue_aside > div').fadeOut();
  });

  
    
  // hero background switch
  if(!$('#contact #hero').length) { // special header for contact page
    $(window).resize(function() {
      if($(window).width() <= 992) {
        let bg_mobile = $('#hero').data('bg_mobile');
        $('#hero').css('background-image', 'url('+bg_mobile+')');
      } else {
        let bg_screen = $('#hero').data('bg_screen');
        $('#hero').css('background-image', 'url('+bg_screen+')');
      }
    });
    if($(window).width() <= 992) {
      let bg_mobile = $('#hero').data('bg_mobile');
      $('#hero').css('background-image', 'url('+bg_mobile+')');
    }
  }


  // if we click outside of a specific div, close it
  $(document).mouseup(function(e) {
    var aside_to_close = $("aside.open");

    if(aside_to_close.length) {
      if(!aside_to_close.is(e.target) && aside_to_close.has(e.target).length === 0) {
        $('#blue_filter').fadeOut();
        $('html').removeClass('no_scroll');
        if(aside_to_close.is('#pale_blue_aside')) {
          $('#pale_blue_aside > div').fadeOut();
        }
        aside_to_close.removeClass('open');
      }
    }
    
  });


});



