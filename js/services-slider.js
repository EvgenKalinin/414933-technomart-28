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