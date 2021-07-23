//элементы управления профилем
const editButton = document.querySelector('#profile-edit-button');
const profilePopup = document.querySelector('#edit-profile');
const profileTitle = document.querySelector('#name');
const profileSubTitle = document.querySelector('#description');
const popupInputName = document.querySelector('#profile-name');
const popupInputdescription = document.querySelector('#profile-description');

//элементы управления карточками мест
const elementsContainer = document.querySelector('.elements');
const addElButton = document.querySelector('#add-element-button');
const addElPopup = document.querySelector('#add-element');
const addElForm = document.querySelector('#add-element-form');
const elNameInput = document.querySelector('#element-name');
const elLinkInput = document.querySelector('#element-link');

//элементы управления попапа с картинкой
const imagePopup = document.querySelector('#image-popup');
const imagePopupPicture = document.querySelector('#popup-image-picture');
const imagePopupTitle = document.querySelector('#popup-image-title');

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
import Card from './Card.js';
import FormValidator from './FormValidator.js';

//Шесть карточек «из коробки»

function renderElements() {
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

  initialCards.forEach(card => {
    addElement(card);
  });

}

//Создаем объекты класса Card
function createCard(card) {
  const element = new Card({ name: card.name, image: card.link }, '#element', showImagePopup);
  return element.createCard();
}
function addElement(element) {
  elementsContainer.prepend(createCard(element));
}

//Обработка нажатия клавиш
function escKeyHandler(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//Создаем объекты класса FormValidator
const profileFormValidator = new FormValidator(formConfig,profilePopup);
profileFormValidator.enableValidation();

const elFormValidator = new FormValidator(formConfig,addElPopup);
elFormValidator.enableValidation();

//Управление видимостью попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escKeyHandler);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escKeyHandler);
}

//Форма редактирования профиля
function showProfilePopup() {
  popupInputName.value = profileTitle.textContent;
  popupInputdescription.value = profileSubTitle.textContent;
  profileFormValidator.validatePopupForm();
  openPopup(profilePopup);
}

function submitFormHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputName.value;
  profileSubTitle.textContent = popupInputdescription.value;
  closePopup(profilePopup);
}

//Функции работы с формой карточек мест
function showAddElPopup() {
  addElForm.reset();
  elFormValidator.resetFormErrorsOnShow();
  openPopup(addElPopup);
}

function submitElFormHandler(evt) {
  evt.preventDefault();
  const card = { name: elNameInput.value, link: elLinkInput.value };
  addElement(card);
  closePopup(addElPopup);
}

//Функции работы попапа с картинкой
function showImagePopup(card) {
  imagePopupPicture.src = card.link;
  imagePopupPicture.alt = card.name;
  imagePopupTitle.textContent = card.name;
  openPopup(imagePopup);
}

//Скрываем попап по клику вне границ попапа
function setClosePopupOnOverlayClick(popup) {
  popup.addEventListener('click', function (evt) {
    if (evt.target.contains(popup)) {
      closePopup(popup);
    }
  });
}

//Обрабатываем нажатие на кнопку "закрыть"
function setClosePopupButtonHandler(popup) {
  const closeButton = popup.querySelector('.popup__close-button');
  closeButton.addEventListener('click', function () {
    closePopup(popup);
  });
}

//Устанавливаем обработчики на все события закрытий всех попапов
function setAllPopupsCloseEvents() {
  const popupsList = Array.from(document.querySelectorAll('.popup'));
  popupsList.forEach((popup) => {
    setClosePopupOnOverlayClick(popup);
    setClosePopupButtonHandler(popup);
  });
}

//Частные обработчики кнопок
editButton.addEventListener('click', showProfilePopup);
profilePopup.addEventListener('submit', submitFormHandler);
addElPopup.addEventListener('submit', submitElFormHandler);
addElButton.addEventListener('click', showAddElPopup);

//

renderElements();
setAllPopupsCloseEvents();
