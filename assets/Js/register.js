$(document).ready(function () {
    var current_fs, next_fs, previous_fs;
    var animating;
  
    function validateStepFields(step) {
      var requiredFields = step.find('[required]');
      var isValid = true;
  
      for (var i = 0; i < requiredFields.length; i++) {
        if (!requiredFields[i].checkValidity()) {
          isValid = false;
          $(requiredFields[i]).css('background-color', 'pink'); // Change background color
        } else {
          $(requiredFields[i]).css('background-color', ''); // Reset background color
        }
      }
  
      return isValid;
    }
  
    $("#progressbar li").click(function () {
        if (animating) return false;
        if (!$(this).hasClass("active")) return false; // Check for the "active" class
        animating = true;
    
        var stepIndex = $(this).index(); // Get the index of the clicked li
        current_fs = $("fieldset:visible");
        next_fs = $("fieldset:eq(" + stepIndex + ")");
    
        if (stepIndex < $("fieldset").index(current_fs)) {
          current_fs.hide();
          next_fs.show();
        } else if (stepIndex > $("fieldset").index(current_fs)) {
          next_fs.show();
          current_fs.hide();
        }
    
        animating = false;
      });


    $(".next").click(function () {
      if (animating) return false;
      animating = true;
      current_fs = $(this).closest("fieldset");
      next_fs = current_fs.next();
  
      if (!validateStepFields(current_fs)) {
        animating = false;
        return;
      }
  
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      next_fs.show();
      current_fs.hide();
      animating = false;
    });
  
    $(".submit").click(function () {
      if (animating) return false;
      animating = true;
      current_fs = $("fieldset:visible");
      next_fs = current_fs.next();
      if (!validateStepFields(current_fs)) {
        animating = false;
        return;
      }
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      next_fs.show();
      current_fs.hide();
      animating = false;
    });
  
    $(".previous").click(function () {
      if (animating) return false;
      animating = true;
      current_fs = $(this).closest("fieldset");
      previous_fs = current_fs.prev();
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
      previous_fs.show();
      current_fs.hide();
      animating = false;
    });
  });
  