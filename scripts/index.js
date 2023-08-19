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

likeIcons.forEach(likeIcon => {
  likeIcon.addEventListener('click', function() {
    likeIcon.classList.toggle('clicked');
  });
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
    imageSrc: './assets/images/yosemite-valey.png',
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
