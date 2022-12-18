import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, {setCardData}) {
        super(popupSelector);
        this._setCardData = setCardData;
        this._form = this._popupSelector.querySelector('.popup__form');
        this._fieldList = Array.from(
            this._form.querySelectorAll('.popup__field')
        );
    }

    _getInputValues() {
        this._field = {};
        this._fieldList.forEach((fieldElement) => {
            this._field[fieldElement.name] = fieldElement.value;
        });
        return this._field;
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