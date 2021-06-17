//Валидация форм

const formConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
  }
  else
    buttonElement.classList.remove(config.inactiveButtonClass);
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, config);
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
};

//Производим валидацию формы и стейта кнопки при показе попапа

const validatePopupForm = (form) => {
  const profileFormInputs = Array.from(form.querySelectorAll('.popup__input'));
  const buttonElement = form.querySelector(formConfig.submitButtonSelector);
  //Проверяем валидацию присвоенных значений всех инпутов форм
  profileFormInputs.forEach(inputElement => {
    checkInputValidity(form, inputElement, formConfig);
  });

  //Выставляем средствами валидации правильный стейт кнопки
  toggleButtonState(profileFormInputs, buttonElement, formConfig);
};

//Прячем тексты ошибок при показе попапа
const resetFormErrorsOnShow = (form) => {
  const profileFormInputs = Array.from(form.querySelectorAll('.popup__input'));
  profileFormInputs.forEach((inputElement) => {
    hideInputError(form, inputElement, formConfig);
  });

};

enableValidation(formConfig);
