import { Card } from './card.js';
import { FormValidator } from './formValidator.js';

export const btnOpenPopupEditProfile = document.querySelector(".profile__button_edit");
export const btnOpenPopupAddCard = document.querySelector(".profile__button_add");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job");
export const popupContainer = document.querySelectorAll(".popup");
export const popupEditProfile = document.querySelector(".popup_type_edit");
export const popupAddCard = document.querySelector(".popup_type_add");
export const popupImage = document.querySelector(".popup-image");
export const formEditProfile = document.querySelector(".popup__form_edit");
export const formAddCard = document.querySelector(".popup__form_add");
export const popupFieldName = document.querySelector(".popup__field_name");
export const popupFieldJob = document.querySelector(".popup__field_job");
export const popupFieldHeading = document.querySelector(".popup__field_heading");
export const popupFieldSource = document.querySelector(".popup__field_source");
export const popupImageBig = document.querySelector(".popup-image__image");
export const popupHeadingBig = document.querySelector(".popup-image__heading");
export const elementsList = document.querySelector(".elements__list");
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
};

function createCard(name, link){
    const card = new Card(name, link,'.card');
    const cardElement = card.generateCard();
return cardElement;
};

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

btnOpenPopupAddCard.addEventListener("click", function () {
    openPopup(popupAddCard);
    formAddCard.reset();
});

popupContainer.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button_close')) {
            closePopup(popup)
        }
    })
});

//код для отрисовки готовых карточек
initialCards.forEach((cardData) => {
    elementsList.append(createCard(cardData.name, cardData.link));
});

formAddCard.addEventListener('submit', () => {
    elementsList.prepend(createCard(popupFieldHeading.value, popupFieldSource.value));
    closePopup(popupAddCard);
    });

//код для валидации полей попапов
const newFormValidatorAdd = new FormValidator(formClasses, formAddCard);
const validatorElementAdd = newFormValidatorAdd.enableValidation();
const newFormValidatorEdit = new FormValidator(formClasses, formEditProfile);
const validatorElementEdit = newFormValidatorEdit.enableValidation();


//код для закрытия попапов по клику на оверлей
popupContainer.forEach((popupElement) => {
    popupElement.addEventListener("mousedown", (evt) => {
        if (evt.currentTarget === evt.target) {
            closePopup(popupElement);
        }
    });
});