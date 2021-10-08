import './index.css';

//Импортируем классы карточeк,валидатора и переменные
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDeleteCard from '../components/PopupDeleteCard';
import Userinfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Api from '../components/Api';

import {
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
  popupInputdescription,
  deleteCardPopupSelector,
  changeAvatarPopupSelector,
  profileAvatarSelector,
  profileAvatarPopup,
  token,
  groupId
}
  from '../utils/constants.js';

//Создаем объект класса API
const mestoApi = new Api(token, groupId);

//Функция создания объекта класса карточки
function createCard(card) {
  const element = new Card(
    {
      name: card.name,
      image: card.link,
      id: card._id,
      likes: card.likes,
      isOwned: card.isOwned
    },
    '#element',
    //handleCardClick - обработчик клика на карточку
    () => imagePopup.open(card),
    //handleLikeClick - обработчик кликов лайков
    () => {
      if (element._liked)
        mestoApi.removeLike(card._id)
          .then((res) => {
            element.setLikes(res.likes);
            element.toggleLikedByOwner();
          })
          .catch((err) => console.log(`Ошибка: ${err}`));
      else
        mestoApi.setLike(card._id)
          .then((res) => {
            element.setLikes(res.likes);
            element.toggleLikedByOwner();
          })
          .catch((err) => console.log(`Ошибка: ${err}`));
    },
    //handleDeleteClick - обработчик удаления карточки
    () => { deleteCardPopup.open(element); },
    //UID пользователя
    userInfo.getUserInfo().uid
  );
  return element.createCard();
}
//маcсив объектов карточек
const cards = [];

//Секция с карточками
const section = new Section(
  {
    items: cards,
    renderer: (item) => {
      const cardElement = createCard(item);
      section.addItem(cardElement);
    }
  },
  elementsContainer);

//Загружаем карточки с сервера 
function updateCardSection() {
  mestoApi.getCardsData()
    .then((res) => {
      res.forEach((card) => cards.push(
        {
          name: card.name,
          link: card.link,
          likes: card.likes,
          _id: card._id,
          isOwned: card.owner._id === userInfo.getUserInfo().uid,
        }));
    })
    .finally(() => {
      section.renderItems();
    })
    .catch((err) => console.log(`Ошибка: ${err}`));
}
updateCardSection();
//Создаем объекты класса UserInfo
const userInfo = new Userinfo(
  {
    profileNameSelector: profileTitle,
    profileDescriptionSelector: profileSubTitle,
    profileAvatarSelector: profileAvatarSelector
  });

//Загружаем с сервера данные профиля 
mestoApi.getProfileData()
  .then((profileData) => {
    userInfo.setUserInfo({
      userName: profileData.name,
      userDescription: profileData.about,
      uid: profileData._id
    });
    userInfo.setUserAvatar(profileData.avatar);
  })
  .catch((err) => console.log(`Ошибка: ${err}`));

//Создаем объекты класса FormValidator
const profileFormValidator = new FormValidator(formConfig, profilePopup);
profileFormValidator.enableValidation();

const elFormValidator = new FormValidator(formConfig, addElPopup);
elFormValidator.enableValidation();

const changeAvatarFormValidator = new FormValidator(formConfig, profileAvatarPopup);
changeAvatarFormValidator.enableValidation();

//Создаем объекты класса Popup
//Попап редактирования профиля
const profileEditPopup = new PopupWithForm(profilePopupSelector, (inputValues) => {
  userInfo.setUserInfo(inputValues);
  profileEditPopup.renderLoading(true);
  mestoApi.patchProfileData({ name: inputValues.userName, about: inputValues.userDescription })//Сохраняем данные о пользователе на сервере 
    .then(() => {
      profileEditPopup.renderLoading(false);
      profileEditPopup.close();
    })
    .catch((err) => console.log(`Ошибка: ${err}`));
});
profileEditPopup.setEventListeners();

//Попап добавления карточки
const addElementPopup = new PopupWithForm(addElPopupSelector, (inputValues) => {
  inputValues.isOwned = true;
  const newCard = createCard(inputValues);
  addElementPopup.renderLoading(true);
  mestoApi.postNewCard(inputValues)
    .then(() => {
      section.addItem(newCard);
      addElementPopup.renderLoading(false);
      addElementPopup.close();
    })
    .catch((err) => console.log(`Ошибка: ${err}`));
});
addElementPopup.setEventListeners();

//Попап просмотра карточки
const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

//Попап удаления карточки
const deleteCardPopup = new PopupDeleteCard(
  deleteCardPopupSelector,
  (evt, card) => {
    evt.preventDefault();
    mestoApi.deleteCard(card._id)
      .then(() => {
        card.deleteCard()
        deleteCardPopup.close()
      })
      .catch((err) => {
        console.log(err)
      })
  });
deleteCardPopup.setEventListeners();

//Попап смены аватара
const changeAvatarPopup = new PopupWithForm(
  changeAvatarPopupSelector,
  (inputValues) => {
    changeAvatarPopup.renderLoading(true);
    mestoApi.setAvatar(inputValues.link)
      .then(res => {
        userInfo.setUserAvatar(res.avatar)
        changeAvatarPopup.close()
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        changeAvatarPopup.renderLoading(false);
      });
  });
changeAvatarPopup.setEventListeners();

//Частные обработчики кнопок
document.querySelector(profileAvatarSelector).addEventListener('click',
  () => {
    changeAvatarPopup.open();
  });

editButton.addEventListener('click', () => {
  const profileData = userInfo.getUserInfo();
  popupInputName.value = profileData.name;
  popupInputdescription.value = profileData.description;
  profileFormValidator.resetFormErrorsOnShow();
  profileEditPopup.open();
});

addElButton.addEventListener('click',
  () => {
    elFormValidator.resetFormErrorsOnShow();
    addElementPopup.open()
  });
