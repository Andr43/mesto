import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor({popupSelector}) {
        super({popupSelector});
        this.popupImage = popupSelector.querySelector(".popup-image__image");
        this.popupHeading = popupSelector.querySelector(".popup-image__heading");
    }

    open(name, link) {
        this.popupImage.src = link;
        this.popupImage.alt = name;
        this.popupHeading.textContent = name;
        super.open();
    }
}