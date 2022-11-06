export class FormValidator {
    constructor(formClasses) {
        this._formSelector = formClasses.formSelector;
        this._inputSelector = formClasses.inputSelector;
        this._submitButtonSelector = formClasses.submitButtonSelector;
        this._inactiveButtonClass = formClasses.inactiveButtonClass;
        this._inputErrorClass = formClasses.inputErrorClass;
        this._errorClass = formClasses.errorClass;
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
        } else {
            this._hideFieldError(formElement, fieldElement);
        }
    };

    _hasInvalidField(fieldList) {
        return fieldList.some((fieldElement) => {
            return !fieldElement.validity.valid;
        });
    };

    _toggleButtonState(formElement, fieldList) {
        const buttonElement = formElement.querySelector(this._submitButtonSelector);
        if (this._hasInvalidField(fieldList)) {
            buttonElement.setAttribute("disabled", true);
            buttonElement.classList.add(this._inactiveButtonClass);
        } else {
            buttonElement.removeAttribute("disabled");
            buttonElement.classList.remove(this._inactiveButtonClass);
        }
    };

    _setEventListeners(formElement) {
        const fieldList = Array.from(
            formElement.querySelectorAll(this._inputSelector)
        );
        fieldList.forEach((fieldElement) => {
            fieldElement.addEventListener("input", () => {
                this._isValid(formElement, fieldElement);
                this._toggleButtonState(formElement, fieldList);
            });
        });
    };

    enableValidation() {
        const formList = Array.from(
            document.querySelectorAll(this._formSelector)
        );
        formList.forEach((formElement) => {
            formElement.addEventListener("submit", (evt) => {
                evt.preventDefault();
            });
            this._setEventListeners(formElement);
        });
    };
}