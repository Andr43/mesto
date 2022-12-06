import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popup, name, link) {
        super(popup);
        this._popup = popup;
        this._name = name;
        this._link = link;
    }

    open(image, heading) {
        image.src = this._link;
        image.alt = this._name;
        heading.textContent = this._name;
        super.open();
    }
}