export default class Api {
    constructor(token, id, baseUrl) {
        this._token = token;
        this._id = id;
        this._baseUrl = baseUrl;
        this._headers = {
            authorization: this._token,
            'Content-Type': 'application/json'
        };
    }

    getProfileData() {
        return fetch(`${this._baseUrl}${this._id}/users/me`, {
            headers: this._headers,
        })
            .then(this._getResponse)
    }

    patchProfileData(profileData) {
        return fetch(`${this._baseUrl}${this._id}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: profileData.name,
                about: profileData.about
            })

        }).then(this._getResponse);
    }

    getCardsData() {
        return fetch(`${this._baseUrl}${this._id}/cards`, {
            headers: this._headers,
        })
            .then(this._getResponse)
    }

    postNewCard(card) {
        return fetch(`${this._baseUrl}${this._id}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: card.name,
                link: card.link
            })
        })
            .then(this._getResponse);
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}${this._id}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._getResponse);
    }

    setLike(cardId) {
        return fetch(`${this._baseUrl}${this._id}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then(this._getResponse);
    }

    removeLike(cardId) {
        return fetch(`${this._baseUrl}${this._id}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._getResponse);
    }

    setAvatar(link) {
        return fetch(`${this._baseUrl}${this._id}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
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