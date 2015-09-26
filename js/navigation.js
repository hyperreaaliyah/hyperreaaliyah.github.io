var main = function() {

  var width = window.innerWidth;
  var height = window.innerHeight;

  var menuShow = 0;
  var projectShow = 0;
  var bioLinksShow = 0;

  
  $('.menu').css("height", height);
  
  $('.project').css("min-height", height);
  
  $('.links').css("min-height", height);


  $('.goToMenu').click(function() {

    if (menuShow === 0) {

      $('.menu').animate({
      left: "0px"
      }, 600);
      $(this).fadeTo('fast', 0.5);

      $('.main').animate({
      left: width
      }, 600);
      $(this).fadeTo('fast', 0.5);

      menuShow = 1;

    }

  });

  $('.bubble').click(function() {

    if (projectShow === 0) {

      $('.project').animate({
      left: "0px"
      }, 600);
      $(this).fadeTo('fast', 0.5);

      $('.main').animate({
      left: -width
      }, 600);
      $(this).fadeTo('fast', 0.5);

      projectShow = 1;

    }

  });

  $('.navi').click(function() {

    $('.menu').animate({
    left: width
    }, 600);
    $(this).fadeTo('slow', 0.9);

    $('.links').animate({
    left: "0px"
    }, 600);
    $(this).fadeTo('fast', 0.9);

    bioLinksShow = 1;

  });


  $('.backButton').click(function() {

    
    if (menuShow === 1) { //ollaan menussa--> takaisin keskisivulle

      $('.menu').animate({
      left: -width
      }, 600);
      $(this).fadeTo('slow', 0.9);

      $('.main').animate({
      left: "0px"
      }, 600);
      $(this).fadeTo('slow', 0.9);

      menuShow = 0;

    } else if (projectShow === 1) { // ollaan projektissa

      $('.project').animate({
      left: width
      }, 600);
      $(this).fadeTo('fast', 0.5);

      $('.main').animate({
      left: 0
      }, 600);
      $(this).fadeTo('fast', 0.5);

      projectShow = 0;

    }

  });

  $('.backButton_2').click(function() {

    
    if (bioLinksShow === 1) { //ollaan biolinkseissä --> takaisin menuun

      $('.links').animate({
      left: -width
      }, 600);
      $(this).fadeTo('slow', 0.9);

      $('.menu').animate({
      left: "0px"
      }, 600);
      $(this).fadeTo('slow', 0.9);

      menuShow = 1;
      bioLinksShow = 0;

    }

  });


}

$(document).ready(main);