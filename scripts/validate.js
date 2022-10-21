const formClasses = {
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__button_save",
  inactiveButtonClass: "popup__button_invalid",
  inputErrorClass: "popup__field_error",
  errorClass: "popup__error_active",
};

const formElement = document.querySelector(".popup__form");
const formField = formElement.querySelector(".popup__field");

const showFieldError = (formElement, fieldElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${fieldElement.id}-error`);
  fieldElement.classList.add(formClasses.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formClasses.errorClass);
};

const hideFieldError = (formElement, fieldElement) => {
  const errorElement = formElement.querySelector(`.${fieldElement.id}-error`);
  fieldElement.classList.remove(formClasses.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(formClasses.errorClass);
};

const isValid = (formElement, fieldElement) => {
  if (!fieldElement.validity.valid) {
    showFieldError(formElement, fieldElement, fieldElement.validationMessage);
  } else {
    hideFieldError(formElement, fieldElement);
  }
};

const hasInvalidField = (fieldList) => {
  return fieldList.some((fieldElement) => {
    return !fieldElement.validity.valid;
  });
};

const toggleButtonState = (fieldList, buttonElement) => {
  if (hasInvalidField(fieldList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(formClasses.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove(formClasses.inactiveButtonClass);
  }
};

const setEventListeners = (formElement) => {
  const fieldList = Array.from(
    formElement.querySelectorAll(formClasses.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    formClasses.submitButtonSelector
  );
  fieldList.forEach((fieldElement) => {
    fieldElement.addEventListener("input", () => {
      isValid(formElement, fieldElement);
      toggleButtonState(fieldList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(
    document.querySelectorAll(formClasses.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault;
    });
    setEventListeners(formElement);
  });
};

enableValidation();

// код, закрывающий попапы по нажатию esc и клику
const closePopupEsc = (popup) => {
  document.addEventListener("keydown", (esc) => {
    if (esc.key === "Escape" || esc.key === "Esc") {
      closePopup(popup);
    }
  });
};

popupContainer.forEach((popupElement) => {
  popupElement.addEventListener("mousedown", (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(popupElement);
    }
  });
});
