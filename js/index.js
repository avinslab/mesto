//элементы управления профилем
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__container');
const popupWindow = document.querySelector('.popup');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__subtitle');
let popupInputName = document.getElementById('name');
let popupInputdescription = document.getElementById('description');


//элементы управления карточками мест
const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element').content;
const addElButton = document.querySelector('.profile__add-button');
const closeElPopupButton = document.getElementById('close-element-popup');
const addElPopup = document.getElementById('add-element');
const saveElButton = document.getElementById('save-element');
const elNameInput = document.getElementById('element-name');
const elLinkInput = document.getElementById('element-link');

//Шесть карточек «из коробки»
renderElements();

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

//Форма редактирования профиля
function showPopup() {
  popupInputName.value = profileTitle.textContent;
  popupInputdescription.value = profileSubTitle.textContent;
  popupWindow.classList.add('popup_opened');
}

function hidePopup() {
  popupWindow.classList.remove('popup_opened');
}

function submitFormHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputName.value;
  profileSubTitle.textContent = popupInputdescription.value;
  hidePopup();
}

//Функции работы с формой карточек мест
function showAddElPopup() {
  elNameInput.value = '';
  elLinkInput.value = '';
  addElPopup.classList.add('popup_opened');
}
function hideAddElPopup() {
  addElPopup.classList.remove('popup_opened');
}

function submitElFormHandler(evt) {
  evt.preventDefault();
  let card = { name: elNameInput.value, link: elLinkInput.value };
  addElement(card);
}

function addElement(card) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = card.link;
  element.querySelector('.element__image').alt = card.name;
  element.querySelector('.element__title').textContent = card.name;
  elementsContainer.append(element);
  hideAddElPopup();
}

//Листенеры кнопок
editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', hidePopup);
saveButton.addEventListener('submit', submitFormHandler);
saveElButton.addEventListener('click', submitElFormHandler);
addElButton.addEventListener('click', showAddElPopup);
closeElPopupButton.addEventListener('click', hideAddElPopup);

