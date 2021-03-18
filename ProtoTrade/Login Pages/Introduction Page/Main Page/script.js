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