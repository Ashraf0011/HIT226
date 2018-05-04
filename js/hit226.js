$(function(){
  $('ul.parent > li').hover(function(){
    $(this).find('ul.child').show(600);
  }, function(){
    $(this).find('ul.child').hide(600);
  });
});
