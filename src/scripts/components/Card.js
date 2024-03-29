export class Card {
  constructor(
    data,
    templateSelector,
    userId,
    { handleCardClick, handlePopupDeleteOpen, handleLikeClick }
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._userId = userId.id;
    this._cardOwnerId = data.owner._id;
    this._likesObject = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handlePopupDeleteOpen = handlePopupDeleteOpen;
    this._handleLikeClick = handleLikeClick;
  }

  _createCard() {
    const newElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card__element")
      .cloneNode(true);
    return newElement;
  }

  generateCard() {
    this._element = this._createCard();
    this._heading = this._element.querySelector(".card__heading");
    this._image = this._element.querySelector(".card__image");
    this._likes = this._element.querySelector(".card__likes");
    this._deleteButton = this._element.querySelector(".card__button_delete");
    this._likeButton = this._element.querySelector(".card__button_like");
    this._deleteButton.classList.add("visible");
    this._heading.textContent = this._name;
    this._image.alt = this._name;
    this._image.src = this._link;
    this._likes.textContent = this._likesObject.length;
    this._userCheck();
    this._setEventListeners();
    this._handlePutLikeClick();
    return this._element;
  }

  deleteElement() {
    this._element.remove();
    this._element = null;
  }

  _isLiked() {
    const isLiked = this._likesObject.some((like) => like._id === this._userId);
    return isLiked;
  }

  _handlePutLikeClick() {
    if (this._isLiked()) {
      this.toggleLikeButton();
    }
  }

  getLikesFromServer(likesQuantity) {
    this._likesObject = likesQuantity;
    this._likes.textContent = likesQuantity.length;
  }

  toggleLikeButton() {
    this._likeButton.classList.toggle("card__button_like_active");
  }

  _userCheck() {
    if (this._cardOwnerId === this._userId) {
      this._deleteButton.classList.add("visible");
    } else {
      this._deleteButton.classList.remove("visible");
    }
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => {
      this._handlePopupDeleteOpen(this);
    });
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this._isLiked());
    });

    this._image.addEventListener("click", () => {
      this._handleCardClick();
    });
  }
}
