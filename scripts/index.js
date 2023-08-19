<<<<<<< Updated upstream
// Selecting elements from the DOM
let openPopupButton = document.querySelector('.profile__edit'); // Button to open the popup
let closePopupButton = document.querySelector('.popup__close'); // Button to close the popup
let savePopupButton = document.querySelector('.popup__save'); // Button to save the changes in the popup
let overlay = document.querySelector('.popup__overlay'); // Overlay element for the popup
let popupContainer = document.querySelector('.popup__container'); // Container for the popup content
let formElement = document.querySelector('.popup__form'); // Form element inside the popup
let profileNameElement = document.querySelector('.profile__name'); // Element displaying the profile name
let profileProfessionElement = document.querySelector('.profile__profession'); // Element displaying the profile profession
let likeIcons = document.querySelectorAll('.element__like-icon'); // Collection of like icons

// Adding event listener for opening the popup
openPopupButton.addEventListener('click', function() {
  overlay.classList.add('popup__overlay_active'); // Showing the overlay
  popupContainer.classList.add('popup__container_active'); // Showing the popup
});

// Adding event listener for closing the popup
closePopupButton.addEventListener('click', function() {
  overlay.classList.remove('popup__overlay_active'); // Hiding the overlay
  popupContainer.classList.remove('popup__container_active'); // Hiding the popup
});

// Adding event listener for form submission in the popup
formElement.addEventListener('submit', function(event) {
  event.preventDefault(); // Preventing the default form submission behavior
  overlay.classList.remove('popup__overlay_active'); // Hiding the overlay
  popupContainer.classList.remove('popup__container_active'); // Hiding the popup
  let nameInput = document.querySelector('.popup__name').value; // Getting the entered name
  let profInput = document.querySelector('.popup__profession').value; // Getting the entered profession
  profileNameElement.textContent = nameInput; // Updating the profile name element
  profileProfessionElement.textContent = profInput; // Updating the profile profession element
});

// Selecting the element container for the images
let elementContainer = document.querySelector('.element__container');

// Array of data for each image
const elementsData = [
  {
    imageUrl: './assets/images/yosemite-valey.png',
    altText: 'Imagem de Yosemite Valley',
    legendText: 'Vale de Yosemite'
  },
  {
    imageUrl: './assets/images/louise-lake.png',
    altText: 'Imagem do Lago Louise',
    legendText: 'Lago Louise'
  },
  {
    imageUrl: './assets/images/montains.png',
    altText: 'Imagem de Montanhas',
    legendText: 'Montanhas Carelane'
  },
  {
    imageUrl: './assets/images/latemar.png',
    altText: 'Imagem de Latemar',
    legendText: 'Latemar'
  },
  {
    imageUrl: './assets/images/vanoise.png',
    altText: 'Imagem de Vanoise',
    legendText: 'Vanoise National Park'
  },
  {
    imageUrl: './assets/images/di-braies-lake.png',
    altText: 'Imagem do Lago di Braies',
    legendText: 'Lago di Braies'
  }
];

// Adding elements dynamically based on the elementsData array
elementsData.forEach(data => {
  // Creating the elements
  let item = document.createElement('li'); // List item for each image
  item.className = 'element__item'; // Adding class 'element__item' to the list item

  let image = document.createElement('img'); // Image element
  image.className = 'element__image'; // Adding class 'element__image' to the image
  image.src = data.imageUrl; // Setting the image source from data object
  image.alt = data.altText; // Setting the alternative text from data object

  let legend = document.createElement('div'); // Container for the image legend
  legend.className = 'element__legend'; // Adding class 'element__legend' to the container

  let legendText = document.createElement('p'); // Text element for the legend
  legendText.className = 'element__legend-text'; // Adding class 'element__legend-text' to the text element
  legendText.textContent = data.legendText; // Setting the legend text from data object

  let likeIcon = document.createElement('div'); // Element for the like icon
  likeIcon.className = 'element__like-icon'; // Adding class 'element__like-icon' to the element

  let trashIcon = document.createElement('div'); // Element for the trash icon
  trashIcon.className = 'element__trash-icon'; // Adding class 'element__trash-icon' to the element

  // Appending the created elements to their respective parents
  legend.appendChild(legendText); // Appending the legend text to the legend container
  legend.appendChild(likeIcon); // Appending the like icon to the legend container

  item.appendChild(image); // Appending the image to the list item
  item.appendChild(legend); // Appending the legend container to the list item
  item.appendChild(trashIcon); // Appending the trash icon to the list item
  elementContainer.appendChild(item); // Appending the list item to the element container

  // Adding event listeners for the like icon, trash icon, and image
  likeIcon.addEventListener('click', function() {
    likeIcon.classList.toggle('clicked'); // Toggling the 'clicked' class on the like icon
  });

  trashIcon.addEventListener('click', function() {
    item.remove(); // Removing the corresponding list item when the trash icon is clicked
  });

  image.addEventListener('click', function() {
    enlargedImage.src = data.imageUrl; // Setting the source of the enlarged image
    enlargedImage.alt = data.altText; // Setting the alternative text of the enlarged image
    enlargedImagePopup.classList.add('popup__enlarged-image_active'); // Showing the enlarged image popup
    overlay.classList.add('popup__overlay_active'); // Showing the overlay
  });
});

// Selecting elements for the profile popup
let profileButton = document.querySelector('.profile__button'); // Button to open the profile popup
let closeProfilePopupButton = document.querySelector('.popup__close-new-item'); // Button to close the profile popup
let saveProfilePopupButton = document.querySelector('.popup__save-new-item'); // Button to save the changes in the profile popup
let profilePopupContainer = document.querySelector('.popup__container-new-item'); // Container for the profile popup content
let profileFormElement = document.querySelector('.popup__form-new-item'); // Form element inside the profile popup
let profileLocalElement = document.querySelector('.popup__text-new-item[name="local"]'); // Input field for the new item's location
let profileUrlElement = document.querySelector('.popup__text-new-item[name="url"]'); // Input field for the new item's URL
let closeButtonPlus = document.querySelector('.popup__close-button-new-item'); // Close button for the enlarged image in the profile popup

// Adding event listener for opening the profile popup
profileButton.addEventListener('click', function() {
  overlay.classList.add('popup__overlay_active'); // Showing the overlay
  profilePopupContainer.classList.add('popup__container_active'); // Showing the profile popup
});

// Adding event listener for closing the profile popup
closeProfilePopupButton.addEventListener('click', function() {
  overlay.classList.remove('popup__overlay_active'); // Hiding the overlay
  profilePopupContainer.classList.remove('popup__container_active'); // Hiding the profile popup
});

// Adding event listener for form submission in the profile popup
profileFormElement.addEventListener('submit', function(event) {
  event.preventDefault(); // Preventing the default form submission behavior
  overlay.classList.remove('popup__overlay_active'); // Hiding the overlay
  profilePopupContainer.classList.remove('popup__container_active'); // Hiding the profile popup
  let localInput = profileLocalElement.value; // Getting the entered location
  let urlInput = profileUrlElement.value; // Getting the entered URL

  // Creating a new item using the entered data
  let newItem = document.createElement('li'); // List item for the new item
  newItem.className = 'element__item'; // Adding class 'element__item' to the list item

  let newImage = document.createElement('img'); // Image element for the new item
  newImage.className = 'element__image'; // Adding class 'element__image' to the image
  newImage.src = urlInput; // Setting the image source from the entered URL
  newImage.alt = 'Image of ' + localInput; // Setting the alternative text based on the entered location

  let newLegend = document.createElement('div'); // Container for the new item's legend
  newLegend.className = 'element__legend'; // Adding class 'element__legend' to the container

  let newLegendText = document.createElement('p'); // Text element for the new item's legend
  newLegendText.className = 'element__legend-text'; // Adding class 'element__legend-text' to the text element
  newLegendText.textContent = localInput; // Setting the legend text from the entered location

  let newLikeIcon = document.createElement('div'); // Element for the new item's like icon
  newLikeIcon.className = 'element__like-icon'; // Adding class 'element__like-icon' to the element

  let newTrashIcon = document.createElement('div'); // Element for the new item's trash icon
  newTrashIcon.className = 'element__trash-icon'; // Adding class 'element__trash-icon' to the element

  // Appending the created elements to their respective parents
  newLegend.appendChild(newLegendText); // Appending the new item's legend text to the legend container
  newLegend.appendChild(newLikeIcon); // Appending the new item's like icon to the legend container

  newItem.appendChild(newImage); // Appending the new item's image to the list item
  newItem.appendChild(newLegend); // Appending the new item's legend container to the list item
  newItem.appendChild(newTrashIcon); // Appending the new item's trash icon to the list item
  elementContainer.prepend(newItem); // Prepending the new item to the element container

  // Adding event listeners for the new item's like icon, trash icon, and image
  newLikeIcon.addEventListener('click', function() {
    newLikeIcon.classList.toggle('clicked'); // Toggling the 'clicked' class on the new item's like icon
  });

  newTrashIcon.addEventListener('click', function() {
    newItem.remove(); // Removing the new item when the trash icon is clicked
  });

  newImage.addEventListener('click', function() {
    enlargedImage.src = newImage.src; // Setting the source of the enlarged image
    enlargedImage.alt = newImage.alt; // Setting the alternative text of the enlarged image
    enlargedImagePopup.classList.add('popup__enlarged-image_active'); // Showing the enlarged image popup
    overlay.classList.add('popup__overlay_active'); // Showing the overlay
  });

  // Resetting the input fields in the profile popup
  profileLocalElement.value = '';
  profileUrlElement.value = '';
});

// Additional elements for the enlarged image popup
let enlargedImagePopup = document.querySelector('.popup__enlarged-image');
let enlargedImage = document.querySelector('.popup__image');
let closeButton = enlargedImagePopup.querySelector('.popup__close-button');

closeButton.addEventListener('click', function() {
  enlargedImagePopup.classList.remove('popup__enlarged-image_active'); // Hiding the enlarged image popup
  overlay.classList.remove('popup__overlay_active'); // Hiding the overlay
});
=======
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
  {
    imageSrc: './assets/images/yosemite-valey.jpg',
    legend: 'Vale de Yosemite'
  },
  {
    imageSrc: './assets/images/louise-lake.png',
    legend: 'Lago Louise'
  },
  {
    imageSrc: './assets/images/montains.png',
    legend: 'Montanhas Carelane'
  },
  {
    imageSrc: './assets/images/vanoise.png',
    legend: 'Vanoise'
  },
  {
    imageSrc: './assets/images/latemar.png',
    legend: 'Lago Louise'
  },
  {
    imageSrc: './assets/images/di-braies-lake.png',
    legend: 'Montanhas Carelane'
  },
  // Add more elements as needed
];

function populateElementContainer() {
  const elementContainer = document.querySelector('.element__container');
  const elementTemplate = document.getElementById('elementTemplate');

  // Loop through the element data and create the elements
  for (const element of elementData) {
    // Clone the template and populate it with data
    const newElement = elementTemplate.content.cloneNode(true);
    const imageElement = newElement.querySelector('.element__image');
    const legendElement = newElement.querySelector('.element__legend-text');

    imageElement.src = element.imageSrc;
    imageElement.alt += ` ${element.legend}`;
    legendElement.textContent = element.legend;

    elementContainer.appendChild(newElement);
  }
  function populateElementContainer() {
    // ... (previous code for populating elements)

    // Function to toggle the 'clicked' class on the like icon
    function toggleLikeIcon(event) {
      const likeIcon = event.target;
      likeIcon.classList.toggle('clicked');
    }

    // Attach click event listeners to the like icons
    const likeIcons = document.querySelectorAll('.element__like-icon');
    likeIcons.forEach(likeIcon => {
      likeIcon.addEventListener('click', toggleLikeIcon);
    });

     // Function to remove an element when the trash can icon is clicked
  function removeElement(event) {
    const elementItem = event.target.closest('.element__item');
    if (elementItem) {
      elementItem.remove();
    }
  }

  // Attach click event listeners to the delete icons
  const deleteIcons = document.querySelectorAll('.element__delete-icon');
  deleteIcons.forEach(deleteIcon => {
    deleteIcon.addEventListener('click', removeElement);
  });
  }

  populateElementContainer();

}

populateElementContainer();

>>>>>>> Stashed changes
