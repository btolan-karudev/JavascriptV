var qselec = document.querySelector("h1");

qselec.style.color = "pink";

console.log(qselec);

var body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
    if (isBlue) {
        body.style.background = "white";
    } else {
        body.style.background = "#3498db";
    }
    isBlue = !isBlue;
}, 1000)