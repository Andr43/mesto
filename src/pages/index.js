import './index.css';
import {
    btnOpenPopupEditProfile,
    btnOpenPopupAddCard,
    popupFieldName,
    popupFieldJob,
    initialCards,
    formClasses,
    formValidators,
} from '../scripts/utils/constants.js';
import {Card} from '../scripts/components/Card.js';
import {PopupWithForm} from "../scripts/components/PopupWithForm.js";
import {Section} from "../scripts/components/Section.js";
import {FormValidator} from "../scripts/components/FormValidator.js";
import {UserInfo} from "../scripts/components/UserInfo.js";
import {PopupWithImage} from "../scripts/components/PopupWithImage.js";

const enableValidation = (formClasses) => {
    const formList = Array.from(document.querySelectorAll(formClasses.formSelector))
    formList.forEach((formElement) => {
        const validator = new FormValidator(formClasses, formElement)
        const formName = formElement.getAttribute('name')
        formValidators[formName] = validator;
        validator.enableValidation();
    });
};

const userInfo = new UserInfo({
    nameSelector: ".profile__name",
    jobSelector: ".profile__job"
});
const popupOpenImage = new PopupWithImage('.popup-image');

function createCard(name, link) {
    const card = new Card(name, link, '.card', {
        handleCardClick: () => {
            popupOpenImage.open(name, link);
        }
    });
    const cardElement = card.generateCard();
    return cardElement;
};
popupOpenImage.setEventListeners();

const section = new Section({items: initialCards, renderer: createCard},  ".elements__list");
section.generateCard();


const popupWithFormEdit = new PopupWithForm('.popup_type_edit', {
    setCardData: (data) => {
        userInfo.setUserInfo({ 
            fieldName: data.name, 
            fieldJob: data.job 
        });
    }
});
popupWithFormEdit.setEventListeners();

const popupWithFormAdd = new PopupWithForm('.popup_type_add', {
    setCardData: (data) => {
        section.addItem(createCard(data.heading, data.source));
    }
});
popupWithFormAdd.setEventListeners();

btnOpenPopupEditProfile.addEventListener("click", function () {
    popupWithFormEdit.open();
    const {job, name} = userInfo.getUserInfo();
    popupFieldName.value = name;
    popupFieldJob.value = job;
    formValidators['edit'].resetValidation();
});

btnOpenPopupAddCard.addEventListener("click", function () {
    popupWithFormAdd.open();
    formValidators['add'].resetValidation();
});

enableValidation(formClasses);