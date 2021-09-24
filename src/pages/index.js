import './index.css';

//Импортируем классы карточeк,валидатора и переменные
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Userinfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import {
  initialCards,
  elementsContainer,
  profilePopup,
  profileTitle,
  profileSubTitle,
  formConfig,
  addElPopup,
  profilePopupSelector,
  addElPopupSelector,
  imagePopupSelector,
  editButton,
  addElButton,
  popupInputName,
  popupInputdescription
}
  from '../utils/constants.js';



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
  profileEditPopup.open();
});

addElButton.addEventListener('click', () => { elFormValidator.resetFormErrorsOnShow(); addElementPopup.open() });

