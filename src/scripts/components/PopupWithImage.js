import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.popupImage = this._popup.querySelector(".popup-image__image");
        this.popupHeading = this._popup.querySelector(".popup-image__heading");
    }

    open(data) {
        this.popupImage.src = data.link;
        this.popupImage.alt = data.name;
        this.popupHeading.textContent = data.name;
        super.open();
    }
}