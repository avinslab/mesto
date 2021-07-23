export default class Card {
  constructor(config, cardSelector, clickCardHandler) {
    this._image = config.image;
    this._name = config.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = clickCardHandler;
  }
  _getTemplate() {
    this._element = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }
  _handleLikeClick() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }
  _addEventListeners() {
    this._element.querySelector('.element__like-button').addEventListener('click', () => this._handleLikeClick());
    this._element.querySelector('.element__trash-button').addEventListener('click', () => this._handleDeleteClick());
    this._element.querySelector('.element__image').addEventListener('click', () => this._handleCardClick({ link: this._image, name: this._name }));
  }
  _handleDeleteClick() {
    this._element = null;
  }
  createCard() {
    this._getTemplate();
    this._addEventListeners();
    this._element.querySelector('.element__image').src = this._image;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    return this._element;
  }
}
