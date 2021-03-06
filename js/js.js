$(document).ready(function(){

var screenWidth = window.innerWidth ;

    $(window).on('resize', function(){
          var win = $(this); //this = window
          if (win.width() <= 950) {
            $('.download').insertBefore('.social_network');
          } else {
            $('.download').insertAfter('.social_network');
          }
    });

/* Ancre */

$('.scrollto').click(function(e) {

  var linkHref = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(linkHref).offset().top
  }, 1000);

  $('.conteneur_site').css('transform', 'translate(0px)');
  $('.conteneur_site').fadeTo(0, 1);
  $('.conteneur_site').removeAttr('style');
  $('body').css('overflow-y', 'auto');
  $('.nav_responsive_bar').css('transform', 'translate(-100%)');
  $('.navicon').css('transform', 'translate(0px)');
  $('.navicon').css('animation-name', 'navicon_off');

  e.preventDefault();

});

/* Ancre */

/* Parallax, landing elements, opacity on scroll */



$(window).scroll(function() {
  var mouseScroll = $(this).scrollTop();
  $('.anchor').css({
    'transform' : 'translate(0px, '+ mouseScroll /6 +'%)'
  });
  $('h1').css({
    'transform' : 'translate(0px, '+ mouseScroll /8 +'%)'
  });
  $('h2').css({
    'transform' : 'translate(0px, '+ mouseScroll /6 +'%)'
  });
  $('.arrow_slider').css({
    'transform' : 'translate(0px, '+ mouseScroll /12 +'%)'
  });

  if(mouseScroll > $('.chiffres').offset().top - ($(window).height() / 1.2)) {

    $('.chiffres .chiffres_figure figure').each(function(i){
      setTimeout(function(){
        $('.chiffres .chiffres_figure figure').eq(i).addClass('mouvementX');
      }, 150 * (i+1));
    });

  }

    if(mouseScroll > $('.contenu').offset().top - ($(window).height() / 1.2)) {
      $('.contenu').each(function(i){
        setTimeout(function(){
          $('nav').eq(i).addClass('opacity');
        }, 250 * (i+1));
      });

  }


});

/* Parallax, landing elements, opacity on scroll */

/* Nav slideleft menu */

/* Open Nav slideleft menu */

$('.navicon_on').on('click', function() {
    $('.conteneur_site').css('transform', 'translate(420px)');
    $('.conteneur_site').fadeTo(0, 0.5);
    $('body').css('overflow-y', 'hidden');
    $('.nav_responsive_bar').css('transform', 'translate(0%)');
    $('.nav_responsive_bar ul li').css('top','0');
    $('.navicon_on').css('display', 'none');
    $('.navicon_off').css('display', 'block');

});

/* Close Nav slideleft menu */

$('.navicon_off').click(function() {
    $('.conteneur_site').css('transform', 'translate(0px)');
    $('.conteneur_site').fadeTo(0, 1);
    $('.conteneur_site').removeAttr('style');
    $('body').css('overflow-y', 'auto');
    $('.nav_responsive_bar').css('transform', 'translate(-100%)');
    $('.navicon_off, nav').css('display', 'none');
    $('.navicon_on').css('display', 'block');
    $('.navicon').css('animation-name', 'navicon_off');
    $('.button').attr('href', '#accueil');
    if (screenWidth > '420' && screenWidth < '800') {
      $('.contenu').css('display', 'none');
    }

});



/* Nav slideleft menu */

$('.environnement_link').click(function() {

    $('nav, .navicon_off, .image_granulats, .engagement, .legislation, .sante, .technique, .transport, .livre, .developpement, .vie, .europe').css('display', 'none');
    $('.environnement, .navicon_on').css('display', 'block');
    $('.contenu').removeClass('green_gradient');
    $('.contenu').removeClass('lightblue_gradient');
    $('.contenu').removeClass('yellow_gradient');
    $('.contenu').removeClass('orange_gradient');
    $('.contenu').removeClass('violet_gradient');
    $('.contenu').removeClass('blue_gradient');
    $('.contenu').removeClass('grayblue_gradient');
    $('.contenu').removeClass('pastelblue_gradient');
    $('.contenu').removeClass('gray_gradient');
    $('.contenu').removeClass('bluegreen_gradient');
    $('.contenu').addClass('green_gradient');
    $('.button').attr('href', '#contenu_principal');
});

$('.engagement_link').click(function() {

    $('nav, .navicon_off, .image_granulats, .environnement, .legislation, .sante, .technique, .transport, .livre, .developpement, .vie, .europe').css('display', 'none');
    $('.engagement, .navicon_on').css('display', 'block');
    $('.contenu').removeClass('green_gradient');
    $('.contenu').removeClass('lightblue_gradient');
    $('.contenu').removeClass('yellow_gradient');
    $('.contenu').removeClass('orange_gradient');
    $('.contenu').removeClass('violet_gradient');
    $('.contenu').removeClass('blue_gradient');
    $('.contenu').removeClass('grayblue_gradient');
    $('.contenu').removeClass('pastelblue_gradient');
    $('.contenu').removeClass('gray_gradient');
    $('.contenu').removeClass('bluegreen_gradient');
    $('.contenu').addClass('lightblue_gradient');
    $('.button').attr('href', '#contenu_principal');

});

$('.legislation_link').click(function() {

    $('nav, .navicon_off, .image_granulats, .environnement, .engagement, .sante, .technique, .transport, .livre, .developpement, .vie, .europe').css('display', 'none');
    $('.legislation, .navicon_on').css('display', 'block');
    $('.contenu').removeClass('green_gradient');
    $('.contenu').removeClass('lightblue_gradient');
    $('.contenu').removeClass('yellow_gradient');
    $('.contenu').removeClass('orange_gradient');
    $('.contenu').removeClass('violet_gradient');
    $('.contenu').removeClass('blue_gradient');
    $('.contenu').removeClass('grayblue_gradient');
    $('.contenu').removeClass('pastelblue_gradient');
    $('.contenu').removeClass('gray_gradient');
    $('.contenu').removeClass('bluegreen_gradient');
    $('.contenu').addClass('yellow_gradient');
    $('.button').attr('href', '#contenu_principal');

});

$('.sante_link').click(function() {

    $('nav, .navicon_off, .image_granulats, .environnement, .engagement, .legislation, .technique, .transport, .livre, .developpement, .vie, .europe').css('display', 'none');
    $('.sante, .navicon_on').css('display', 'block');
    $('.contenu').removeClass('green_gradient');
    $('.contenu').removeClass('lightblue_gradient');
    $('.contenu').removeClass('yellow_gradient');
    $('.contenu').removeClass('orange_gradient');
    $('.contenu').removeClass('violet_gradient');
    $('.contenu').removeClass('blue_gradient');
    $('.contenu').removeClass('grayblue_gradient');
    $('.contenu').removeClass('pastelblue_gradient');
    $('.contenu').removeClass('gray_gradient');
    $('.contenu').removeClass('bluegreen_gradient');
    $('.contenu').addClass('orange_gradient');
    $('.button').attr('href', '#contenu_principal');

});

$('.technique_link').click(function() {

    $('nav, .navicon_off, .image_granulats, .environnement, .engagement, .legislation, .sante, .transport, .livre, .developpement, .vie, .europe').css('display', 'none');
    $('.technique, .navicon_on').css('display', 'block');
    $('.contenu').removeClass('green_gradient');
    $('.contenu').removeClass('lightblue_gradient');
    $('.contenu').removeClass('yellow_gradient');
    $('.contenu').removeClass('orange_gradient');
    $('.contenu').removeClass('violet_gradient');
    $('.contenu').removeClass('blue_gradient');
    $('.contenu').removeClass('grayblue_gradient');
    $('.contenu').removeClass('pastelblue_gradient');
    $('.contenu').removeClass('gray_gradient');
    $('.contenu').removeClass('bluegreen_gradient');
    $('.contenu').addClass('violet_gradient');
    $('.button').attr('href', '#contenu_principal');

});

$('.transport_link').click(function() {

    $('nav, .navicon_off, .image_granulats, .environnement, .engagement, .legislation, .sante, .technique, .livre, .developpement, .vie, .europe').css('display', 'none');
    $('.transport, .navicon_on').css('display', 'block');
    $('.contenu').removeClass('green_gradient');
    $('.contenu').removeClass('lightblue_gradient');
    $('.contenu').removeClass('yellow_gradient');
    $('.contenu').removeClass('orange_gradient');
    $('.contenu').removeClass('violet_gradient');
    $('.contenu').removeClass('blue_gradient');
    $('.contenu').removeClass('grayblue_gradient');
    $('.contenu').removeClass('pastelblue_gradient');
    $('.contenu').removeClass('gray_gradient');
    $('.contenu').removeClass('bluegreen_gradient');
    $('.contenu').addClass('blue_gradient');
    $('.button').attr('href', '#contenu_principal');

});

$('.livre_link').click(function() {

    $('nav, .navicon_off, .image_granulats, .environnement, .engagement, .legislation, .sante, .technique, .transport, .developpement, .vie, .europe').css('display', 'none');
    $('.livre, .navicon_on').css('display', 'block');
    $('.contenu').removeClass('green_gradient');
    $('.contenu').removeClass('lightblue_gradient');
    $('.contenu').removeClass('yellow_gradient');
    $('.contenu').removeClass('orange_gradient');
    $('.contenu').removeClass('violet_gradient');
    $('.contenu').removeClass('blue_gradient');
    $('.contenu').removeClass('grayblue_gradient');
    $('.contenu').removeClass('pastelblue_gradient');
    $('.contenu').removeClass('gray_gradient');
    $('.contenu').removeClass('bluegreen_gradient');
    $('.contenu').addClass('grayblue_gradient');
    $('.button').attr('href', '#contenu_principal');

});

$('.developpement_link').click(function() {

    $('nav, .navicon_off, .image_granulats, .environnement, .engagement, .legislation, .sante, .technique, .transport, .livre, .vie, .europe').css('display', 'none');
    $('.developpement, .navicon_on').css('display', 'block');
    $('.contenu').removeClass('green_gradient');
    $('.contenu').removeClass('lightblue_gradient');
    $('.contenu').removeClass('yellow_gradient');
    $('.contenu').removeClass('orange_gradient');
    $('.contenu').removeClass('violet_gradient');
    $('.contenu').removeClass('blue_gradient');
    $('.contenu').removeClass('grayblue_gradient');
    $('.contenu').removeClass('pastelblue_gradient');
    $('.contenu').removeClass('gray_gradient');
    $('.contenu').removeClass('bluegreen_gradient');
    $('.contenu').addClass('pastelblue_gradient');
    $('.button').attr('href', '#contenu_principal');

});

$('.vie_link').click(function() {

    $('nav, .navicon_off, .image_granulats, .environnement, .engagement, .legislation, .sante, .technique, .transport, .livre, .developpement, .europe').css('display', 'none');
    $('.vie, .navicon_on').css('display', 'block');
    $('.contenu').removeClass('green_gradient');
    $('.contenu').removeClass('lightblue_gradient');
    $('.contenu').removeClass('yellow_gradient');
    $('.contenu').removeClass('orange_gradient');
    $('.contenu').removeClass('violet_gradient');
    $('.contenu').removeClass('blue_gradient');
    $('.contenu').removeClass('grayblue_gradient');
    $('.contenu').removeClass('pastelblue_gradient');
    $('.contenu').removeClass('gray_gradient');
    $('.contenu').removeClass('bluegreen_gradient');
    $('.contenu').addClass('gray_gradient');
    $('.button').attr('href', '#contenu_principal');

});

$('.europe_link').click(function() {

    $('nav, .navicon_off, .image_granulats, .environnement, .engagement, .legislation, .sante, .technique, .transport, .livre, .developpement, .vie').css('display', 'none');
    $('.europe, .navicon_on').css('display', 'block');
    $('.contenu').removeClass('green_gradient');
    $('.contenu').removeClass('lightblue_gradient');
    $('.contenu').removeClass('yellow_gradient');
    $('.contenu').removeClass('orange_gradient');
    $('.contenu').removeClass('violet_gradient');
    $('.contenu').removeClass('blue_gradient');
    $('.contenu').removeClass('grayblue_gradient');
    $('.contenu').removeClass('pastelblue_gradient');
    $('.contenu').removeClass('gray_gradient');
    $('.contenu').removeClass('bluegreen_gradient');
    $('.contenu').addClass('bluegreen_gradient');
    $('.button').attr('href', '#contenu_principal');

});

});
