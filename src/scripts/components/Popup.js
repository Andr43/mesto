export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("visible");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("visible");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(esc) {
    if (esc.key === "Escape" || esc.key === "Esc") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("visible") ||
        evt.target.classList.contains("popup__button_close")
      ) {
        this.close();
      }
    });
  }
}
