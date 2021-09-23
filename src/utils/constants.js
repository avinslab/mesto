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

//Объект настроек с селекторами и классами формы
export const formConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
//Шесть карточек «из коробки»

export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
