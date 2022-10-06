const btnOpenPopupEditProfile = document.querySelector(".profile__button_edit");
const btnOpenPopupAddCard = document.querySelector(".profile__button_add");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupContainer = document.querySelector(".popup");
const popupEditProfile = document.querySelector(".popup-edit");
const popupAddCard = document.querySelector(".popup-add");
const popupImage = document.querySelector(".popup-image");
const formEditProfile = document.querySelector(".popup__form_edit");
const formAddCard = document.querySelector(".popup__form_add");
const popupFieldName = document.querySelector(".popup__field_name");
const popupFieldJob = document.querySelector(".popup__field_job");
const popupFieldHeading = document.querySelector(".popup__field_heading");
const popupFieldSource = document.querySelector(".popup__field_source");
const saveButton = document.querySelector(".popup__button_save");
const closeButtonEdit = document.querySelector(".popup__button_close_edit");
const closeButtonAdd = document.querySelector(".popup__button_close_add");
const popupImageBig = document.querySelector(".popup-image__image");
const popupHeadingBig = document.querySelector(".popup-image__heading");

// код, открывающий и закрывающий окно изменения профиля, а также меняющий данные профиля
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

btnOpenPopupEditProfile.addEventListener("click", function () {
  openPopup(popupEditProfile);
  popupFieldName.value = '';
  popupFieldJob.value = '';
});

formEditProfile.addEventListener("submit", (evt) => {
  profileName.textContent = popupFieldName.value;
  profileJob.textContent = popupFieldJob.value;
  closePopup(popupEditProfile);
  evt.preventDefault();
});

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

closeButtonEdit.addEventListener("click", function () {
  closePopup(popupEditProfile);
});

btnOpenPopupAddCard.addEventListener("click", function () {
  openPopup(popupAddCard);
  popupFieldHeading.value = '';
  popupFieldSource.value = '';
});

closeButtonAdd.addEventListener("click", function () {
  closePopup(popupAddCard);
});
// _______________________________________________________________________

// код, открывающий и закрывающий окно добавления карточек, а также удаляющий карточки, добавляющий карточки в избранное

const elementsList = document.querySelector(".elements__list");
const elementsTemplate = document.querySelector(".elements__template").content;

function createCard(text, link) {
  const newElement = elementsTemplate
    .querySelector(".elements__element")
    .cloneNode(true);
  const headingElement = newElement.querySelector(".elements__heading");
  const imageElement = newElement.querySelector(".elements__image");
  headingElement.textContent = text;
  imageElement.src = link;
  imageElement.addEventListener("click", () => openImagePopup(text, link));
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

function openImagePopup(name, link) {
  openPopup(popupImage);
  popupImageBig.src = link;
  popupImageBig.alt = name;
  popupHeadingBig.textContent = name;
}

function submitAddCardForm(card) {
  card.forEach((element) => {
    elementsList.append(createCard(element.name, element.link));
  });
}

submitAddCardForm(initialCards);

function createNewCard(evt) {
  elementsList.prepend(
    createCard(popupFieldHeading.value, popupFieldSource.value)
  );
  evt.preventDefault();
  closePopup(popupAddCard);
}

formAddCard.addEventListener("submit", createNewCard);


//___________________________________________________________________________
