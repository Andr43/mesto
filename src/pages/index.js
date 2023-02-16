import "./index.css";
import {
  btnOpenPopupEditProfile,
  btnOpenPopupAddCard,
  profileName,
  profileJob,
  profileAvatarImage,
  popupFieldName,
  popupFieldJob,
  formClasses,
  formValidators,
  formEditProfile,
  profileImageBackground,
  profileEditImageButton,
  main,
  errorServer,
  errorServerHeading
} from "../scripts/utils/constants.js";
import { Card } from "../scripts/components/Card.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { Section } from "../scripts/components/Section.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { Api } from "../scripts/components/Api.js";
import { Popup } from "../scripts/components/Popup.js";

const api = new Api("61a5c5ab-9b62-4552-b9af-3bc710596f3a", errorServer, errorServerHeading, main);

api.getUserInfo(profileName, profileJob, profileAvatarImage, formEditProfile);

const enableValidation = (formClasses) => {
  const formList = Array.from(
    document.querySelectorAll(formClasses.formSelector)
  );
  formList.forEach((formElement) => {
    const validator = new FormValidator(formClasses, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__job",
  avatarSelector: ".profile__avatar",
  avatarImageSelector: ".profile__avatar_image",
});

userInfo.hoverUserImage(profileImageBackground, profileEditImageButton);

const popupOpenImage = new PopupWithImage(".popup-image");

const popupDeleteCard = new Popup(".popup_type_delete");

function createCard(data) {
  const card = new Card(data, popupDeleteCard, ".card", formEditProfile, {
    handleCardClick: () => {
      popupOpenImage.open(data);
      popupOpenImage.setEventListeners();
    },
    handleDeleteClick: () => {
      api.deleteCard(data._id).then(() => {
        card.deleteElement();
      });
    },
    handleLikeClick: (isLiked) => {
      if (!isLiked) {
        api.putLike(data._id).then((res) => {
          card.toggleLikeButton();
          card.getLikesFromServer(res.likes)
        });
      } else {
        api.deleteLike(data._id).then((res) => {
          card.toggleLikeButton();
          card.getLikesFromServer(res.likes)
        });
      }
    },
  });
  const cardElement = card.generateCard();
  return cardElement;
}

const popupWithFormEdit = new PopupWithForm(".popup_type_edit", {
  setCardData: (data) => {
    userInfo.setUserInfo({
      fieldName: data.name,
      fieldJob: data.job,
    });
    api.updateUserInfo(data.name, data.job, ".popup__button_save_edit");
  },
});
popupWithFormEdit.setEventListeners();

const popupWithFormAdd = new PopupWithForm(".popup_type_add", {
  setCardData: (data) => {
    api.addNewCard(data, ".popup__button_save_add").then((res) => {
      section.addItem(res)
  });
  }
});
popupWithFormAdd.setEventListeners();

const popupWithFormEditImage = new PopupWithForm(".popup_type_edit-avatar", {
  setCardData: (data) => {
    userInfo.setImageSource({
      fieldSource: data.avatar,
    });
    api.updateUserImage(data.avatar, ".popup__button_save_edit-avatar");
  },
});
popupWithFormEditImage.setEventListeners();

const section = new Section({ renderer:
  createCard
}, ".elements__list");

api.createCard().then((res) => {
  section.generateCard(res)
});

btnOpenPopupEditProfile.addEventListener("click", function () {
  popupWithFormEdit.open();
  const { job, name } = userInfo.getUserInfo();
  popupFieldName.value = name;
  popupFieldJob.value = job;
  formValidators["edit"].resetValidation();
});

btnOpenPopupAddCard.addEventListener("click", function () {
  popupWithFormAdd.open();
  formValidators["add"].resetValidation();
});

profileEditImageButton.addEventListener("click", function () {
  popupWithFormEditImage.open();
  formValidators["edit-avatar"].resetValidation();
});

enableValidation(formClasses);
