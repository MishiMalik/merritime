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
    $(".backdrop").css("display","block");
    $("body").css("overflow-y","hidden");
});
$(".close-side").on("click",function(){
    $(".navbar-toggler-icon").css("display","block");
    $(this).css("display","none");
    $(".navbar-collapse").css("left","-300px");
    $(".backdrop").css("display","none");
    $("body").css("overflow-y","auto");
})
//   =============================================chat
$(".chat-btn").on("click", function () {
  $(".chat__popup").css("bottom", "30px");
});
$(".close-chat").on("click", function () {
  $(".chat__popup").css("bottom", "-700px");
});