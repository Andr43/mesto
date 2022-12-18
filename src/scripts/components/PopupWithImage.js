import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector, popupImage, popupHeading) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this.popupImage = popupImage;
        this.popupHeading = popupHeading;
    }

    open(name, link) {
        this.popupImage.src = link;
        this.popupImage.alt = name;
        this.popupHeading.textContent = name;
        super.open();
    }
}