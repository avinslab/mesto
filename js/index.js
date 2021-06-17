//элементы управления профилем
const editButton = document.querySelector('#profile-edit-button');
const closeButton = document.querySelector('#close-profile-popup');
const profilePopup = document.querySelector('#edit-profile');
const profileForm = document.querySelector('#edit-profile-form');
const profileTitle = document.querySelector('#name');
const profileSubTitle = document.querySelector('#description');
const popupInputName = document.querySelector('#profile-name');
const popupInputdescription = document.querySelector('#profile-description');
const saveProfileButton = document.querySelector('#save-profile-popup');

//элементы управления карточками мест
const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element').content;
const addElButton = document.querySelector('#add-element-button');
const closeElPopupButton = document.querySelector('#close-element-popup');
const addElPopup = document.querySelector('#add-element');
const elNameInput = document.querySelector('#element-name');
const elLinkInput = document.querySelector('#element-link');
const formAddCard = document.querySelector('#add-element-form');

//элементы управления попапа с картинкой
const imagePopup = document.querySelector('#image-popup');
const closeImagePopupButton = document.querySelector('#close-image-popup');
const imagePopupPicture = document.querySelector('#popup-image-picture');
const imagePopupTitle = document.querySelector('#popup-image-title');

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

//Управление видимостью попапов
function openPopup(popup) {
  popup.classList.add('popup_opened'); //добавляем к popup класс popup_opened
}
function closePopup(popup) {
  popup.classList.remove('popup_opened'); //удаляем у popup класс popup_opened
}

//Форма редактирования профиля

function showProfilePopup() {
  const profileFormInputs = Array.from(profileForm.querySelectorAll('.popup__input'));

  popupInputName.value = profileTitle.textContent;
  popupInputdescription.value = profileSubTitle.textContent;

  //Проверяем валидацию присвоенных значений всех инпутов форм при показе попапа
  profileFormInputs.forEach(inputElement => {
    checkInputValidity(profileForm, inputElement, formConfig);
  });

  //Выставляем средствами валидации правильный стейт кнопки
  toggleButtonState(profileFormInputs, saveProfileButton, formConfig);

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
  formAddCard.reset();
  openPopup(addElPopup);
}

function submitElFormHandler(evt) {
  evt.preventDefault();
  const card = { name: elNameInput.value, link: elLinkInput.value };
  addElement(card);
  closePopup(addElPopup);
}

function createCard(card) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = card.link;
  element.querySelector('.element__image').alt = card.name;
  element.querySelector('.element__title').textContent = card.name;
  element.querySelector('.element__like-button').addEventListener('click', function (evt) { evt.target.classList.toggle('element__like-button_active'); });
  element.querySelector('.element__trash-button').addEventListener('click', function (evt) { evt.target.parentElement.remove(); });
  element.querySelector('.element__image').addEventListener('click', function (evt) { showImagePopup(evt); });
  return element;
}

function addElement(element) {
  elementsContainer.prepend(createCard(element));
}

//Функции работы попапа с картинкой

function showImagePopup(evt) {
  imagePopupPicture.src = evt.target.src;
  imagePopupPicture.alt = evt.target.alt;
  imagePopupTitle.textContent = evt.target.alt;
  openPopup(imagePopup);
}

//Листенеры кнопок
editButton.addEventListener('click', showProfilePopup);
closeButton.addEventListener('click', function () { closePopup(profilePopup);});
profilePopup.addEventListener('submit', submitFormHandler);
addElPopup.addEventListener('submit', submitElFormHandler);
addElButton.addEventListener('click', showAddElPopup);
closeElPopupButton.addEventListener('click', function () { closePopup(addElPopup);});
closeImagePopupButton.addEventListener('click', function () { closePopup(imagePopup);});


renderElements();

