let editButton = document.querySelector(".profile__button_edit");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let popupContainer = document.querySelector(".popup-bg");
let popupForm = document.querySelector(".popup__form");
let popupFieldName = document.querySelector("#name");
let popupFieldJob = document.querySelector("#job");
let saveButton = document.querySelector(".popup__button_save");
let closeButton = document.querySelector(".popup__button_close");

function openPopup() {
  editButton.addEventListener("click", function () {
    popupContainer.classList.add("popup_opened");
    closeButton.classList.add("popup_opened");
  });
}
openPopup();

popupForm.addEventListener("click", () => {
  function formSubmitHandler(evt) {
    profileName.textContent = popupFieldName.value;
    profileJob.textContent = popupFieldJob.value;
    evt.preventDefault();
  }
  popupForm.addEventListener("submit", formSubmitHandler);
});

function closePopup() {
  popupContainer.classList.remove("popup_opened");
  closeButton.classList.remove("popup_opened");
}

closeButton.addEventListener("click", function () {
  closePopup();
});

saveButton.addEventListener("click", function () {
  closePopup();
});
