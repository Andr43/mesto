import {FormValidator} from "../components/FormValidator.js";
import {Popup} from "../components/Popup.js";
import {UserInfo} from "../components/UserInfo.js";

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
export const cardTemplate = document.querySelector(".card");
export const cardTemplateImage = document.querySelector(".card__image");
export const cardTemplateHeading = document.querySelector(".card__heading");
export const initialCards = [
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
export const formClasses = {
    formSelector: ".popup__form",
    inputSelector: ".popup__field",
    submitButtonSelector: ".popup__button_save",
    inactiveButtonClass: "popup__button_invalid",
    inputErrorClass: "popup__field_error",
    errorClass: "popup__error_active",
};
export const formValidators = {};
export const enableValidation = (formClasses) => {
    const formList = Array.from(document.querySelectorAll(formClasses.formSelector))
    formList.forEach((formElement) => {
        const validator = new FormValidator(formClasses, formElement)
        const formName = formElement.getAttribute('name')
        formValidators[formName] = validator;
        validator.enableValidation();
    });
};
export const popupEdit = new Popup(popupEditProfile);
export const popupAdd = new Popup(popupAddCard);
export const popupImageOpener = new Popup(popupImage);
export const userInfo = new UserInfo(profileName, profileJob);

