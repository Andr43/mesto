const editButton = document.querySelector(".profile__button_edit");
const addButton = document.querySelector(".profile__button_add");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupContainer = document.querySelector(".popup");
const popupEdit = document.querySelector(".popup__edit");
const popupAdd = document.querySelector(".popup__add");
const popupImage = document.querySelector(".popup-image");
const popupFormEdit = document.querySelector(".popup__form_edit");
const popupFormAdd = document.querySelector(".popup__form_add");
const popupFieldName = document.querySelector(".popup__field_name");
const popupFieldJob = document.querySelector(".popup__field_job");
const popupFieldHeading = document.querySelector(".popup__field_heading");
const popupFieldSource = document.querySelector(".popup__field_source");
const saveButton = document.querySelector(".popup__button_save");
const closeButtonEdit = document.querySelector(".popup__button_close_edit");
const closeButtonAdd = document.querySelector(".popup__button_close_add");

// код, открывающий и закрывающий окно изменения профиля, а также меняющий данные профиля
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

editButton.addEventListener("click", function () {
  openPopup(popupEdit);
  popupFieldName.value = profileName.textContent;
  popupFieldJob.value = profileJob.textContent;
});

popupFormEdit.addEventListener("submit", (evt) => {
  profileName.textContent = popupFieldName.value;
  profileJob.textContent = popupFieldJob.value;
  closePopup(popupEdit);
  evt.preventDefault();
});

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

closeButtonEdit.addEventListener("click", function () {
  closePopup(popupEdit);
});

addButton.addEventListener("click", function () {
  openPopup(popupAdd);
});

closeButtonAdd.addEventListener("click", function () {
  closePopup(popupAdd);
});
// _______________________________________________________________________

// код, открывающий и закрывающий окно добавления карточек, а также удаляющий карточки, добавляющий карточки в избранное
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const elementsList = document.querySelector(".elements__list");
const elementsTemplate = document.querySelector(".elements__template").content;

function renderElements(text, link) {
  const newElement = elementsTemplate
    .querySelector(".elements__element")
    .cloneNode(true);
  const headingElement = newElement.querySelector(".elements__heading");
  const imageElement = newElement.querySelector(".elements__image");
  headingElement.textContent = text;
  imageElement.src = link;
  imageElement.addEventListener("click", () => imagePopupOpen(text, link));
  setListenersForInitialCards(newElement);
  return newElement;
}

function setListenersForInitialCards(element) {
  const likeButton = element.querySelector(".elements__button_like");
  likeButton.addEventListener("click", () => likeButtonToggle(likeButton));
  const deleteButton = element.querySelector(".elements__button_delete");
  deleteButton.addEventListener("click", () => deleteElement(deleteButton));
  const closeButtonImage = document.querySelector(".popup-image__button");
  closeButtonImage.addEventListener("click", () => closePopup(popupImage));
}

function deleteElement(button) {
  const elementItem = button.closest(".elements__element");
  elementItem.remove();
}

function likeButtonToggle(button) {
  button.classList.toggle("elements__button_like_active");
}

function imagePopupOpen(name, link) {
  openPopup(popupImage);
  const popupImageBig = document.querySelector(".popup-image__image");
  const popupHeadingBig = document.querySelector(".popup-image__heading");
  popupImageBig.src = link;
  popupHeadingBig.textContent = name;
}

function renderCards(card) {
  card.forEach((element) => {
    elementsList.append(renderElements(element.name, element.link));
  });
}

renderCards(initialCards);

function createNewCard(evt) {
  elementsList.prepend(
    renderElements(popupFieldHeading.value, popupFieldSource.value)
  );
  evt.preventDefault();
  closePopup(popupAdd);
}

popupFormAdd.addEventListener("submit", createNewCard);

//___________________________________________________________________________
