let popupProfileOpen = document.querySelector('.profile__edit');
let popupProfileClose = document.querySelector('.popup-profile__close');
let saveButton = document.querySelector('.popup-profile__save');

let popupProfileContainer = document.querySelector('.popup-profile__container');
let popupProfileForm = document.querySelector('.popup-profile__form');
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
let popupImageClose = document.querySelector('.popup-image__close');
let popupImageContainer = document.querySelector('.popup-image__container');

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
  { imageSrc: '../assets/images/latemar.png' , legend: 'Lago Latemar'},
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
  const removeIcon = clonedTemplate.querySelector('.element__delete-icon'); // Get the remove icon

  image.src = data.imageSrc;
  image.alt = data.legend;
  legendText.textContent = data.legend;

  likeIcon.addEventListener('click', function() {
    likeIcon.classList.toggle('clicked');
  });

  removeIcon.addEventListener('click', function() { // Add event listener to the remove icon
    elementContainer.removeChild(elementItem);
    // You might also want to update your elementData array to reflect the removal
  });

  elementContainer.appendChild(clonedTemplate);
});

let popupImageSave = document.querySelector('.popup-image__save'); // Get the "Adicionar" button

function setupDeleteIcon(deleteIcon, elementItem, imageSrc, legend) {
  deleteIcon.addEventListener('click', function() {
    elementContainer.removeChild(elementItem);
    // You might also want to update your elementData array to reflect the removal
  });

  // Add a click event listener to the image
  imageSrc.addEventListener('click', function() {
    imageViewerImage.src = imageSrc.src;
    imageViewerImage.alt = legend;

    const legendContainer = document.querySelector('.popup-image-viewer__legend');
    legendContainer.textContent = legend;

    imageViewerContainer.classList.add('popup__container_active');
    overlay.classList.add('popup__overlay_active');
  });
}

popupImageSave.addEventListener('click', function() {
  let titleInput = document.querySelector('.popup-image__local').value;
  let imageUrlInput = document.querySelector('.popup-image__url').value;

  // Create a new element using the template
  const clonedTemplate = elementTemplate.content.cloneNode(true);
  const elementItem = clonedTemplate.querySelector('.element__item');
  const image = clonedTemplate.querySelector('.element__image');
  const legendText = clonedTemplate.querySelector('.element__legend-text');
  const likeIcon = clonedTemplate.querySelector('.element__like-icon');
  const removeIcon = clonedTemplate.querySelector('.element__delete-icon'); // Get the new remove icon

  image.src = imageUrlInput;
  image.alt = titleInput;
  legendText.textContent = titleInput;

  likeIcon.addEventListener('click', function() {
    likeIcon.classList.toggle('clicked');
  });

  setupDeleteIcon(removeIcon, elementItem, image, titleInput); // Call the setupDeleteIcon function

  // Insert the newly created element at the beginning of elementContainer
  elementContainer.insertBefore(clonedTemplate, elementContainer.firstChild);

  // Close the popup
  overlay.classList.remove('popup__overlay_active');
  popupImageContainer.classList.remove('popup__container_active');

  // Clear input fields
  document.querySelector('.popup-image__local').value = '';
  document.querySelector('.popup-image__url').value = '';
});


const imageViewerContainer = document.querySelector('.popup-image-viewer__container');
const imageViewerImage = document.querySelector('.popup-image-viewer__image');
const imageViewerClose = document.querySelector('.popup-image-viewer__close');

document.querySelectorAll('.element__image').forEach((image, index) => {
  image.addEventListener('click', function() {
    const imageData = elementData[index]; // Get the data for the clicked image
    imageViewerImage.src = imageData.imageSrc;
    imageViewerImage.alt = imageData.legend;

    const legendContainer = document.querySelector('.popup-image-viewer__legend');
    legendContainer.textContent = imageData.legend;

    imageViewerContainer.classList.add('popup__container_active');
    overlay.classList.add('popup__overlay_active');
  });
});

// Add event listener to close the image viewer popup
imageViewerClose.addEventListener('click', function() {
  imageViewerContainer.classList.remove('popup__container_active');
  overlay.classList.remove('popup__overlay_active');
});
