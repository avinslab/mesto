import Popup from "./Popup.js";
export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, handleButtonClick) {
        super(popupSelector);
        this._button = this._popupEl.querySelector('.popup__save-button');
        this._handleButtonClick = handleButtonClick;
    }
    setEventListeners() {
        super.setEventListeners();
        this._button.addEventListener('click', (evt) => {
            this._handleButtonClick(evt, this._card);
        });
    }
    open(card) {
        this._card = card;
        super.open();
    }

}