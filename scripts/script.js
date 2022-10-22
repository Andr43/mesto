const btnOpenPopupEditProfile = document.querySelector(".profile__button_edit");
const btnOpenPopupAddCard = document.querySelector(".profile__button_add");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupContainer = document.querySelectorAll(".popup");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupAddCard = document.querySelector(".popup_type_add");
const popupImage = document.querySelector(".popup-image");
const formEditProfile = document.querySelector(".popup__form_edit");
const formAddCard = document.querySelector(".popup__form_add");
const popupField = document.querySelector(".popup__field");
const popupFieldName = document.querySelector(".popup__field_name");
const popupFieldJob = document.querySelector(".popup__field_job");
const popupFieldHeading = document.querySelector(".popup__field_heading");
const popupFieldSource = document.querySelector(".popup__field_source");
const saveButton = document.querySelector(".popup__button_save");
const saveButtonAdd = document.querySelector(".popup__button_save_add");
const closeButtonEdit = document.querySelector(".popup__button_close_edit");
const closeButtonAdd = document.querySelector(".popup__button_close_add");
const popupImageBig = document.querySelector(".popup-image__image");
const popupHeadingBig = document.querySelector(".popup-image__heading");
const popupError = document.querySelector(".popup__error");
const elementsList = document.querySelector(".elements__list");
const elementsTemplate = document.querySelector(".card").content;

// код, открывающий и закрывающий окно изменения профиля, а также меняющий данные профиля
function openPopup(popup) {
  popup.classList.add("popup_opened");
 document.addEventListener("keydown", pressEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", pressEsc);
}

function pressEsc(esc) {
  if (esc.key === "Escape" || esc.key === "Esc") {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened);
  }
}

btnOpenPopupEditProfile.addEventListener("click", function () {
  popupFieldName.value = profileName.textContent;
  popupFieldJob.value = profileJob.textContent;
  openPopup(popupEditProfile);
});

formEditProfile.addEventListener("submit", (evt) => {
  profileName.textContent = popupFieldName.value;
  profileJob.textContent = popupFieldJob.value;
  closePopup(popupEditProfile);
  evt.preventDefault();
});

closeButtonEdit.addEventListener("click", function () {
  closePopup(popupEditProfile);
});

btnOpenPopupAddCard.addEventListener("click", function () {
  openPopup(popupAddCard);
  formAddCard.reset();
  saveButtonAdd.setAttribute('disabled', true);
  saveButtonAdd.classList.add('popup__button_invalid'); 
});

closeButtonAdd.addEventListener("click", function () {
  closePopup(popupAddCard);
});
// _______________________________________________________________________

// код, открывающий и закрывающий окно добавления карточек, а также удаляющий карточки, добавляющий карточки в избранное

function createCard(text, link) {
  const newElement = elementsTemplate
    .querySelector(".card__element")
    .cloneNode(true);
  const headingElement = newElement.querySelector(".card__heading");
  const imageElement = newElement.querySelector(".card__image");
  headingElement.textContent = text;
  imageElement.alt = text;
  imageElement.src = link;
  imageElement.addEventListener("click", () => openImagePopup(text, link));
  setListenersForInitialCards(newElement);
  return newElement;
}

function setListenersForInitialCards(element) {
  const likeButton = element.querySelector(".card__button_like");
  likeButton.addEventListener("click", () => likeButtonToggle(likeButton));
  const deleteButton = element.querySelector(".card__button_delete");
  deleteButton.addEventListener("click", () => deleteElement(deleteButton));
  const closeButtonImage = document.querySelector(".popup-image__button");
  closeButtonImage.addEventListener("click", () => closePopup(popupImage));
}

function deleteElement(button) {
  const elementItem = button.closest(".card__element");
  elementItem.remove();
}

function likeButtonToggle(button) {
  button.classList.toggle("card__button_like_active");
}

function openImagePopup(name, link) {
  openPopup(popupImage);
  popupImageBig.src = link;
  popupImageBig.alt = name;
  popupHeadingBig.textContent = name;
}

function renderInitialCards(card) {
  card.forEach((element) => {
    elementsList.append(createCard(element.name, element.link));
  });
}

renderInitialCards(initialCards);

function submitAddCardForm(evt) {
  elementsList.prepend(
    createCard(popupFieldHeading.value, popupFieldSource.value)
  );
  evt.preventDefault();
  closePopup(popupAddCard);
}

formAddCard.addEventListener("submit", submitAddCardForm);

// код, закрывающий попап при клике на оверлей

popupContainer.forEach((popupElement) => {
  popupElement.addEventListener("mousedown", (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(popupElement);
    }
  });
});