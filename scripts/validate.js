const formClasses = {
    formSelector: ".popup__form",
    inputSelector: ".popup__field",
    submitButtonSelector: ".popup__button_save",
    inactiveButtonClass: "popup__button_invalid",
    inputErrorClass: "popup__field_error",
    errorClass: "popup__error_active",
  };
  
  const showFieldError = (formElement, fieldElement, formClasses, errorMessage) => {
    const errorElement = formElement.querySelector(`.${fieldElement.id}-error`);
    fieldElement.classList.add(formClasses.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(formClasses.errorClass);
  };
  
  const hideFieldError = (formElement, fieldElement, formClasses) => {
    const errorElement = formElement.querySelector(`.${fieldElement.id}-error`);
    fieldElement.classList.remove(formClasses.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(formClasses.errorClass);
  };
  
  const isValid = (formElement, fieldElement, formClasses) => {
    if (!fieldElement.validity.valid) {
      showFieldError(formElement, fieldElement, formClasses, fieldElement.validationMessage);
    } else {
      hideFieldError(formElement, fieldElement, formClasses);
    }
  };
  
  const hasInvalidField = (fieldList) => {
    return fieldList.some((fieldElement) => {
      return !fieldElement.validity.valid;
    });
  };
  
  const toggleButtonState = (formElement, formClasses, fieldList) => {
    const buttonElement = formElement.querySelector(formClasses.submitButtonSelector);
    if (hasInvalidField(fieldList)) {
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add(formClasses.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove(formClasses.inactiveButtonClass);
    }
  };
  
  const setEventListeners = (formElement, formClasses) => {
    const fieldList = Array.from(
      formElement.querySelectorAll(formClasses.inputSelector)
    );
    fieldList.forEach((fieldElement) => {
      fieldElement.addEventListener("input", () => {
        isValid(formElement, fieldElement, formClasses);
        toggleButtonState(formElement, formClasses, fieldList);
      });
    });
  };
  
  const enableValidation = (formClasses) => {
    const formList = Array.from(
      document.querySelectorAll(formClasses.formSelector)
    );
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, formClasses);
    });
  };
  
  enableValidation(formClasses);
