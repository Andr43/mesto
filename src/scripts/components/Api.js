export class Api{
  constructor(authorizationCode){
this.authorizationCode = authorizationCode;
  }

  _checkStatus(res){
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}. Проверьте правильность указанного URL-адреса.`)
  }

  getUserInfo(){
  return fetch('https://nomoreparties.co/v1/cohort-59/users/me', {
  headers: {
    authorization: this.authorizationCode
  }
})
  .then(this._checkStatus)
  }

createCard(){
  return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards', {
  headers: {
    authorization: this.authorizationCode
  }
})
  .then(this._checkStatus)
  }

 updateUserInfo(name, about){
    return fetch('https://nomoreparties.co/v1/cohort-59/users/me', {
    method: 'PATCH',
    headers: {
      authorization: this.authorizationCode,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
    .then(this._checkStatus)
  }

    addNewCard(data){
      return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards', {
      method: 'POST',
      headers: {
        authorization: this.authorizationCode,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.heading,
        link: data.source,
      })
    })
      .then(this._checkStatus)
    }

    deleteCard(id){
      return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards/'+ id, {
      method: 'DELETE',
      headers: {
        authorization: this.authorizationCode,
      },
      })
      .then(this._checkStatus)
    }

    putLike(id){
      return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards/'+ id+ '/likes', {
      method: 'PUT',
      headers: {
        authorization: this.authorizationCode,
      },
      })
      .then(this._checkStatus)
    }

    deleteLike(id){
      return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards/'+ id+ '/likes', {
      method: 'DELETE',
      headers: {
        authorization: this.authorizationCode,
      },
      })
      .then(this._checkStatus)
    }

    updateUserImage(imageSource){
      return fetch('https://nomoreparties.co/v1/cohort-59/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: this.authorizationCode,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: imageSource
      })
    })
      .then(this._checkStatus)
    }
}
