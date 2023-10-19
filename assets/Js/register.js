$(document).ready(function () {
    var current_fs, next_fs, previous_fs;
    var animating;
  
    $(".next").click(function () {
      if (animating) return false;
      animating = true;
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      next_fs.show();
      current_fs.hide();
      animating = false;
    });
  
    $(".submit").click(function () {
      if (animating) return false;
      animating = true;
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      next_fs.show();
      current_fs.hide();
      animating = false;
    });
  
    $(".previous").click(function () {
      if (animating) return false;
      animating = true;
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
      previous_fs.show();
      current_fs.hide();
      animating = false;
    });
  });
  