let popup = document.querySelector('.popup')
let editButton = document.querySelector('.profile__edit_button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popupContainer = document.querySelector('.popup__container');
let popupForm = document.querySelector('.popup__form');
let popupFieldName = document.querySelector('#name');
let popupFieldJob = document.querySelector('#job');
let saveButton = document.querySelector('.popup__button');
let closeButton = document.querySelector('.close-button');

function ready(){
  popup.classList.remove('popup');
};

document.addEventListener("DOMContentLoaded", ready);

editButton.addEventListener('click', function(){
  popup.classList.add('popup');
  popupContainer.classList.add('popup_opened');
  closeButton.style = 'display: block';
  popupFieldName.setAttribute('value', 'Жак-Ив Кусто');
  popupFieldJob.setAttribute('value', 'Исследователь океана');
}
);

popupFieldName.addEventListener('click', function(){
  popupFieldName.removeAttribute('value', 'Жак-Ив Кусто');
  popupFieldName.addEventListener('keyup', function(e) {
    profileName.textContent = e.target.value
});
});

popupFieldJob.addEventListener('click', function(){
  popupFieldJob.removeAttribute('value', 'Исследователь океана');
  popupFieldJob.addEventListener('keyup', function(e) {
    profileJob.textContent = e.target.value
});
});

closeButton.addEventListener('click', function (){
  popupContainer.classList.remove('popup_opened');
  closeButton.style = 'display: none';
  popup.classList.remove('popup');
});

saveButton.addEventListener('click', function (){
  popupContainer.classList.remove('popup_opened');
  closeButton.style = 'display: none';
  popup.classList.remove('popup');
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  popupFieldName.value = profileName.textContent;
  popupFieldJob.value = profileJob.textContent;
};
popupForm.addEventListener('submit', formSubmitHandler); 