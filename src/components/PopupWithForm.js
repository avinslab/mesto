import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this._popupEl.querySelector('.popup__form');
    this._formInputsList = this._popupEl.querySelectorAll('.popup__input');
    this._saveButton = this._popupEl.querySelector('.popup__save-button');
  }
  _getInputValues() {
    this._inputValues = {};
    this._formInputsList.forEach(inputEl => {
      this._inputValues[inputEl.name] = inputEl.value;
    });
    return this._inputValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
  renderLoading(isLoading) {
    if (isLoading)
      this._saveButton.innerText = 'Сохранение...';
    else
      this._saveButton.innerText = 'Сохранить'
  }
}
