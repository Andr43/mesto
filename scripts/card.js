//todo нужно сделать селектор для отрисованных карточек и для новых карточек,
// где name, link = popupFieldHeading.value, popupFieldSource.value
import {openPopup, popupImage, popupImageBig, popupHeadingBig, closePopup} from './index.js';

class Card {
    constructor(templateSelector) {
        this._templateSelector = templateSelector;
    }

    _createCard() {
        const newElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector(".card__element")
            .cloneNode(true);
        return newElement;
    }

    _deleteElement(button) {
        const elementItem = button.closest(".card__element");
        elementItem.remove();
    }

    _likeButtonToggle(button) {
        button.classList.toggle("card__button_like_active");
    }

    _openImagePopup(name, link) {
        openPopup(popupImage);
        popupImageBig.src = link;
        popupImageBig.alt = name;
        popupHeadingBig.textContent = name;
    }

    _setEventListeners(element) {
        const deleteButton = element.querySelector('.card__button_delete');
        deleteButton.addEventListener('click', () => {
            this._deleteElement(deleteButton);
        });
        const likeButton = element.querySelector(".card__button_like");
        likeButton.addEventListener('click', () => {
            this._likeButtonToggle(likeButton);
        });
        const closeButtonImage = document.querySelector(".popup-image__button");
        closeButtonImage.addEventListener("click", () => {
            closePopup(popupImage)
        });
        const imageElement = element.querySelector(".card__image");
        imageElement.addEventListener('click', () => {
            this._openImagePopup(this._name, this._link);
        });

    }
}

class CardFromInitialCards extends Card {
    constructor(data, templateSelector) {
        super(templateSelector);
        this._name = data.name;
        this._link = data.link;
    }

    generateCard() {
        this._element = this._createCard();
        this._setEventListeners(this._element);
        this._element.querySelector(".card__heading").textContent = this._name;
        this._element.querySelector(".card__image").alt = this._name;
        this._element.querySelector(".card__image").src = this._link;
        return this._element;
    }
}

class CardFromUser extends Card {
    constructor(name, link, templateSelector) {
        super(templateSelector);
        this._name = name;
        this._link = link;
    }

    generateCard() {
        this._element = this._createCard();
        this._setEventListeners(this._element);
        this._element.querySelector(".card__heading").textContent = this._name;
        this._element.querySelector(".card__image").alt = this._name;
        this._element.querySelector(".card__image").src = this._link;
        return this._element;
    }
}

export {CardFromInitialCards, CardFromUser}


// export class Card {
//   constructor(name, link, templateSelector) {
//     this._name = name;
//     this._link = link;
//     this._templateSelector = templateSelector;
//   }
//
//   _createCard(){
//     const newElement = document
//       .querySelector(".card")
//         .content
//         .querySelector(".card__element")
//         .cloneNode(true);
//     return newElement;
//   }
//
// generateCard(){
//     this._element = this._createCard();
//   this._setEventListeners(this._element);
//   this._element.querySelector(".card__heading").textContent = this._name;
//   this._element.querySelector(".card__image").alt = this._name;
//   this._element.querySelector(".card__image").src = this._link;
//   return this._element;
// }
//
//   _deleteElement(button){
//     const elementItem = button.closest(".card__element");
//     elementItem.remove();
//   }
//
//   _likeButtonToggle(button) {
//   button.classList.toggle("card__button_like_active");
// }
//
// _openImagePopup(name, link) {
//   openPopup(popupImage);
//   popupImageBig.src = link;
//   popupImageBig.alt = name;
//   popupHeadingBig.textContent = name;
// }
//
//   _setEventListeners(element){
//     const deleteButton = element.querySelector('.card__button_delete');
//     deleteButton.addEventListener('click',() => {
//       this._deleteElement(deleteButton);
//     });
//     const likeButton = element.querySelector(".card__button_like");
//     likeButton.addEventListener('click',() => {
//       this._likeButtonToggle(likeButton);
//     });
//     const closeButtonImage = document.querySelector(".popup-image__button");
//     closeButtonImage.addEventListener("click", () => {
//         closePopup(popupImage)
//     });
//     const imageElement = element.querySelector(".card__image");
//     imageElement.addEventListener('click', () => {
//       this._openImagePopup(this._name, this._link);
//     });
//     const addForm = document.querySelector(".popup_type_add");
//     addForm.addEventListener('submit', (evt) => {
//       document.querySelector(".elements__list").prepend(
//           this.generateCard()
//       );
//       evt.preventDefault();
//       closePopup(popupAddCard);
//     })
//   };
//
// }