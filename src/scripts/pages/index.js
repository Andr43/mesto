import {
    btnOpenPopupEditProfile,
    btnOpenPopupAddCard,
    popupEditProfile,
    popupAddCard,
    popupImage,
    popupFieldName,
    popupFieldJob,
    popupFieldHeading,
    popupFieldSource,
    popupImageBig,
    popupHeadingBig,
    elementsList,
    initialCards,
    formClasses,
    formValidators,
    enableValidation,
    popupEdit,
    popupAdd,
    userInfo,
} from '../utils/constants.js';
import {Card} from '../components/Card.js';
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {Section} from "../components/Section.js";

function createCard(name, link) {
    const card = new Card(name, link, '.card', {
        handleCardClick: () => {
            const popupOpenImage = new PopupWithImage(popupImage, name, link);
            popupOpenImage.open(popupImageBig, popupHeadingBig);
            popupOpenImage.setEventListeners();
        }
    });
    const cardElement = card.generateCard();
    return cardElement;
};

const PopupWithFormEdit = new PopupWithForm(popupEditProfile, {
    formFunction: () => {
        userInfo.setUserInfo(popupFieldName, popupFieldJob);
    }
});
PopupWithFormEdit.close(PopupWithFormEdit.setEventListeners());

const PopupWithFormAdd = new PopupWithForm(popupAddCard, {
    formFunction: () => {
        elementsList.prepend(createCard(popupFieldHeading.value, popupFieldSource.value));
    }
});
PopupWithFormAdd.close(PopupWithFormAdd.setEventListeners());

btnOpenPopupEditProfile.addEventListener("click", function () {
    userInfo.getUserInfo(popupFieldName, popupFieldJob);
    popupEdit.open();
    popupEdit.setEventListeners();
});

btnOpenPopupAddCard.addEventListener("click", function () {
    popupAdd.open();
    popupAdd.setEventListeners();
    formValidators['add'].disableButton();
});

const section = new Section({items: initialCards, renderer: renderCard}, elementsList);
section.generateCard();

function renderCard(cardData) {
    const cardElement = createCard(cardData.name, cardData.link);
    return cardElement;
}

// код валидации полей попапов
enableValidation(formClasses);

formValidators['add'];
formValidators['edit'];