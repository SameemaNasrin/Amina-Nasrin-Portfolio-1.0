var meteor1 = document.getElementById("meteor1")
var meteor2 = document.getElementById("meteor2")
var winHeight = window.innerHeight;
var winWidth = window.innerWidth;

function meteorShower(){
    var left1 = Math.floor(Math.random() * (winWidth - 0 + 1)) + 0;
    var top1 = Math.floor(Math.random() * (winHeight - 0 + 1)) + 0;
    var left2 = Math.floor(Math.random() * (winWidth - 0 + 1)) + 0;
    var top2 = Math.floor(Math.random() * (winHeight - 0 + 1)) + 0;
    meteor1.style.left = left1 + "px";
    meteor1.style.top = top1 + "px";
    meteor2.style.left = left2 + "px";
    meteor2.style.top = top2 + "px";
}

setInterval(meteorShower, 3000);