$(document).ready(function(){

var screenWidth = window.innerWidth ;

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

$('.navicon_off, .environnement_link').click(function() {
    $('.conteneur_site').css('transform', 'translate(0px)');
    $('.conteneur_site').fadeTo(0, 1);
    $('.conteneur_site').removeAttr('style');
    $('body').css('overflow-y', 'auto');
    $('.nav_responsive_bar').css('transform', 'translate(-100%)');
    $('.navicon_on, nav, .image_granulats').css('display', 'block').fadeIn(800);
    $('.navicon_off, .environnement, .engagement, .legislation, .sante, .technique, .transport, .livre, .developpement, .vie, .europe').css('display', 'none').fadeOut(800);
    $('.navicon').css('animation-name', 'navicon_off');
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
    if (screenWidth > '420' && screenWidth < '800') {
      $('.contenu').css('display', 'none');
    }
    /***$('.button').attr('href', '#accueil');

      if(mouseScroll < $('.chiffres').offset().top - ($(window).height() / 1.2)) {

      $('.chiffres').each(function(i){

         $('.navicon_on, nav, .image_granulats').css('display', 'block');
         $('.navicon_off, .environnement, .engagement, .legislation, .sante, .technique, .transport, .livre, .developpement, .vie, .europe').css('display', 'none');
         $('.navicon').css('animation-name', 'navicon_off');
         $('.contenu').removeClass('green_gradient');

      });

    }***/


});



/* Nav slideleft menu */

$('.environnement_link').click(function() {

    $('nav, .navicon_on, .image_granulats').css('display', 'none');
    $('.environnement, .navicon_off').css('display', 'block');
    $('.contenu').addClass('green_gradient');
    $('.button').attr('href', '#contenu_principal');
    if (screenWidth > '420' && screenWidth < '800') {
      $('.contenu').css('display', 'block');
    }

});

$('.engagement_link').click(function() {

    $('nav, .navicon_on, .image_granulats').css('display', 'none');
    $('.engagement, .navicon_off').css('display', 'block');
    $('.contenu').addClass('lightblue_gradient');
    $('.button').attr('href', '#contenu_principal');
    if (screenWidth > '420' && screenWidth < '800') {
      $('.contenu').css('display', 'block');
    }

});

$('.legislation_link').click(function() {

    $('nav, .navicon_on, .image_granulats').css('display', 'none');
    $('.legislation, .navicon_off').css('display', 'block');
    $('.contenu').addClass('yellow_gradient');
    $('.button').attr('href', '#contenu_principal');
    if (screenWidth > '420' && screenWidth < '800') {
      $('.contenu').css('display', 'block');
    }
});

$('.sante_link').click(function() {

    $('nav, .navicon_on, .image_granulats').css('display', 'none');
    $('.sante, .navicon_off').css('display', 'block');
    $('.contenu').addClass('orange_gradient');
    $('.button').attr('href', '#contenu_principal');
    if (screenWidth > '420' && screenWidth < '800') {
      $('.contenu').css('display', 'block');
    }

});

$('.technique_link').click(function() {

    $('nav, .navicon_on, .image_granulats').css('display', 'none');
    $('.technique, .navicon_off').css('display', 'block');
    $('.contenu').addClass('violet_gradient');
    $('.button').attr('href', '#contenu_principal');
    if (screenWidth > '420' && screenWidth < '800') {
      $('.contenu').css('display', 'block');
    }

});

$('.transport_link').click(function() {

    $('nav, .navicon_on, .image_granulats').css('display', 'none');
    $('.transport, .navicon_off').css('display', 'block');
    $('.contenu').addClass('blue_gradient');
    $('.button').attr('href', '#contenu_principal');
    if (screenWidth > '420' && screenWidth < '800') {
      $('.contenu').css('display', 'block');
    }

});

$('.livre_link').click(function() {

    $('nav, .navicon_on, .image_granulats').css('display', 'none');
    $('.livre, .navicon_off').css('display', 'block');
    $('.contenu').addClass('grayblue_gradient');
    $('.button').attr('href', '#contenu_principal');
    if (screenWidth > '420' && screenWidth < '800') {
      $('.contenu').css('display', 'block');
    }

});

$('.developpement_link').click(function() {

    $('nav, .navicon_on, .image_granulats').css('display', 'none');
    $('.developpement, .navicon_off').css('display', 'block');
    $('.contenu').addClass('pastelblue_gradient');
    $('.button').attr('href', '#contenu_principal');
    if (screenWidth > '420' && screenWidth < '800') {
      $('.contenu').css('display', 'block');
    }

});

$('.vie_link').click(function() {

    $('nav, .navicon_on, .image_granulats').css('display', 'none');
    $('.vie, .navicon_off').css('display', 'block');
    $('.contenu').addClass('gray_gradient');
    $('.button').attr('href', '#contenu_principal');
    if (screenWidth > '420' && screenWidth < '800') {
      $('.contenu').css('display', 'block');
    }

});

$('.europe_link').click(function() {

    $('nav, .navicon_on, .image_granulats').css('display', 'none');
    $('.europe, .navicon_off').css('display', 'block');
    $('.contenu').addClass('bluegreen_gradient');
    $('.button').attr('href', '#contenu_principal');
    if (screenWidth > '420' && screenWidth < '800') {
      $('.contenu').css('display', 'block');
    }

});

});
