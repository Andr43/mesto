import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleDeleteSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._handleDeleteSubmit = handleDeleteSubmit;
  }

  open(card) {
    super.open();
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleDeleteSubmit(this._card);
      this.close();
    });
  }
}
