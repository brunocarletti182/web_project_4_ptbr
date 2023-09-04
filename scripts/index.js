const popupProfileOpen = document.querySelector('.profile__edit');
const popupProfileClose = document.querySelector('.popup__close_profile');
const saveButton = document.querySelector('.popup__save_profile');

const popupProfileContainer = document.querySelector('.popup__container_profile');
const popupProfileForm = document.querySelector('.popup__form_profile');
const profileNameElement = document.querySelector('.profile__name');
const profileProfessionElement = document.querySelector('.profile__profession');
const likeIcons = document.querySelectorAll('.element__like-icon');

const overlay = document.querySelector('.popup__overlay');



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
  const nameInput = document.querySelector('.popup__name').value;
  const profInput = document.querySelector('.popup__profession').value;
  profileNameElement.textContent = nameInput;
  profileProfessionElement.textContent = profInput;

});

const popupImageOpen = document.querySelector('.profile__button');
const popupImageClose = document.querySelector('.popup__close_image');
const popupImageContainer = document.querySelector('.popup__container_image');

popupImageOpen.addEventListener('click', function() {
  overlay.classList.add('popup__overlay_active');
  popupImageContainer.classList.add('popup__container_active');
});

popupImageClose.addEventListener('click', function() {
  overlay.classList.remove('popup__overlay_active');
  popupImageContainer.classList.remove('popup__container_active');
});

const elementData = [
  { imageSrc: './assets/images/yosemite-valey.png', legend: 'Montanhas do Vale de Yosemite' },
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

  function setImageSource(imageElement, imageSrc, imageAlt) {
    imageElement.src = imageSrc;
    imageElement.alt = imageAlt;
  }

  setImageSource(image, data.imageSrc, data.legend);
  legendText.textContent = data.legend;

  likeIcon.addEventListener('click', function() {
    likeIcon.classList.toggle('clicked');
  });

  removeIcon.addEventListener('click', function() {
    elementContainer.removeChild(elementItem);

  });

  elementContainer.appendChild(clonedTemplate);
});

const popupImageSave = document.querySelector('.popup__save_image');

function setupDeleteIcon(deleteIcon, elementItem, imageSrc, legend) {
  deleteIcon.addEventListener('click', function() {
    elementContainer.removeChild(elementItem);

  });


  imageSrc.addEventListener('click', function() {
    imageViewerImage.src = imageSrc.src;
    imageViewerImage.alt = legend;

    const legendContainer = document.querySelector('.popup-viewer__legend');
    legendContainer.textContent = legend;

    imageViewerContainer.classList.add('popup__container_active');
    overlay.classList.add('popup__overlay_active');
  });
}

popupImageSave.addEventListener('click', function() {
  const titleInput = document.querySelector('.popup__local').value;
  const imageUrlInput = document.querySelector('.popup__url').value;


  const clonedTemplate = elementTemplate.content.cloneNode(true);
  const elementItem = clonedTemplate.querySelector('.element__item');
  const image = clonedTemplate.querySelector('.element__image');
  const legendText = clonedTemplate.querySelector('.element__legend-text');
  const likeIcon = clonedTemplate.querySelector('.element__like-icon');
  const removeIcon = clonedTemplate.querySelector('.element__delete-icon');

  function setImageAttributes(imageElement, imageSrc, imageAlt, legendElement, legendText) {
    imageElement.src = imageSrc;
    imageElement.alt = imageAlt;
    legendElement.textContent = legendText;
  }

  setImageAttributes(image, imageUrlInput, titleInput, legendText, titleInput);

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


const imageViewerContainer = document.querySelector('.popup-viewer');
const imageViewerImage = document.querySelector('.popup-viewer__image');
const imageViewerClose = document.querySelector('.popup-viewer__close');

document.querySelectorAll('.element__image').forEach((image, index) => {
  image.addEventListener('click', function() {
    const imageData = elementData[index];
    imageViewerImage.src = imageData.imageSrc;
    imageViewerImage.alt = imageData.legend;

    const legendContainer = document.querySelector('.popup-viewer__legend');
    legendContainer.textContent = imageData.legend;

    imageViewerContainer.classList.add('popup__container_active');
    overlay.classList.add('popup__overlay_active');
  });
});


imageViewerClose.addEventListener('click', function() {
  imageViewerContainer.classList.remove('popup__container_active');
  overlay.classList.remove('popup__overlay_active');
});
