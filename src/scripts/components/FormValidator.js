export class FormValidator {
    constructor(formClasses, form) {
        this._inputSelector = formClasses.inputSelector;
        this._submitButtonSelector = formClasses.submitButtonSelector;
        this._inactiveButtonClass = formClasses.inactiveButtonClass;
        this._inputErrorClass = formClasses.inputErrorClass;
        this._errorClass = formClasses.errorClass;
        this._form = form;
    }

    _showFieldError(formElement, fieldElement, errorMessage) {
        const errorElement = formElement.querySelector(`.${fieldElement.id}-error`);
        fieldElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideFieldError(formElement, fieldElement) {
        const errorElement = formElement.querySelector(`.${fieldElement.id}-error`);
        fieldElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
    };

    _isValid(formElement, fieldElement) {
        if (!fieldElement.validity.valid) {
            this._showFieldError(formElement, fieldElement, fieldElement.validationMessage);
            this._toggleButtonState(this._fieldList);
        } else {
            this._hideFieldError(formElement, fieldElement);
            this._toggleButtonState(this._fieldList);
        }
    };

    _hasInvalidField(fieldList) {
        return fieldList.some((fieldElement) => {
            return !fieldElement.validity.valid;
        });
    };

    _toggleButtonState(fieldList) {
        if (this._hasInvalidField(fieldList)) {
            this.disableButton();
        } else {
            this._buttonElement.removeAttribute("disabled");
            this._buttonElement.classList.remove(this._inactiveButtonClass);
        }
    };

    _setEventListeners(formElement) {
        this._buttonElement = formElement.querySelector(this._submitButtonSelector);
        this._fieldList = Array.from(
            formElement.querySelectorAll(this._inputSelector)
        );
        this._fieldList.forEach((fieldElement) => {
            fieldElement.addEventListener("input", () => {
                this._isValid(formElement, fieldElement);
            });
        });
    };

    disableButton(){
        this._buttonElement.setAttribute("disabled", true);
        this._buttonElement.classList.add(this._inactiveButtonClass);
    }

    enableValidation() {
        this._setEventListeners(this._form);
    };
}