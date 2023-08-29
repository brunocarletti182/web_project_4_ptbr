let popupProfileOpen = document.querySelector('.profile__edit');
let popupProfileClose = document.querySelector('.popup__close_profile');
let saveButton = document.querySelector('.popup__save_profile');

let popupProfileContainer = document.querySelector('.popup__container_profile');
let popupProfileForm = document.querySelector('.popup__form_profile');
let profileNameElement = document.querySelector('.profile__name');
let profileProfessionElement = document.querySelector('.profile__profession');
let likeIcons = document.querySelectorAll('.element__like-icon');

let overlay = document.querySelector('.popup__overlay');

popupProfileOpen.addEventListener('click', function() {
  overlay.classList.add('popup__overlay_active');
  popupProfileContainer.classList.add('popup__container_active');
});

popupProfileClose.addEventListener('click', function() {
  overlay.classList.remove('popup__overlay_active');
  popupProfileContainer.classList.remove('popup__container_active');
});

popupProfileForm.addEventListener('submit', function(event) {
  event.preventDefault();
  overlay.classList.remove('popup__overlay_active');
  popupProfileContainer.classList.remove('popup__container_active');
  let nameInput = document.querySelector('.popup__name').value;
  let profInput = document.querySelector('.popup__profession').value;
  profileNameElement.textContent = nameInput;
  profileProfessionElement.textContent = profInput;

});

let popupImageOpen = document.querySelector('.profile__button');
let popupImageClose = document.querySelector('.popup__close_image');
let popupImageContainer = document.querySelector('.popup__container_image');

popupImageOpen.addEventListener('click', function() {
  overlay.classList.add('popup__overlay_active');
  popupImageContainer.classList.add('popup__container_active');
});

popupImageClose.addEventListener('click', function() {
  overlay.classList.remove('popup__overlay_active');
  popupImageContainer.classList.remove('popup__container_active');
});

const elementData = [
  { imageSrc: './assets/images/yosemite-valey.png', legend: 'Vale de Yosemite' },
  { imageSrc: './assets/images/louise-lake.png', legend: 'Lago Louise' },
  { imageSrc: './assets/images/montains.png' , legend: 'Montanhas Carelane'},
  { imageSrc: './assets/images/latemar.png' , legend: 'Lago Latemar'},
  { imageSrc: './assets/images/vanoise.png' , legend: 'Vanoise National'},
  { imageSrc: './assets/images/di-braies-lake.png' , legend: 'Lago Di Braies'},
];

const elementContainer = document.querySelector('.element__container');
const elementTemplate = document.querySelector('#elementTemplate');

elementData.forEach((data, index) => {
  const clonedTemplate = elementTemplate.content.cloneNode(true);
  const elementItem = clonedTemplate.querySelector('.element__item');
  const image = clonedTemplate.querySelector('.element__image');
  const legendText = clonedTemplate.querySelector('.element__legend-text');
  const likeIcon = clonedTemplate.querySelector('.element__like-icon');
  const removeIcon = clonedTemplate.querySelector('.element__delete-icon');

  image.src = data.imageSrc;
  image.alt = data.legend;
  legendText.textContent = data.legend;

  likeIcon.addEventListener('click', function() {
    likeIcon.classList.toggle('clicked');
  });

  removeIcon.addEventListener('click', function() {
    elementContainer.removeChild(elementItem);

  });

  elementContainer.appendChild(clonedTemplate);
});

let popupImageSave = document.querySelector('.popup__save_image');

function setupDeleteIcon(deleteIcon, elementItem, imageSrc, legend) {
  deleteIcon.addEventListener('click', function() {
    elementContainer.removeChild(elementItem);

  });


  imageSrc.addEventListener('click', function() {
    imageViewerImage.src = imageSrc.src;
    imageViewerImage.alt = legend;

    const legendContainer = document.querySelector('.popup__viewer_legend');
    legendContainer.textContent = legend;

    imageViewerContainer.classList.add('popup__container_active');
    overlay.classList.add('popup__overlay_active');
  });
}

popupImageSave.addEventListener('click', function() {
  let titleInput = document.querySelector('.popup__local').value;
  let imageUrlInput = document.querySelector('.popup__url').value;


  const clonedTemplate = elementTemplate.content.cloneNode(true);
  const elementItem = clonedTemplate.querySelector('.element__item');
  const image = clonedTemplate.querySelector('.element__image');
  const legendText = clonedTemplate.querySelector('.element__legend-text');
  const likeIcon = clonedTemplate.querySelector('.element__like-icon');
  const removeIcon = clonedTemplate.querySelector('.element__delete-icon');

  image.src = imageUrlInput;
  image.alt = titleInput;
  legendText.textContent = titleInput;

  likeIcon.addEventListener('click', function() {
    likeIcon.classList.toggle('clicked');
  });

  setupDeleteIcon(removeIcon, elementItem, image, titleInput);


  elementContainer.insertBefore(clonedTemplate, elementContainer.firstChild);


  overlay.classList.remove('popup__overlay_active');
  popupImageContainer.classList.remove('popup__container_active');


  document.querySelector('.popup__local').value = '';
  document.querySelector('.popup__url').value = '';
});


const imageViewerContainer = document.querySelector('.popup__viewer');
const imageViewerImage = document.querySelector('.popup__viewer_image');
const imageViewerClose = document.querySelector('.popup__viewer_close');

document.querySelectorAll('.element__image').forEach((image, index) => {
  image.addEventListener('click', function() {
    const imageData = elementData[index];
    imageViewerImage.src = imageData.imageSrc;
    imageViewerImage.alt = imageData.legend;

    const legendContainer = document.querySelector('.popup__viewer_legend');
    legendContainer.textContent = imageData.legend;

    imageViewerContainer.classList.add('popup__container_active');
    overlay.classList.add('popup__overlay_active');
  });
});


imageViewerClose.addEventListener('click', function() {
  imageViewerContainer.classList.remove('popup__container_active');
  overlay.classList.remove('popup__overlay_active');
});
