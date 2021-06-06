const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__container');
const popupWindow = document.querySelector('.popup');

editButton.addEventListener('click',showPopup);
closeButton.addEventListener('click',hidePopup);
saveButton.addEventListener('submit', formSubmitHandler);

function showPopup(){
  let profileTitle = document.querySelector('.profile__title');
  let profileSubTitle = document.querySelector('.profile__subtitle');

  document.getElementById('name').value = profileTitle.textContent;
  document.getElementById('description').value = profileSubTitle.textContent;

  popupWindow.classList.add('popup_opened');
}

function hidePopup(){
  popupWindow.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  document.querySelector('.profile__title').textContent=document.getElementById('name').value;
  document.querySelector('.profile__subtitle').textContent=document.getElementById('description').value;
  hidePopup();
}

