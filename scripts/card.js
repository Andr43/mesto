import {openPopup, popupImage, popupImageBig, popupHeadingBig, closePopup} from './index.js';

export class Card {
    constructor(name, link, deleteButton, likeButton, closeButtonImage, imageElement, templateSelector) {
        this._name = name;
        this._link = link;
        this._deleteButton = deleteButton;
        this._likeButton = likeButton;
        this._closeButtonImage = closeButtonImage;
        this._imageElement = imageElement;
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

    generateCard() {
        this._element = this._createCard();
        this._setEventListeners(this._element);
        this._element.querySelector(".card__heading").textContent = this._name;
        this._element.querySelector(".card__image").alt = this._name;
        this._element.querySelector(".card__image").src = this._link;
        return this._element;
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
        console.log(this._deleteButton)
       element.querySelector(this._deleteButton).addEventListener('click', () => {
            this._deleteElement(this._deleteButton);
        });
        this._likeButton.addEventListener('click', () => {
            this._likeButtonToggle(this._likeButton);
        });
        this._closeButtonImage.addEventListener("click", () => {
            closePopup(popupImage);
        });
       this._imageElement.addEventListener('click', () => {
            this._openImagePopup(this._name, this._link);
        });

    }
}

// class CardFromInitialCards extends Card {
//     constructor(data, templateSelector) {
//         super(templateSelector);
//         this._name = data.name;
//         this._link = data.link;
//     }
//
//     generateCard() {
//         this._element = this._createCard();
//         this._setEventListeners(this._element);
//         this._element.querySelector(".card__heading").textContent = this._name;
//         this._element.querySelector(".card__image").alt = this._name;
//         this._element.querySelector(".card__image").src = this._link;
//         return this._element;
//     }
// }
//
// class CardFromUser extends Card {
//     constructor(name, link, templateSelector) {
//         super(templateSelector);
//         this._name = name;
//         this._link = link;
//     }
//
//     generateCard() {
//         this._element = this._createCard();
//         this._setEventListeners(this._element);
//         this._element.querySelector(".card__heading").textContent = this._name;
//         this._element.querySelector(".card__image").alt = this._name;
//         this._element.querySelector(".card__image").src = this._link;
//         return this._element;
//     }
// }
//
// export {CardFromInitialCards, CardFromUser}