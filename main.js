(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._image=e.image,this._name=e.name,this._likes=e.likes,this._id=e.id,this._isOwned=e.isOwned,this._cardSelector=n,this._handleCardClick=r,this._handleLikeClick=o,this._handleDeleteClick=i,this._liked=!1,this._likes&&this._likes.forEach((function(e){e._id===a&&(s._liked=!0)}))}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){this._element=document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0),this._likeButton=this._element.querySelector(".element__like-button"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._trashButton=this._element.querySelector(".element__trash-button"),this._cardImage=this._element.querySelector(".element__image")}},{key:"_toggleLikeDisplay",value:function(){this._likeButton.classList.toggle("element__like-button_active")}},{key:"_addEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){return e._handleLikeClick()})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick({link:e._image,name:e._name})})),this._trashButton.addEventListener("click",(function(){return e._handleDeleteClick()}))}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"createCard",value:function(){return this._getTemplate(),this._cardImage.src=this._image,this._cardImage.alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this._likes&&(this._likeCounter.textContent=this._likes.length>0?this._likes.length:""),this._liked&&this._likeButton.classList.toggle("element__like-button_active"),this._isOwned||this._trashButton.remove(),this._addEventListeners(),this._element}},{key:"updateLikes",value:function(e){this._likes=e,this._likeCounter.textContent=this._likes.length>0?this._likes.length:"",this._toggleLikedByOwner(),this._toggleLikeDisplay()}},{key:"_toggleLikedByOwner",value:function(){this._liked=!this._liked}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formEl=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formEl.querySelectorAll(this._inputSelector)),this._submitButtonEL=this._formEl.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._formEl.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formEl.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this.disableSubmitButton():(this._submitButtonEL.disabled=!1,this._submitButtonEL.classList.remove(this._inactiveButtonClass))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetFormErrorsOnShow",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._formEl.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"disableSubmitButton",value:function(){this._submitButtonEL.classList.add(this._inactiveButtonClass),this._submitButtonEL.disabled=!0}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupEl=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClickClose",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupEl.addEventListener("click",(function(t){return e._handleOverlayClickClose(t)})),this._popupEl.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()}))}},{key:"open",value:function(){this._popupEl.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupEl.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&o(t.prototype,n),e}();function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popupEl.querySelector(".popup__image-preview"),t._title=t._popupEl.querySelector(".popup__image-title"),t}return t=a,(n=[{key:"open",value:function(e){u(f(a.prototype),"open",this).call(this),this._image.src=e.link,this._image.alt=e.name,this._title.textContent=e.name}}])&&s(t.prototype,n),a}(i);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitCallback=t,n._form=n._popupEl.querySelector(".popup__form"),n._formInputsList=n._popupEl.querySelectorAll(".popup__input"),n._saveButton=n._popupEl.querySelector(".popup__save-button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._formInputsList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;d(m(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitCallback(e._getInputValues())}))}},{key:"close",value:function(){d(m(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._saveButton.innerText=e?"Сохранение...":"Сохранить"}}])&&_(t.prototype,n),a}(i);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._button=n._popupEl.querySelector(".popup__save-button"),n._handleButtonClick=t,n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;E(L(a.prototype),"setEventListeners",this).call(this),this._button.addEventListener("click",(function(t){e._handleButtonClick(t,e._card)}))}},{key:"open",value:function(e){this._card=e,E(L(a.prototype),"open",this).call(this)}}])&&g(t.prototype,n),a}(i);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=t.profileNameSelector,r=t.profileDescriptionSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileDescription=document.querySelector(r),this._uid="",this._profileAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userData={name:this._profileName.textContent,description:this._profileDescription.textContent,uid:this._uid,avatar:this._profileAvatar},this._userData}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.userName,this._profileDescription.textContent=e.userDescription,e.uid&&(this._uid=e.uid),e.avatar&&(this._profileAvatarLink=e.avatar)}},{key:"setUserAvatar",value:function(){this._profileAvatar.style.backgroundImage="url(".concat(this._profileAvatarLink,")"),this._profileAvatar.alt=this._profileName.textContent}}])&&O(t.prototype,n),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;this.clear(),e.reverse().forEach((function(e){t._renderer(e)}))}}])&&j(t.prototype,n),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._token=t,this._id=n,this._baseUrl=r,this._headers={authorization:this._token,"Content-Type":"application/json"}}var t,n;return t=e,(n=[{key:"getProfileData",value:function(){return fetch("".concat(this._baseUrl).concat(this._id,"/users/me"),{headers:this._headers}).then(this._getResponse)}},{key:"patchProfileData",value:function(e){return fetch("".concat(this._baseUrl).concat(this._id,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getResponse)}},{key:"getCardsData",value:function(){return fetch("".concat(this._baseUrl).concat(this._id,"/cards"),{headers:this._headers}).then(this._getResponse)}},{key:"postNewCard",value:function(e){return fetch("".concat(this._baseUrl).concat(this._id,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl).concat(this._id,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponse)}},{key:"setLike",value:function(e){return fetch("".concat(this._baseUrl).concat(this._id,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl).concat(this._id,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl).concat(this._id,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._getResponse)}},{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&I(t.prototype,n),e}(),q="https://mesto.nomoreparties.co/v1/",D=document.querySelector("#profile-edit-button"),A=document.querySelector("#edit-profile"),T=document.querySelector("#profile-name"),U=document.querySelector("#profile-description"),x=document.querySelector("#add-element-button"),N=document.querySelector("#add-element"),V="#change-avatar-popup",F=".profile__avatar",H=document.querySelector(V),J={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=new R("65ef2316-73ff-497f-a9ee-7b46b79b7eca","cohort-28",q);function $(e){var n=new t({name:e.name,image:e.link,id:e._id,likes:e.likes,isOwned:e.isOwned},"#element",(function(){return ee.open(e)}),(function(){n._liked?z.removeLike(e._id).then((function(e){n.updateLikes(e.likes)})).catch((function(e){return console.log("Ошибка: ".concat(e))})):z.setLike(e._id).then((function(e){n.updateLikes(e.likes)})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}),(function(){te.open(n)}),K.getUserInfo().uid);return n.createCard()}var G=new B((function(e){var t=$(e);G.addItem(t)}),".elements"),K=new P({profileNameSelector:"#name",profileDescriptionSelector:"#description",profileAvatarSelector:F}),Q=new r(J,A);Q.enableValidation();var W=new r(J,N);W.enableValidation();var X=new r(J,H);X.enableValidation();var Y=new b("#edit-profile",(function(e){K.setUserInfo(e),Y.renderLoading(!0),z.patchProfileData({name:e.userName,about:e.userDescription}).then((function(){Y.close()})).finally((function(){return Y.renderLoading(!1)})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}));Y.setEventListeners();var Z=new b("#add-element",(function(e){Z.renderLoading(!0),z.postNewCard(e).then((function(e){e.isOwned=!0;var t=$(e);G.addItem(t),Z.close()})).finally((function(){return Z.renderLoading(!1)})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}));Z.setEventListeners();var ee=new p("#image-popup");ee.setEventListeners();var te=new C("#delete-card-popup",(function(e,t){e.preventDefault(),z.deleteCard(t._id).then((function(){t.deleteCard(),te.close()})).catch((function(e){console.log(e)}))}));te.setEventListeners();var ne=new b(V,(function(e){ne.renderLoading(!0),z.setAvatar(e.link).then((function(e){K.setUserInfo({userName:e.name,userDescription:e.about,uid:e._id,avatar:e.avatar}),K.setUserAvatar(e.avatar)})).catch((function(e){console.log(e)})).finally((function(){ne.renderLoading(!1),ne.close()}))}));ne.setEventListeners(),document.querySelector(F).addEventListener("click",(function(){X.resetFormErrorsOnShow(),ne.open()})),D.addEventListener("click",(function(){var e=K.getUserInfo();T.value=e.name,U.value=e.description,Q.resetFormErrorsOnShow(),Y.open()})),x.addEventListener("click",(function(){W.resetFormErrorsOnShow(),Z.open()})),Promise.all([z.getProfileData(),z.getCardsData()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];K.setUserInfo({userName:o.name,userDescription:o.about,uid:o._id,avatar:o.avatar}),K.setUserAvatar();var a=i.map((function(e){return{name:e.name,link:e.link,likes:e.likes,_id:e._id,isOwned:e.owner._id===K.getUserInfo().uid}}));G.renderItems(a)})).catch((function(e){return console.error("Ошибка при обращении к API ".concat(q,":").concat(e))}))})();