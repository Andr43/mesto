export class FormValidator {
  constructor(formClasses, form) {
    this._inputSelector = formClasses.inputSelector;
    this._submitButtonSelector = formClasses.submitButtonSelector;
    this._inactiveButtonClass = formClasses.inactiveButtonClass;
    this._inputErrorClass = formClasses.inputErrorClass;
    this._errorClass = formClasses.errorClass;
    this._form = form;
  }

  _showFieldError(fieldElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${fieldElement.id}-error`);
    fieldElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideFieldError(fieldElement) {
    const errorElement = this._form.querySelector(`.${fieldElement.id}-error`);
    fieldElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }

  _isValid(fieldElement) {
    if (!fieldElement.validity.valid) {
      this._showFieldError(fieldElement, fieldElement.validationMessage);
      this._toggleButtonState();
    } else {
      this._hideFieldError(fieldElement);
      this._toggleButtonState();
    }
  }

  _hasInvalidField() {
    return this._fieldList.some((fieldElement) => {
      return !fieldElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidField(this._fieldList)) {
      this.disableButton();
    } else {
      this._buttonElement.removeAttribute("disabled");
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._fieldList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    this._fieldList.forEach((fieldElement) => {
      fieldElement.addEventListener("input", () => {
        this._isValid(fieldElement);
      });
    });
  }

  disableButton() {
    this._buttonElement.setAttribute("disabled", true);
    this._buttonElement.classList.add(this._inactiveButtonClass);
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidation() {
    this._toggleButtonState();
    this._fieldList.forEach((inputElement) => {
      this._hideFieldError(inputElement);
    });
  }
}
