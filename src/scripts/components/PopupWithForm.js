import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({popupSelector}, {setCardData}) {
        super({popupSelector});
        this._setCardData = setCardData;
        this._form = this._popupSelector.querySelector('.popup__form');
        this._fieldList = this._form.querySelectorAll('.popup__field');
    }

    _getInputValues() {
    const field = {};
    this._fieldList.forEach((fieldElement) => {
        field[fieldElement.id] = fieldElement.value;
    });
        return field;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            this._setCardData(this._getInputValues());
            evt.preventDefault();
            this.close();
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}