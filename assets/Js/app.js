const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===================================sidebat close
$(".navbar-toggler-icon").on("click",function(){
    $(".close-side").css("display","block");
    $(this).css("display","none");
    $(".navbar-collapse").css("left","0");
});
$(".close-side").on("click",function(){
    $(".navbar-toggler-icon").css("display","block");
    $(this).css("display","none");
    $(".navbar-collapse").css("left","-300px");
})
//   =============================================chat
$(".chat-btn").on("click", function () {
  $(".chat__popup").css("bottom", "30px");
});
$(".close-chat").on("click", function () {
  $(".chat__popup").css("bottom", "-700px");
});