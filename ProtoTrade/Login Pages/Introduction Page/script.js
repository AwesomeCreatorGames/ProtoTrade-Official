document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));
$('.launch-noti').on('click', function(e){
  e.preventDefault();
  $('body').addClass('notification-open');
  $('.notification').each(function(){
    $(this).addClass('open');
  })
})
$('.close').on('click', function(){
  $('.notification.open').each(function(){
    $(this).removeClass('open');
    $('body').removeClass('notification-open');
  })
})

$(function() {
  var chatWidget = (".chat-widget-container"),
      chatBox = $(".chat-box-container");
  
  $(chatWidget).click(function(e){
    
    e.preventDefault();
    
    $(chatBox).toggleClass("show");
    $(chatWidget).toggleClass("open");
  })
  
});

$('search1').click(function(){
  $('.pop-up').addClass('open');
});

$('.pop-up .close').click(function(){
  $('.pop-up').removeClass('open');
});
