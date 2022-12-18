import '../../pages/index.css';
import {
    btnOpenPopupEditProfile,
    btnOpenPopupAddCard,
    popupEditProfile,
    popupAddCard,
    popupFieldName,
    popupFieldJob,
    popupFieldHeading,
    popupFieldSource,
    elementsList,
    initialCards,
    formClasses,
    formValidators,
    enableValidation,
    userInfo,
    popupOpenImage
} from '../utils/constants.js';
import {Card} from '../components/Card.js';
import {PopupWithForm} from "../components/PopupWithForm.js";
import {Section} from "../components/Section.js";

function createCard(name, link) {
    const card = new Card(name, link, '.card', {
        handleCardClick: () => {
            popupOpenImage.open(name, link);
            popupOpenImage.setEventListeners();
        }
    });
    const cardElement = card.generateCard();
    return cardElement;
};

const section = new Section({items: initialCards, renderer: renderCard}, elementsList);
section.generateCard();

function renderCard(cardData) {
    const cardElement = createCard(cardData.name, cardData.link);
    return cardElement;
};

const popupWithFormEdit = new PopupWithForm(popupEditProfile, {
    setCardData: () => {
        userInfo.setUserInfo({userObject: {
            name: popupFieldName.value,
            job: popupFieldJob.value
                }
            });
    }
});
popupWithFormEdit.setEventListeners();

const popupWithFormAdd = new PopupWithForm(popupAddCard, {
    setCardData: () => {
        section.addItem(createCard(popupFieldHeading.value, popupFieldSource.value));
    }
});
popupWithFormAdd.setEventListeners();

btnOpenPopupEditProfile.addEventListener("click", function () {
    popupWithFormEdit.open();
    const headingsValues = Object.values(userInfo.getUserInfo());
    popupFieldName.value = headingsValues[0];
    popupFieldJob.value = headingsValues[1];
});

btnOpenPopupAddCard.addEventListener("click", function () {
    popupWithFormAdd.open();
    formValidators['add'].disableButton();
});

enableValidation(formClasses);