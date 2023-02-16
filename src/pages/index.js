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
  footer,
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

const api = new Api("61a5c5ab-9b62-4552-b9af-3bc710596f3a", {showError: showError});

api.getUserInfo().then((result) => {
  profileName.textContent = result.name;
  profileJob.textContent = result.about;
  profileAvatarImage.src = result.avatar;
  formEditProfile.id = result._id;
})
.catch((err) => {
  showError(err)
});

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
  avatarImageSelector: ".profile__image",
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
      })
      .catch((err) => {
        showError(err)
      })
    },
    handleLikeClick: (isLiked) => {
      if (!isLiked) {
        api.putLike(data._id)
        .then((res) => {
          card.toggleLikeButton();
          card.getLikesFromServer(res.likes)
        })
        .catch((err) => {
         showError(err)
        })
      } else {
        api.deleteLike(data._id)
        .then((res) => {
          card.toggleLikeButton();
          card.getLikesFromServer(res.likes)
        })
        .catch((err) => {
          showError(err)
         })
      }
    },
  });
  const cardElement = card.generateCard();
  return cardElement;
}

function showError(err) {
  main.classList.add('invisible');
  footer.classList.add('invisible');
  errorServer.classList.add('visible');
  errorServerHeading.textContent = err;
    console.log(err)
}

function dataSaving(isSaving, saveButtonSelector, textButton){
  const saveButton = document.querySelector(saveButtonSelector);
  if(isSaving){
  saveButton.textContent = 'Сохранение...'
  } else (
    saveButton.textContent = textButton
  )
    }

const popupWithFormEdit = new PopupWithForm(".popup_type_edit", {
  setCardData: (data) => {
    dataSaving(true, ".popup__button_save_edit");
    userInfo.setUserInfo({
      fieldName: data.name,
      fieldJob: data.job,
    });
    api.updateUserInfo(data.name, data.job)
    .catch((err) => {
      showError(err)
    })
    .finally(() => {dataSaving(false, ".popup__button_save_edit", 'Сохранить')});
  }
});
popupWithFormEdit.setEventListeners();

const popupWithFormAdd = new PopupWithForm(".popup_type_add", {
  setCardData: (data) => {
    dataSaving(true, ".popup__button_save_add");
    api.addNewCard(data).then((res) => {
      section.addItem(res)
  })
  .catch((err) => {
    showError(err)
  })
  .finally(() => {dataSaving(false, ".popup__button_save_add", 'Создать')});
  }
});
popupWithFormAdd.setEventListeners();

const popupWithFormEditImage = new PopupWithForm(".popup_type_edit-avatar", {
  setCardData: (data) => {
    dataSaving(true, ".popup__button_save_edit-avatar");
    userInfo.setImageSource({
      fieldSource: data.avatar,
    });
    api.updateUserImage(data.avatar)
    .catch((err) => {
      showError(err)
    })
    .finally(() => {dataSaving(false, ".popup__button_save_edit-avatar", 'Сохранить')});
  },
});
popupWithFormEditImage.setEventListeners();

const section = new Section({ renderer:
  createCard
}, ".elements__list");

api.createCard()
.then((res) => {
  section.generateCard(res)
})
.catch((err) => {
  showError(err)
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
