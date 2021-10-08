export default class Api {
    constructor(token, id) {
        this._token = token;
        this._id = id;
    }
    getProfileData() {
        return fetch(`https://mesto.nomoreparties.co/v1/${this._id}/users/me`, {
            headers: {
                authorization: this._token
            }
        })
            .then(this._getResponse)
    }
    patchProfileData(profileData) {
        return fetch(`https://mesto.nomoreparties.co/v1/${this._id}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: profileData.name,
                about: profileData.about
            })

        }).then(this._getResponse);
    }
    getCardsData() {
        return fetch(`https://mesto.nomoreparties.co/v1/${this._id}/cards`, {
            headers: {
                authorization: this._token
            }
        })
            .then(this._getResponse)
    }
    postNewCard(card) {
        return fetch(`https://mesto.nomoreparties.co/v1/${this._id}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: card.name,
                link: card.link
            })
        })
            .then(this._getResponse);
    }
    deleteCard(cardId){
        return fetch(`https://mesto.nomoreparties.co/v1/${this._id}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(this._getResponse);
    }
    setLike(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/${this._id}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(this._getResponse);
    }
    removeLike(cardId){
        return fetch(`https://mesto.nomoreparties.co/v1/${this._id}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(this._getResponse);
    }
    setAvatar(link){
        return fetch(`https://mesto.nomoreparties.co/v1/${this._id}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: link,
            })
        })
            .then(this._getResponse);
    }
    _getResponse(res) {
        if (res.ok)
            return res.json();
        else
            return Promise.reject(`Ошибка: ${res.status}`);
    }
}