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