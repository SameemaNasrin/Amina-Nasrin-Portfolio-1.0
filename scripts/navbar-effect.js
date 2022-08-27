//NAV BAR EFFECT
var screenHeight = screen.height;
var element = document.getElementById("nav-bar");
window.onscroll = function(e) {
  var currentScrollPos = window.pageYOffset + 200;
  if (currentScrollPos > screenHeight) {
    element.style.visibility = "visible";
    element.classList.add("show-nav");
  }
   else{
        element.style.visibility = "hidden";
        element.classList.remove("show-nav");
  }
}