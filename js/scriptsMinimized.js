var addedToCartPopup=document.querySelector(".popup-added-to-cart"),addedToCartPopupLinks=document.querySelectorAll(".add-to-cart"),backToShopping=document.querySelector(".popup-added-to-cart-continue-shopping-button"),addedToCartPopupClose=document.querySelector(".popup-added-to-cart-close-button");for(let a of addedToCartPopupLinks)a.onclick=function(a){a.preventDefault(),addedToCartPopup.classList.add("popup-added-to-cart-show")};backToShopping.onclick=function(a){a.preventDefault(),addedToCartPopup.classList.remove("popup-added-to-cart-show")},addedToCartPopupClose.onclick=function(a){a.preventDefault(),addedToCartPopup.classList.remove("popup-added-to-cart-show")},window.addEventListener("keydown",function(a){27===a.keyCode&&addedToCartPopup.classList.contains("popup-added-to-cart-show")&&(a.preventDefault(),addedToCartPopup.classList.remove("popup-added-to-cart-show"))});var feedbackLink=document.querySelector(".address-column-button"),feedbackFormPopup=document.querySelector(".feedback-form-popup"),feedbackFormClose=document.querySelector(".feedback-form-close-button"),feedbackFormNameField=document.querySelector(".name-field"),feedbackFormEmailField=document.querySelector(".email-field"),feedbackFormMessageField=document.querySelector(".message-field"),feedbackForm=document.querySelector(".feedback-form"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("name")}catch(a){isStorageSupport=!1}feedbackLink.addEventListener("click",function(a){a.preventDefault(),feedbackFormPopup.classList.add("feedback-form-popup-show"),feedbackFormNameField.focus(),storage?(feedbackFormNameField.value=storage,feedbackFormEmailField.focus()):feedbackFormNameField.focus()}),feedbackFormClose.addEventListener("click",function(a){a.preventDefault(),feedbackFormPopup.classList.remove("feedback-form-popup-show"),feedbackFormPopup.classList.remove("feedback-form-popup-error")}),feedbackForm.addEventListener("submit",function(a){feedbackFormNameField.value&&feedbackFormEmailField.value&&feedbackFormMessageField.value?isStorageSupport&&localStorage.setItem("name",feedbackFormNameField.value):(a.preventDefault(),feedbackFormPopup.classList.remove("feedback-form-popup-error"),feedbackFormPopup.offsetWidth=feedbackFormPopup.offsetWidth,feedbackFormPopup.classList.add("feedback-form-popup-error"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&feedbackFormPopup.classList.contains("feedback-form-popup-show")&&(a.preventDefault(),feedbackFormPopup.classList.remove("feedback-form-popup-show"),feedbackFormPopup.classList.remove("feedback-form-popup-error"))});var rightArrow=document.querySelector(".slider-controls-middle-button-right"),leftArrow=document.querySelector(".slider-controls-middle-button-left"),sliderDots=document.querySelectorAll(".slider-controls-bottom-button"),slideOne=document.querySelector(".slide-one"),slideTwo=document.querySelector(".slide-two");rightArrow.addEventListener("click",function(a){a.preventDefault,slideOne.classList.remove("slide-current"),sliderDots[0].classList.remove("slider-controls-bottom-current"),slideTwo.classList.add("slide-current"),sliderDots[1].classList.add("slider-controls-bottom-current")}),leftArrow.addEventListener("click",function(a){a.preventDefault,slideTwo.classList.remove("slide-current"),sliderDots[1].classList.remove("slider-controls-bottom-current"),slideOne.classList.add("slide-current"),sliderDots[0].classList.add("slider-controls-bottom-current")}),sliderDots[1].addEventListener("click",function(a){a.preventDefault,slideOne.classList.remove("slide-current"),sliderDots[0].classList.remove("slider-controls-bottom-current"),slideTwo.classList.add("slide-current"),sliderDots[1].classList.add("slider-controls-bottom-current")}),sliderDots[0].addEventListener("click",function(a){a.preventDefault,slideTwo.classList.remove("slide-current"),sliderDots[1].classList.remove("slider-controls-bottom-current"),slideOne.classList.add("slide-current"),sliderDots[0].classList.add("slider-controls-bottom-current")});var mapLink=document.querySelector(".address-column-map"),mapPopup=document.querySelector(".popup-map"),mapClose=document.querySelector(".popup-map-close-button");mapLink.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.add("popup-map-show")}),mapClose.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.remove("popup-map-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&mapPopup.classList.contains("popup-map-show")&&(a.preventDefault(),mapPopup.classList.remove("popup-map-show"))});var serviceTypes=document.querySelectorAll(".service-type"),deliveryService=document.querySelector(".delivery-service"),guaranteeService=document.querySelector(".guarantee-service"),creditService=document.querySelector(".credit-service");serviceTypes[0].addEventListener("click",function(a){a.preventDefault(),serviceTypes[0].classList.add("sevice-type-selected"),serviceTypes[1].classList.remove("sevice-type-selected"),serviceTypes[2].classList.remove("sevice-type-selected"),deliveryService.classList.add("delivery-service-show"),guaranteeService.classList.remove("guarantee-service-show"),creditService.classList.remove("credit-service-show")}),serviceTypes[1].addEventListener("click",function(a){a.preventDefault(),serviceTypes[0].classList.remove("sevice-type-selected"),serviceTypes[1].classList.add("sevice-type-selected"),serviceTypes[2].classList.remove("sevice-type-selected"),deliveryService.classList.remove("delivery-service-show"),guaranteeService.classList.add("guarantee-service-show"),creditService.classList.remove("credit-service-show")}),serviceTypes[2].addEventListener("click",function(a){a.preventDefault(),serviceTypes[0].classList.remove("sevice-type-selected"),serviceTypes[1].classList.remove("sevice-type-selected"),serviceTypes[2].classList.add("sevice-type-selected"),deliveryService.classList.remove("delivery-service-show"),guaranteeService.classList.remove("guarantee-service-show"),creditService.classList.add("credit-service-show")});