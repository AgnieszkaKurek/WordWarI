'use strict';

var number = Math.floor(Math.random() * 21) + 1;
var timer1 = 0;
var timer2 = 0;

function setSlide(noSlide) {
    clearTimeOut(timer1);
    clearTimeOut(timer2);
    number = noSlide - 1;
    hide();
    setTimeOut("changeSlide()", 500);
}

function hide() {
    $("#slider").fadeOut(500);
}

function changeSlide() {
    number++;
    if (number > 21) {
        number = 0;
    };
    var file = `<img src="../images/slides/slide${number}.jpg"/>`;
    document.getElementById("slider").innerHTML = file;
    $("#slider").fadeIn(500);
    timer1 = setTimeOut("changeSlide()", 5000);
    timer2 = setTimeOut("hide()", 4500);
}