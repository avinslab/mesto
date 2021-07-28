//Валидация форм

export default class FormValidator {
  constructor(config, formEl) {
    this._formEl = formEl;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector));
    this._submitButtonEL = this._formEl.querySelector(this._submitButtonSelector);
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formEl.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }
  _hideInputError(inputElement) {
    const errorElement = this._formEl.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
     this.disableSubmitButton();
    }
    else {
      this._submitButtonEL.disabled = false;
      this._submitButtonEL.classList.remove(this._inactiveButtonClass);
    }
  }
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  _setEventListeners() {
    // чтобы проверить состояние кнопки в самом начале
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        // чтобы проверять его при изменении любого из полей
        this._toggleButtonState();
      });
    });
  }
  //Прячем тексты ошибок при открытии попапа
  resetFormErrorsOnShow() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }
  //Производим валидацию формы и стейта кнопки при показе попапа
  validatePopupForm() {
    //Проверяем валидацию присвоенных значений всех инпутов форм
    this._inputList.forEach(inputElement => {
      this._checkInputValidity(inputElement);
    });

    //Выставляем средствами валидации правильный стейт кнопки
    this._toggleButtonState();
  }
  enableValidation() {
    this._formEl.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
  disableSubmitButton() {
    this._submitButtonEL.classList.add(this._inactiveButtonClass)
    this._submitButtonEL.disabled = true;
  }

}














