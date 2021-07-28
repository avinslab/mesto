import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupEl.querySelector('.popup__image-preview');
    this._title = this._popupEl.querySelector('.popup__image-title');
  }
  open(data) {
    super.open();
    this._image.src = data.link;
    this._image.alt = data.name;
    this._title.textContent = data.name;
  }
}
