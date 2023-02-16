export class Api{
  constructor(authorizationCode, errorBlock, errorHeading, main){
this.authorizationCode = authorizationCode;
this._errorBlock = errorBlock;
this._errorHeading = errorHeading;
this._main = main
  }

  _dataSaving(isSaving, saveButtonSelector, textButton){
const saveButton = document.querySelector(saveButtonSelector);
if(isSaving){
saveButton.textContent = 'Сохранение...'
} else (
  saveButton.textContent = textButton
)
  }

  _showError(err){
    this._main.classList.add('invisible');
    this._errorBlock.classList.add('visible');
    this._errorHeading.textContent = err;
  }

  getUserInfo(nameText, jobText, imageSource, userId){
  return fetch('https://nomoreparties.co/v1/cohort-59/users/me', {
  headers: {
    authorization: this.authorizationCode
  }
})
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}. Проверьте правильность указанного URL-адреса.`))
  .then((result) => {
    nameText.textContent = result.name;
    jobText.textContent = result.about;
    imageSource.src = result.avatar;
    userId.id = result._id;
  })
  .catch((err) => {
    this._showError(err)
  })
  }

createCard(){
  return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards', {
  headers: {
    authorization: this.authorizationCode
  }
})
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}. Проверьте правильность указанного URL-адреса.`))
  .catch((err) => {
    this._showError(err)
  })
  }

 updateUserInfo(name, about, saveButton){
  this._dataSaving(true, saveButton)
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
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}. Проверьте правильность указанного URL-адреса.`))
    .catch((err) => {
      this._showError(err)
    })
    .finally(() => {this._dataSaving(false, saveButton, 'Сохранить')})
  }

    addNewCard(data, saveButton){
      this._dataSaving(true, saveButton)
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
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}. Проверьте правильность указанного URL-адреса.`))
      .catch((err) => {
        this._showError(err)
      })
      .finally(() => {this._dataSaving(false, saveButton, 'Создать')})
    }

    deleteCard(id){
      return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards/'+ id, {
      method: 'DELETE',
      headers: {
        authorization: this.authorizationCode,
      },
      })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}. Проверьте правильность указанного URL-адреса.`))
      .catch((err) => {
        this._showError(err)
      })
    }

    putLike(id){
      return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards/'+ id+ '/likes', {
      method: 'PUT',
      headers: {
        authorization: this.authorizationCode,
      },
      })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}. Проверьте правильность указанного URL-адреса.`))
      .catch((err) => {
        this._showError(err)
      })
    }

    deleteLike(id){
      return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards/'+ id+ '/likes', {
      method: 'DELETE',
      headers: {
        authorization: this.authorizationCode,
      },
      })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}. Проверьте правильность указанного URL-адреса.`))
      .catch((err) => {
        this._showError(err)
      })
    }

    updateUserImage(imageSource, saveButton){
      this._dataSaving(true, saveButton)
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
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}. Проверьте правильность указанного URL-адреса.`))
      .catch((err) => {
        this._showError(err)
      })
      .finally(() => {this._dataSaving(false, saveButton, 'Сохранить')})
    }
}
