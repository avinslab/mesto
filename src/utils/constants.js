//API
export const token = '65ef2316-73ff-497f-a9ee-7b46b79b7eca';
export const groupId = 'cohort-28';
export const baseUrl = 'https://mesto.nomoreparties.co/v1/';

//элементы управления профилем

export const editButton = document.querySelector('#profile-edit-button');
export const profilePopup = document.querySelector('#edit-profile');
export const profilePopupSelector = '#edit-profile';
export const profileTitle = '#name';
export const profileSubTitle = '#description';
export const popupInputName = document.querySelector('#profile-name');
export const popupInputdescription = document.querySelector('#profile-description');

//элементы управления карточками мест
export const elementsContainer = '.elements';
export const addElButton = document.querySelector('#add-element-button');
export const addElPopup = document.querySelector('#add-element');
export const addElPopupSelector = '#add-element';

//элементы управления попапа с картинкой
export const imagePopupSelector = '#image-popup';

//элементы управления попапа удаления карточки
export const deleteCardPopupSelector = '#delete-card-popup';

//элементы управления попапа смены аватара
export const changeAvatarPopupSelector = '#change-avatar-popup';
export const profileAvatarSelector = '.profile__avatar';
export const profileAvatarPopup = document.querySelector(changeAvatarPopupSelector);

//Объект настроек с селекторами и классами формы
export const formConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

