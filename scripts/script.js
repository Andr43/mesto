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
  popupFieldName.value = "Жак-Ив Кусто";
  popupFieldJob.value = "Исследователь океана";
});

popupForm.addEventListener("submit", () => {
  profileName.textContent = popupFieldName.value;
  profileJob.textContent = popupFieldJob.value;
  saveButton.addEventListener("click", function () {
    closePopup();
  });
  preventDefault();
});

function closePopup() {
  popupContainer.classList.remove("popup_opened");
}

closeButton.addEventListener("click", function () {
  closePopup();
});
