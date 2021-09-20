export default class Popup {
  constructor(popupSelector) {
    this._popupEl = document.querySelector(popupSelector);
  }
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  _handleOverlayClickClose(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }
  setEventListeners() {
    this._popupEl.addEventListener('click', (evt) => this._handleOverlayClickClose(evt));
    this._popupEl.querySelector('.popup__close-button').addEventListener('click', () => this.close());
  }
  open() {
    this._popupEl.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }
  close() {
    this._popupEl.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }
}
