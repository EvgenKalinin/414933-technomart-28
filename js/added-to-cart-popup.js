var addedToCartPopup = document.querySelector(".popup-added-to-cart");
var addedToCartPopupLinks = document.querySelectorAll(".add-to-cart");
var backToShopping = document.querySelector(".popup-added-to-cart-continue-shopping-button");
var addedToCartPopupClose = document.querySelector(".popup-added-to-cart-close-button");

for (let addedToCartPopupLink of addedToCartPopupLinks) {
    addedToCartPopupLink.onclick = function (evt) {
        evt.preventDefault();
        addedToCartPopup.classList.add("popup-added-to-cart-show");
    };
}

backToShopping.onclick = function (evt) {
    evt.preventDefault();
    addedToCartPopup.classList.remove("popup-added-to-cart-show");
};

addedToCartPopupClose.onclick = function (evt) {
   evt.preventDefault();
   addedToCartPopup.classList.remove("popup-added-to-cart-show");
};

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (addedToCartPopup.classList.contains("popup-added-to-cart-show")) {
            evt.preventDefault();
            addedToCartPopup.classList.remove("popup-added-to-cart-show");
        }
    }
});

