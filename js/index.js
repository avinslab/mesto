const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__container');
const popupWindow = document.querySelector('.popup');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__subtitle');
let popupInputName = document.getElementById('name');
let popupInputdescription = document.getElementById('description');

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

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', hidePopup);
saveButton.addEventListener('submit', submitFormHandler);
