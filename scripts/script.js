let editButton = document.querySelector(".profile__button_edit");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let popupContainer = document.querySelector(".popup");
let popupForm = document.querySelector(".popup__form");
let popupFieldName = document.querySelector("#name");
let popupFieldJob = document.querySelector("#job");
let saveButton = document.querySelector(".popup__button_save");
let closeButton = document.querySelector(".popup__button_close");

editButton.addEventListener("click", function () {
  popupContainer.classList.add("popup_opened");
  popupFieldName.value = profileName.textContent;
  popupFieldJob.value = profileJob.textContent;
});

popupForm.addEventListener("submit", (evt) => {
  profileName.textContent = popupFieldName.value;
  profileJob.textContent = popupFieldJob.value;
  closePopup();
  evt.preventDefault();
});

function closePopup() {
  popupContainer.classList.remove("popup_opened");
}

closeButton.addEventListener("click", function () {
  closePopup();
});
