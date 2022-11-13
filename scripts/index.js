export const btnOpenPopupEditProfile = document.querySelector(".profile__button_edit");
export const btnOpenPopupAddCard = document.querySelector(".profile__button_add");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job");
export const popupContainer = document.querySelectorAll(".popup");
export const popupEditProfile = document.querySelector(".popup_type_edit");
export const popupAddCard = document.querySelector(".popup_type_add");
export const popupImage = document.querySelector(".popup-image");
export const form = document.querySelectorAll(".popup__form");
export const formEditProfile = document.querySelector(".popup__form_edit");
export const formAddCard = document.querySelector(".popup__form_add");
export const popupField = document.querySelector(".popup__field");
export const popupFieldName = document.querySelector(".popup__field_name");
export const popupFieldJob = document.querySelector(".popup__field_job");
export const popupFieldHeading = document.querySelector(".popup__field_heading");
export const popupFieldSource = document.querySelector(".popup__field_source");
export const saveButton = document.querySelector(".popup__button_save");
export const saveButtonAdd = document.querySelector(".popup__button_save_add");
export const closeButtonEdit = document.querySelector(".popup__button_close_edit");
export const closeButtonAdd = document.querySelector(".popup__button_close_add");
export const popupImageBig = document.querySelector(".popup-image__image");
export const popupHeadingBig = document.querySelector(".popup-image__heading");
export const popupError = document.querySelector(".popup__error");
export const elementsList = document.querySelector(".elements__list");
const deleteButton = document.querySelector(".card__button_delete");
const likeButton = document.querySelector(".card__button_like");
const closeButtonImage = document.querySelector(".popup-image__button");
const imageElement = document.querySelector(".card__image");
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
const formClasses = {
    formSelector: ".popup__form",
    inputSelector: ".popup__field",
    submitButtonSelector: ".popup__button_save",
    inactiveButtonClass: "popup__button_invalid",
    inputErrorClass: "popup__field_error",
    errorClass: "popup__error_active",
};

// код, открывающий и закрывающий окно изменения профиля, а также меняющий данные профиля
export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", pressEsc);
}

export function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", pressEsc);
}

function pressEsc(esc) {
    if (esc.key === "Escape" || esc.key === "Esc") {
        const popupOpened = document.querySelector('.popup_opened')
        closePopup(popupOpened);
    }
}

function disableButton(button) {
    button.setAttribute('disabled', true);
    button.classList.add('popup__button_invalid');
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
    disableButton(saveButtonAdd);
});

closeButtonAdd.addEventListener("click", function () {
    closePopup(popupAddCard);
});
// _______________________________________________________________________
// импорты классов, отрисовываающих карточки, создающих карточки пользователя и валидирующих поля попапов
import { Card } from './card.js';

//код для отрисовки готовых карточек
initialCards.forEach((initialCards) => {
    const card = new Card(initialCards.name, initialCards.link, ".card__element", deleteButton, likeButton, closeButtonImage, imageElement, '.card');
    const cardElement = card.generateCard();
    document.querySelector('.elements__list').append(cardElement);
});

//код для создания карточек пользователя
// function createUserCard() {
//     formAddCard.addEventListener('submit', () => {
//         const userCard = new CardFromUser(popupFieldHeading.value, popupFieldSource.value, '.card');
//         const userCardElement = userCard.generateCard();
//         document.querySelector('.elements__list').prepend(userCardElement);
//         closePopup(popupAddCard)
//     })
// }

createUserCard();

//код для валидации полей попапов
import {FormValidator} from './formValidator.js';

const newFormValidator = new FormValidator(formClasses);
const validatorElement = newFormValidator.enableValidation();


//код для закрытия попапов по клику на оверлей
popupContainer.forEach((popupElement) => {
    popupElement.addEventListener("mousedown", (evt) => {
        if (evt.currentTarget === evt.target) {
            closePopup(popupElement);
        }
    });
});