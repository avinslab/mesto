const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__container');
const popupWindow = document.querySelector('.popup');

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', hidePopup);
saveButton.addEventListener('submit', formSubmitHandler);

function showPopup() {
  let profileTitle = document.querySelector('.profile__title');
  let profileSubTitle = document.querySelector('.profile__subtitle');
  let popupInputName = document.getElementById('name');
  let popupInputdescription = document.getElementById('description');

  popupInputName.value = profileTitle.textContent;
  popupInputdescription.value = profileSubTitle.textContent;

  popupWindow.classList.add('popup_opened');
}

function hidePopup() {
  popupWindow.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  let profileTitle = document.querySelector('.profile__title');
  let profileSubTitle = document.querySelector('.profile__subtitle');
  let popupInputName = document.getElementById('name');
  let popupInputdescription = document.getElementById('description');
  profileTitle.textContent = popupInputName.value;
  profileSubTitle.textContent = popupInputdescription.value;
  hidePopup();
}

