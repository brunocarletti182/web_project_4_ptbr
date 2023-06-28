let openPopupButton = document.querySelector('.profile__edit');
let closePopupButton = document.querySelector('.popup__close');
let savePopupButton = document.querySelector('.popup__save');
let overlay = document.querySelector('.popup__overlay');
let popupContainer = document.querySelector('.popup__container');
let formElement = document.querySelector('.popup__form');
let profileNameElement = document.querySelector('.profile__name');
let profileProfessionElement = document.querySelector('.profile__profession');
let likeIcons = document.querySelectorAll('.element__like-icon');

openPopupButton.addEventListener('click', function() {
  overlay.classList.add('popup__overlay_active');
  popupContainer.classList.add('popup__container_active');
});

closePopupButton.addEventListener('click', function() {
  overlay.classList.remove('popup__overlay_active');
  popupContainer.classList.remove('popup__container_active');
});

likeIcons.forEach(likeIcon => {
  likeIcon.addEventListener('click', function() {
    likeIcon.classList.toggle('clicked');
  });
});

formElement.addEventListener('submit', function(event) {
  event.preventDefault();
  overlay.classList.remove('popup__overlay_active');
  popupContainer.classList.remove('popup__container_active');
  let nameInput = document.querySelector('.popup__name').value;
  let profInput = document.querySelector('.popup__profession').value;
  profileNameElement.textContent = nameInput;
  profileProfessionElement.textContent = profInput;
});

