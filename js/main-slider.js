var rightArrow = document.querySelector(".slider-controls-middle-button-right");
var leftArrow = document.querySelector(".slider-controls-middle-button-left");
var sliderDots = document.querySelectorAll(".slider-controls-bottom-button");
var slideOne = document.querySelector(".slide-one");
var slideTwo = document.querySelector(".slide-two");

rightArrow.addEventListener("click", function (evt) {
    evt.preventDefault;
    slideOne.classList.remove("slide-current");
    sliderDots[0].classList.remove("slider-controls-bottom-current");
    slideTwo.classList.add("slide-current");
    sliderDots[1].classList.add("slider-controls-bottom-current");
});

leftArrow.addEventListener("click", function (evt) {
    evt.preventDefault;
    slideTwo.classList.remove("slide-current");
    sliderDots[1].classList.remove("slider-controls-bottom-current");
    slideOne.classList.add("slide-current");
    sliderDots[0].classList.add("slider-controls-bottom-current");
});

sliderDots[1].addEventListener("click", function (evt) {
    evt.preventDefault;
    slideOne.classList.remove("slide-current");
    sliderDots[0].classList.remove("slider-controls-bottom-current");
    slideTwo.classList.add("slide-current");
    sliderDots[1].classList.add("slider-controls-bottom-current");
});

sliderDots[0].addEventListener("click", function (evt) {
    evt.preventDefault;
    slideTwo.classList.remove("slide-current");
    sliderDots[1].classList.remove("slider-controls-bottom-current");
    slideOne.classList.add("slide-current");
    sliderDots[0].classList.add("slider-controls-bottom-current");
});
