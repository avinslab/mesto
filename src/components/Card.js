export default class Card {
  constructor(config, cardSelector, handleCardClick, handleLikeClick, handleDeleteClick, uid) {
    this._image = config.image;
    this._name = config.name;
    this._likes = config.likes;//Количество лайков
    this._id = config.id;
    this._isOwned = config.isOwned;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._liked = false; //Ставил ли владелец карточки лайк
    if (this._likes)
      this._likes.forEach(user => {
        if (user._id === uid)
          this._liked = true;
      });

  }
  _getTemplate() {
    this._element = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }
  _toggleLikeDisplay() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    this._handleLikeClick();
  }
  _addEventListeners() {
    this._element.querySelector('.element__like-button').addEventListener('click', () => this._toggleLikeDisplay());
    this._element.querySelector('.element__image').addEventListener('click', () => this._handleCardClick({ link: this._image, name: this._name }));
    this._element.querySelector('.element__trash-button').addEventListener('click', () => this._handleDeleteClick());
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  createCard() {
    this._getTemplate();
    this._addEventListeners();
    this._element.querySelector('.element__image').src = this._image;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    if (this._likes)
      this._element.querySelector('.element__like-counter').textContent = this._likes.length > 0 ? this._likes.length : '';
    if (this._liked)
      this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    if (!this._isOwned) {
      this._element.querySelector('.element__trash-button').removeEventListener('click', () => this._handleDeleteClick());
      this._element.querySelector('.element__trash-button').remove();
    }
    return this._element;
  }
  setLikes(likes) {
    this._likes = likes;
    this._element.querySelector('.element__like-counter').textContent  = this._likes.length > 0 ? this._likes.length : '';
  }
  toggleLikedByOwner() {
    this._liked = !this._liked
  }
}
