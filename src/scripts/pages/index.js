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
        }
    });
    const cardElement = card.generateCard();
    return cardElement;
};
popupOpenImage.setEventListeners();

const section = new Section({items: initialCards, renderer: createCard}, {elementsContainerSelector: ".elements__list"});
section.generateCard();



const popupWithFormEdit = new PopupWithForm({popupSelector: popupEditProfile}, {
    setCardData: (data) => {
        userInfo.setUserInfo({ 
            fieldName: data.name, 
            fieldJob: data.job 
        });
    }
});
popupWithFormEdit.setEventListeners();

const popupWithFormAdd = new PopupWithForm({popupSelector: popupAddCard}, {
    setCardData: (data) => {
        section.addItem(createCard(data.heading, data.source));
    }
});
popupWithFormAdd.setEventListeners();

btnOpenPopupEditProfile.addEventListener("click", function () {
    popupWithFormEdit.open();
    popupFieldName.value = userInfo.getUserInfo().name;
    popupFieldJob.value = userInfo.getUserInfo().job;
});

btnOpenPopupAddCard.addEventListener("click", function () {
    popupWithFormAdd.open();
    formValidators['add'].disableButton();
});

enableValidation(formClasses);