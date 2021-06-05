const editButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');
const popupWindow = document.querySelector('.popup');

editButton.addEventListener('click',showPopup);
closeButton.addEventListener('click',hidePopup);

function showPopup(){
  popupWindow.classList.add('popup_opened');
}
function hidePopup(){
  popupWindow.classList.remove('popup_opened');
}
