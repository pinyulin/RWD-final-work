$(document).ready(function () {
  $('.menulist a').click(function (e) { 
    e.preventDefault();
    var id = $(this).attr('data-id');
    var target_top = $('#area'+id).offset().top;
    $('html,body').animate({
      scrollTop: target_top
    }, 500);
  });
  $('.hambutton').click(function (e) { 
    e.preventDefault();
    $('body').toggleClass('showhammenu');
    $('body').toggleClass('fadeslogan');
  });
  $('.openterms').click(function (e) { 
    e.preventDefault();
    $('body').toggleClass('showterms');
  });
  $('.fa-heart').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('fas');
    $(this).toggleClass('far');
  });
});