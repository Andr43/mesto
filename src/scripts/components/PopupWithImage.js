import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.popupImage = this._popup.querySelector(".popup-image__image");
        this.popupHeading = this._popup.querySelector(".popup-image__heading");
    }

    open(name, link) {
        this.popupImage.src = link;
        this.popupImage.alt = name;
        this.popupHeading.textContent = name;
        super.open();
    }
}