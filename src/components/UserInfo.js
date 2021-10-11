export default class Userinfo {
  constructor({ profileNameSelector, profileDescriptionSelector, profileAvatarSelector }) {
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
      avatar: this._profileAvatar
    };
    return this._userData;
  }

  setUserInfo(userInfo) {
    this._profileName.textContent = userInfo.userName;
    this._profileDescription.textContent = userInfo.userDescription;
    if (userInfo.uid)
      this._uid = userInfo.uid;
    if (userInfo.avatar)
      this._profileAvatarLink = userInfo.avatar;
  }
  
  setUserAvatar() {
    this._profileAvatar.style.backgroundImage = `url(${this._profileAvatarLink})`;
    this._profileAvatar.alt = this._profileName.textContent;
  }
}
