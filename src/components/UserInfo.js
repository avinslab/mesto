export default class Userinfo {
  constructor({ profileNameSelector, profileDescriptionSelector,profileAvatarSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileDescription = document.querySelector(profileDescriptionSelector);
    this._uid = '';
    this._profileAvatar = document.querySelector(profileAvatarSelector);
  }
  getUserInfo() {
    this._userData = {
      name: this._profileName.textContent,
      description: this._profileDescription.textContent,
      uid: this._uid,
    };

    return this._userData;
  }
  setUserInfo(userInfo) {
    this._profileName.textContent = userInfo.userName;
    this._profileDescription.textContent = userInfo.userDescription;
    this._uid = userInfo.uid;
  }
  setUserAvatar(link){
    this._profileAvatar.style.backgroundImage = `url(${link})`;
    this._profileAvatar.alt = this._profileName.textContent;
  }
}
