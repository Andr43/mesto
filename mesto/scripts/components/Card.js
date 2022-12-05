export class Card {
    constructor(name, link, templateSelector, {handleCardClick}) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
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
        this._heading = this._element.querySelector(".card__heading");
        this._image = this._element.querySelector(".card__image");
        this._heading.textContent = this._name;
        this._image.alt = this._name;
        this._image.src = this._link;
        return this._element;
    }

    _deleteElement(button) {
        const elementItem = button.closest(".card__element");
        elementItem.remove();
    }

    _likeButtonToggle(button) {
        button.classList.toggle("card__button_like_active");
    }

    _setEventListeners(element) {
        this._deleteButton = element.querySelector(".card__button_delete");
        this._likeButton = element.querySelector(".card__button_like");
        this._image = element.querySelector(".card__image");
        this._deleteButton.addEventListener('click', () => {
            this._deleteElement(this._deleteButton);
        });
        this._likeButton.addEventListener('click', () => {
            this._likeButtonToggle(this._likeButton);
        });
        this._image.addEventListener('click', () => {
            this._handleCardClick();
        });
    }
}