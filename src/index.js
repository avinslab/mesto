import './pages/index.css';
//элементы управления профилем
const editButton = document.querySelector('#profile-edit-button');
const profilePopup = document.querySelector('#edit-profile');
const profilePopupSelector = '#edit-profile';
const profileTitle = '#name';
const profileSubTitle = '#description';
const popupInputName = document.querySelector('#profile-name');
const popupInputdescription = document.querySelector('#profile-description');

//элементы управления карточками мест
const elementsContainer = '.elements';
const addElButton = document.querySelector('#add-element-button');
const addElPopup = document.querySelector('#add-element');
const addElPopupSelector = '#add-element';

//элементы управления попапа с картинкой
const imagePopupSelector = '#image-popup';

//Объект настроек с селекторами и классами формы
const formConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

//Импортируем классы карточки и валидатора
import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import Userinfo from './scripts/UserInfo.js';
import Section from './scripts/Section.js';

//Шесть карточек «из коробки»

const initialCards = [
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

//Создаем объекты класса Card и Section
function createCard(card) {
  const element = new Card({ name: card.name, image: card.link }, '#element', () => imagePopup.open(card));
  return element.createCard();
}

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      section.addItem(cardElement);
    }
  },
  elementsContainer);
section.renderItems();

//Создаем объекты класса UserInfo
const userInfo = new Userinfo(
  {
    profileNameSelector: profileTitle,
    profileDescriptionSelector: profileSubTitle
  });

//Создаем объекты класса FormValidator
const profileFormValidator = new FormValidator(formConfig, profilePopup);
profileFormValidator.enableValidation();

const elFormValidator = new FormValidator(formConfig, addElPopup);
elFormValidator.enableValidation();

//Создаем объекты класса Popup
const profileEditPopup = new PopupWithForm(profilePopupSelector, (inputValues) => {
  userInfo.setUserInfo(inputValues);
  profileEditPopup.close();
});
profileEditPopup.setEventListeners();

const addElementPopup = new PopupWithForm(addElPopupSelector, (inputValues) => {
  const newCard = createCard(inputValues);
  section.addItem(newCard);
  addElementPopup.close();
});

addElementPopup.setEventListeners();

const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

//Частные обработчики кнопок
editButton.addEventListener('click', () => {
  const profileData = userInfo.getUserInfo();
  popupInputName.value = profileData.name;
  popupInputdescription.value = profileData.description;
  profileFormValidator.resetFormErrorsOnShow();
  console.log(profileData);
  profileEditPopup.open();
});

addElButton.addEventListener('click', () => { elFormValidator.validatePopupForm(); addElementPopup.open() });

