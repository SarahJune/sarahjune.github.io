var toggle = function() {
  window.onload = function(){
    document.getElementById('close').onclick = function(){
      document.getElementsByTagName('main')[0].classList.toggle("full");
    };
  };
