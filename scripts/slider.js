'use strict';
var numberOfSlides = 22;
var number = Math.floor(Math.random() * numberOfSlides) + 1;
var timer1 = 0;
var timer2 = 0;

function setSlide(noSlide) {
    clearTimeout(timer1);
    clearTimeout(timer2);
    number = noSlide - 1;
    hideSlide();
    setTimeout(changeSlide, 500);
}

function hideSlide() {
    $("#slider").fadeOut(500);
}

function changeSlide() {
    number++;
    if (number > numberOfSlides) {
        number = 1;
    };
    var file = `<img src="../images/slides/slide${number}.jpg"/>`;
    $("#slider").html(file);
    $("#slider").fadeIn(500);
    timer1 = setTimeout(changeSlide, 5000);
    timer2 = setTimeout(hideSlide, 4500);
}

function publishSlideMenu() {
    var menu = "";
    for (var i = 1; i <= numberOfSlides; i++) {
        menu += `<span class="imagesG" onclick="setSlide(${i})" >[${i}]</span>`;
    }
    $("#slideMenu").html(menu);
}

$(document).ready(function () {
    publishSlideMenu();
    changeSlide();
}); 