export class Popup {
    constructor(popup) {
        this._popup = popup;
    }

    open() {
        this._popup.classList.add("popup_opened");
        this._handleEscClose();
    }

    close() {
        this._popup.classList.remove("popup_opened");
        this._handleEscClose();
    }

    _handleEscClose() {
        if (this._popup.classList.contains("popup_opened")) {
            document.addEventListener("keydown", (esc) => {
                if (esc.key === "Escape" || esc.key === "Esc") {
                    this.close();
                }
            })
        } else {
            document.removeEventListener("keydown", (esc) => {
                if (esc.key === "Escape" || esc.key === "Esc") {
                    this.close();
                }
            })
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button_close')) {
                this.close();
            }
        });
    }
}