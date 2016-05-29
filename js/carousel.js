$(document).ready(function() {
    $(".next-btn").on("click", function(e){
      var currentActiveComp = $(".comp-show");
      var nextActiveComp = currentActiveComp.next();
      if(nextActiveComp.length == 0)
      {
        nextActiveComp = $(".carousel-inner div").first();
      }
      currentActiveComp.removeClass("comp-show").addClass("comp-hide").css("z-index", -10);
      nextActiveComp.addClass("comp-show").removeClass("comp-hide").css("z-index", 20);
      $("carousel-inner div").not([currentActiveComp, nextActiveComp]).css("z-index", 1);
      e.preventDefault();

    });
    $(".previous-btn").on("click", function(e){
      var currentActiveComp = $(".comp-show");
      var nextActiveComp = currentActiveComp.prev();
      if(nextActiveComp.length == 0)
      {
        nextActiveComp = $(".carousel-inner div").last();
      }
      currentActiveComp.removeClass("comp-show").addClass("comp-hide").css("z-index", -10);
      nextActiveComp.addClass("comp-show").removeClass("comp-hide").css("z-index", 20);
      $(".carousel-inner div").not([currentActiveComp, nextActiveComp]).css("z-index", 1);
      e.preventDefault();
    })
  });
