import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popup, {formFunction}) {
        super(popup);
        this._formFunction = formFunction;
        this._form = this._popup.querySelector('.popup__form');
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
            this._formFunction(this._getInputValues());
            evt.preventDefault();
            this.close();
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}