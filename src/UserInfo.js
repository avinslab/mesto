export default class Userinfo {
  constructor({ profileNameSelector, profileDescriptionSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileDescription = document.querySelector(profileDescriptionSelector);
  }
  getUserInfo() {
    this._userData = {
      name: this._profileName.textContent,
      description: this._profileDescription.textContent
    };

    return this._userData;
  }
  setUserInfo(userInfo) {
    this._profileName.textContent = userInfo.userName;
    this._profileDescription.textContent = userInfo.userDescription;
  }
}
