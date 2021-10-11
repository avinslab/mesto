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

    //Элементы шаблона
    this._likeButton = this._element.querySelector('.element__like-button');
    this._likeCounter = this._element.querySelector('.element__like-counter');
    this._trashButton = this._element.querySelector('.element__trash-button');
    this._cardImage = this._element.querySelector('.element__image');
  }

  _toggleLikeDisplay() {
    this._likeButton.classList.toggle('element__like-button_active');
  }

  _addEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeClick());
    this._cardImage.addEventListener('click', () => this._handleCardClick({ link: this._image, name: this._name }));
    this._trashButton.addEventListener('click', () => this._handleDeleteClick());
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  createCard() {
    this._getTemplate();
    this._cardImage.src = this._image;
    this._cardImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    if (this._likes)
      this._likeCounter.textContent = this._likes.length > 0 ? this._likes.length : '';

    if (this._liked)
      this._likeButton.classList.toggle('element__like-button_active');

    if (!this._isOwned)
      this._trashButton.remove();

    this._addEventListeners();
    return this._element;
  }

  updateLikes(likes) {
    this._likes = likes;
    this._likeCounter.textContent = this._likes.length > 0 ? this._likes.length : '';
    this._toggleLikedByOwner();
    this._toggleLikeDisplay();
  }

  _toggleLikedByOwner() {
    this._liked = !this._liked
  }

}
