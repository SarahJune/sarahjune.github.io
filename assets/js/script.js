
  baguetteBox.run('.gallery', {
    buttons: 'auto',
    noScrollBars: 'true',
  });
  Image preview credit: https://feimosi.github.io/baguetteBox.js/

  window.onload = function(){
    document.getElementById('close').onclick = function(){
      document.getElementsByTagName('main')[0].classList.toggle("full");
    };
  };


var wrap = $("#wrap");
var nav= $("#nav");

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


function sticky() {
  if (this.scrollTop > 190) {
    nav.addClass("fix-nav");
  } else {
    nav.removeClass("fix-nav");
  }
        console.log("hi")

};

wrap.on("scroll", debounce(sticky, 50));
wrap.on("scroll", sticky);
