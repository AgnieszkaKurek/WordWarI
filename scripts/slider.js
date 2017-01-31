'use strict';

var number = Math.floor(Math.random() * 22) + 1;
var timer1 = 0;
var timer2 = 0;

 function setSlide(noSlide) {
      clearTimeout(timer1);
      clearTimeout(timer2);
      number = noSlide - 1;
      hide();
      setTimeout("changeSlide()", 500);
 }

function hide() {
    $("#slider").fadeOut(500);
}

function changeSlide() {
    number++;
    if (number > 22) {
        number = 1;
    };
    var file = `<img src="../images/slides/slide${number}.jpg"/>`;
    document.getElementById("slider").innerHTML = file;
    $("#slider").fadeIn(500);
    timer1 = setTimeout("changeSlide()", 5000);
    timer2 = setTimeout("hide()", 4500);
}