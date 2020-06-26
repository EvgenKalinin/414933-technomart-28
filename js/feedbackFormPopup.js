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
