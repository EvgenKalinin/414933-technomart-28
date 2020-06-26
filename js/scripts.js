/* Add to cart*/

var addedToCartPopup = document.querySelector(".popup-added-to-cart");
var addedToCartPopupLinks = document.querySelectorAll(".add-to-cart");
var backToShopping = document.querySelector(".popup-added-to-cart-continue-shopping-button");
var addedToCartPopupClose = document.querySelector(".popup-added-to-cart-close-button");

for (let addedToCartPopupLink of addedToCartPopupLinks) {
    addedToCartPopupLink.onclick = function (evt) {
        evt.preventDefault();
        addedToCartPopup.classList.add('popup-added-to-cart-show');
    };
};

backToShopping.onclick = function (evt) {
    evt.preventDefault();
    addedToCartPopup.classList.remove('popup-added-to-cart-show');
};

addedToCartPopupClose.onclick = function (evt) {
   evt.preventDefault();
   addedToCartPopup.classList.remove('popup-added-to-cart-show');
};

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (addedToCartPopup.classList.contains("popup-added-to-cart-show")) {
            evt.preventDefault();
            addedToCartPopup.classList.remove("popup-added-to-cart-show");
        }
    }
});

/* Feedback Popup */

var feedbackLink = document.querySelector(".address-column-button");
var feedbackFormPopup = document.querySelector(".feedback-form-popup");
var feedbackFormClose = document.querySelector(".feedback-form-close-button");
var feedbackFormNameField = document.querySelector(".name-field");
var feedbackFormEmailField = document.querySelector(".email-field");
var feedbackFormMessageField = document.querySelector(".message-field");
var feedbackForm = document.querySelector(".feedback-form");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackFormPopup.classList.add("feedback-form-popup-show");
    feedbackFormNameField.focus();

    if (storage) {
        feedbackFormNameField.value = storage;
        feedbackFormEmailField.focus();
    } else {
        feedbackFormNameField.focus();
    }
});

feedbackFormClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackFormPopup.classList.remove("feedback-form-popup-show");
    feedbackFormPopup.classList.remove("feedback-form-popup-error");
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackFormNameField.value || !feedbackFormEmailField.value || !feedbackFormMessageField.value) {
        evt.preventDefault();
        feedbackFormPopup.classList.remove("feedback-form-popup-error");
        feedbackFormPopup.offsetWidth = feedbackFormPopup.offsetWidth;
        feedbackFormPopup.classList.add("feedback-form-popup-error");
    } else {
        if (isStorageSupport) { 
            localStorage.setItem("name", feedbackFormNameField.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (feedbackFormPopup.classList.contains("feedback-form-popup-show")) {
            evt.preventDefault();
            feedbackFormPopup.classList.remove("feedback-form-popup-show");
            feedbackFormPopup.classList.remove("feedback-form-popup-error");
        }
    }
});

/* Main slider */

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

/* Map popup */

var mapLink = document.querySelector(".address-column-map");
var mapPopup = document.querySelector(".popup-map");
var mapClose = document.querySelector(".popup-map-close-button");

mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add('popup-map-show');
});

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("popup-map-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("popup-map-show")) {
            evt.preventDefault();
            mapPopup.classList.remove("popup-map-show");
        }
    }
});

/* Services slider */

var serviceTypes = document.querySelectorAll(".service-type");
var deliveryService = document.querySelector(".delivery-service");
var guaranteeService = document.querySelector(".guarantee-service");
var creditService = document.querySelector(".credit-service");

serviceTypes[0].addEventListener("click", function(evt) {
    evt.preventDefault();
    serviceTypes[0].classList.add("sevice-type-selected");
    serviceTypes[1].classList.remove("sevice-type-selected");
    serviceTypes[2].classList.remove("sevice-type-selected");
    deliveryService.classList.add("delivery-service-show");
    guaranteeService.classList.remove("guarantee-service-show");
    creditService.classList.remove("credit-service-show");
});

serviceTypes[1].addEventListener("click", function(evt) {
    evt.preventDefault();
    serviceTypes[0].classList.remove("sevice-type-selected");
    serviceTypes[1].classList.add("sevice-type-selected");
    serviceTypes[2].classList.remove("sevice-type-selected");
    deliveryService.classList.remove("delivery-service-show");
    guaranteeService.classList.add("guarantee-service-show");
    creditService.classList.remove("credit-service-show");
});

serviceTypes[2].addEventListener("click", function(evt) {
    evt.preventDefault();
    serviceTypes[0].classList.remove("sevice-type-selected");
    serviceTypes[1].classList.remove("sevice-type-selected");
    serviceTypes[2].classList.add("sevice-type-selected");
    deliveryService.classList.remove("delivery-service-show");
    guaranteeService.classList.remove("guarantee-service-show");
    creditService.classList.add("credit-service-show");
});