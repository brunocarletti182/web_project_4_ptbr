// Profile Popup Elements
const popupProfileOpen = document.querySelector('.profile__edit');
const popupProfileClose = document.querySelector('.popup__close_profile');
const saveButton = document.querySelector('.popup__save_profile');
const popupProfileContainer = document.querySelector('.popup__container_profile');
const popupProfileForm = document.querySelector('.popup__form_profile');
const profileNameElement = document.querySelector('.profile__name');
const profileProfessionElement = document.querySelector('.profile__profession');
const likeIcons = document.querySelectorAll('.element__like-icon');
const overlay = document.querySelector('.popup__overlay');

// Open and close image popup
const popupImageOpen = document.querySelector('.profile__button');
const popupImageClose = document.querySelector('.popup__close_image');
const popupImageContainer = document.querySelector('.popup__container_image');

// Image Viewer
const popupImageSave = document.querySelector('.popup__save_image');
const imageViewerContainer = document.querySelector('.popup-viewer');
const imageViewerImage = document.querySelector('.popup-viewer__image');
const imageViewerClose = document.querySelector('.popup-viewer__close');

// Event listeners for opening and closing profile popup
popupProfileOpen.addEventListener('click', function() {
  overlay.classList.add('popup__overlay_active');
  popupProfileContainer.classList.add('popup__container_active');
});

popupProfileClose.addEventListener('click', function() {
  overlay.classList.remove('popup__overlay_active');
  popupProfileContainer.classList.remove('popup__container_active');
});

popupImageOpen.addEventListener('click', function() {
  overlay.classList.add('popup__overlay_active');
  popupImageContainer.classList.add('popup__container_active');
});

popupImageClose.addEventListener('click', function() {
  overlay.classList.remove('popup__overlay_active');
  popupImageContainer.classList.remove('popup__container_active');
});

// Close all popups
function closePopups() {
  const popups = document.querySelectorAll('.popup__container');
  popups.forEach(popup => {
    popup.classList.remove('popup__container_active');
  });
  overlay.classList.remove('popup__overlay_active');
}

// Close popups when overlay is clicked
overlay.addEventListener('click', function (event) {
  if (event.target === overlay) {
    closePopups();
  }
});

// Close popups on ESC key press
function closePopupsOnEsc(event) {
  if (event.key === 'Escape') {
    closePopups();
  }
}

document.addEventListener('keydown', closePopupsOnEsc);

// Close image viewer when overlay is clicked
overlay.addEventListener('click', function(event) {
  if (event.target === overlay) {
    closeImageViewer();
  }
});

// Function to close the image viewer
function closeImageViewer() {
  imageViewerContainer.classList.remove('popup__container_active');
  overlay.classList.remove('popup__overlay_active');
}

// Close image viewer when Esc key is pressed
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeImageViewer();
  }
});

// Close image viewer
imageViewerClose.addEventListener('click', function() {
  imageViewerContainer.classList.remove('popup__container_active');
  overlay.classList.remove('popup__overlay_active');
});

// data for elements images
const elementData = [
  { imageSrc: './images/yosemite-valey.png', legend: 'Montanhas do Vale de Yosemite' },
  { imageSrc: './images/louise-lake.png', legend: 'Lago Louise' },
  { imageSrc: './images/montains.png' , legend: 'Montanhas Carelane'},
  { imageSrc: './images/latemar.png' , legend: 'Lago Latemar'},
  { imageSrc: './images/vanoise.png' , legend: 'Vanoise National'},
  { imageSrc: './images/di-braies-lake.png' , legend: 'Lago Di Braies'},

];

// Element Container and Template
const elementContainer = document.querySelector('.element__container');
const elementTemplate = document.querySelector('#elementTemplate');

// Create elements from data
elementData.forEach((data, index) => {
  const clonedTemplate = elementTemplate.content.cloneNode(true);
  const elementItem = clonedTemplate.querySelector('.element__item');
  const image = clonedTemplate.querySelector('.element__image');
  const legendText = clonedTemplate.querySelector('.element__legend-text');
  const likeIcon = clonedTemplate.querySelector('.element__like-icon');
  const removeIcon = clonedTemplate.querySelector('.element__delete-icon');

  // Set image source and legend
  function setImageSource(imageElement, imageSrc, imageAlt) {
    imageElement.src = imageSrc;
    imageElement.alt = imageAlt;
  }

  setImageSource(image, data.imageSrc, data.legend);
  legendText.textContent = data.legend;

  // Like and remove icon click handlers
  likeIcon.addEventListener('click', function() {
    likeIcon.classList.toggle('clicked');
  });

  removeIcon.addEventListener('click', function() {
    elementContainer.removeChild(elementItem);
  });

  // Append element to container
  elementContainer.appendChild(clonedTemplate);
});

// Function to set up delete icon and open image viewer
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

// Handle image form submission
popupImageSave.addEventListener('click', function(event) {
  event.preventDefault();
  const titleInput = document.querySelector('.popup__local').value;
  const imageUrlInput = document.querySelector('.popup__url').value;

  const clonedTemplate = elementTemplate.content.cloneNode(true);
  const elementItem = clonedTemplate.querySelector('.element__item');
  const image = clonedTemplate.querySelector('.element__image');
  const legendText = clonedTemplate.querySelector('.element__legend-text');
  const likeIcon = clonedTemplate.querySelector('.element__like-icon');
  const removeIcon = clonedTemplate.querySelector('.element__delete-icon');

  // Set image attributes
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

  // Insert new element at the beginning of the container
  elementContainer.insertBefore(clonedTemplate, elementContainer.firstChild);

  // Close image popup and clear form inputs
  overlay.classList.remove('popup__overlay_active');
  popupImageContainer.classList.remove('popup__container_active');
  document.querySelector('.popup__local').value = '';
  document.querySelector('.popup__url').value = '';
});

// Image Viewer Click Event
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


