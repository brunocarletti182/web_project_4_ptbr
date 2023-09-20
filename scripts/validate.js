// Handle the submission of the profile form
popupProfileForm.addEventListener('submit', function(event) {
  event.preventDefault();
  overlay.classList.remove('popup__overlay_active');
  popupProfileContainer.classList.remove('popup__container_active');
  const nameInput = document.querySelector('.popup__name').value;
  const profInput = document.querySelector('.popup__profession').value;
  profileNameElement.textContent = nameInput;
  profileProfessionElement.textContent = profInput;
});


// Object to represent profile form validation
const profileForm = {
  form: document.querySelector('.popup__form_profile'),
  nameInput: document.querySelector('.popup__name'),
  professionInput: document.querySelector('.popup__profession'),
  nameError: document.getElementById('name-error'),
  professionError: document.getElementById('profession-error'),
  saveButton: document.querySelector('.popup__save_profile'),
};

// Object to represent image form validation
const imageForm = {
  form: document.querySelector('.popup__image'),
  localInput: document.querySelector('.popup__local'),
  urlInput: document.querySelector('.popup__url'),
  localError: document.getElementById('local-error'),
  urlError: document.getElementById('url-error'),
  saveButton: document.querySelector('.popup__save_image'),
};

// Function to display an error message for form inputs
function displayErrorMessage(inputElement, errorElement, errorMessage) {
  inputElement.classList.add('popup__text-error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error-line');
}

// Function to clear an error message for form inputs
function clearErrorMessage(inputElement, errorElement) {
  inputElement.classList.remove('popup__text-error');
  errorElement.textContent = '';
  errorElement.classList.remove('popup__error-line');
}

// Function to validate a profile form
function isProfileFormValid() {
  const nameValue = profileForm.nameInput.value.trim();
  const professionValue = profileForm.professionInput.value.trim();

  let isNameValid = true;
  let isProfessionValid = true;

  if (nameValue.length < 2 || nameValue.length > 40) {
    isNameValid = false;
    displayErrorMessage(profileForm.nameInput, profileForm.nameError, 'O nome deve ter entre 2 e 40 caracteres.');
    saveButton.style.backgroundImage = 'url("./images/submit-invalid.jpg")';

  } else {
    clearErrorMessage(profileForm.nameInput, profileForm.nameError);
    saveButton.style.backgroundImage = 'url("./images/submit-button.jpg")';
  }

  if (professionValue.length < 2 || professionValue.length > 200) {
    isProfessionValid = false;
    displayErrorMessage(profileForm.professionInput, profileForm.professionError, 'A profissão deve ter entre 2 e 200 caracteres.');
  } else {
    clearErrorMessage(profileForm.professionInput, profileForm.professionError);
  }

  const isFormValid = isNameValid && isProfessionValid;

  if (isFormValid) {
    profileForm.saveButton.removeAttribute('disabled');
    saveButton.style.backgroundImage = 'url("./images/submit-button.jpg")';
  } else {
    profileForm.saveButton.setAttribute('disabled', 'true');
    saveButton.style.backgroundImage = 'url("./images/submit-invalid.jpg")';
  }

  return isFormValid;
}

const imageSaveButton = document.querySelector('.popup__save_image');

// Function to validate an image form
function isImageFormValid() {
  const localValue = imageForm.localInput.value.trim();
  const urlValue = imageForm.urlInput.value.trim();

  let isLocalValid = true;
  let isUrlValid = true;

  if (localValue.length < 2 || localValue.length > 30) {
    isLocalValid = false;
    displayErrorMessage(imageForm.localInput, imageForm.localError, 'O título deve conter entre 2 e 30 caracteres.');
  } else {
    clearErrorMessage(imageForm.localInput, imageForm.localError);
  }

  const urlPattern = /^https?:\/\/\S+/;
  if (!urlPattern.test(urlValue)) {
    isUrlValid = false;
    displayErrorMessage(imageForm.urlInput, imageForm.urlError, 'Insira uma URL válida.');
  } else {
    clearErrorMessage(imageForm.urlInput, imageForm.urlError);

  }

  const isFormValid = isLocalValid && isUrlValid && localValue.length > 0 && urlValue.length > 0;

  if (isFormValid) {
    imageSaveButton.style.backgroundImage = 'url("./images/submit-button.jpg")';
    imageForm.saveButton.removeAttribute('disabled');
  } else {
    imageSaveButton.style.backgroundImage = 'url("./images/submit-invalid.jpg")';
    imageForm.saveButton.setAttribute('disabled', 'true');
  }

  return isFormValid;
}

// Handle the forms events
profileForm.nameInput.addEventListener('input', function () {
  isProfileFormValid();
});

profileForm.professionInput.addEventListener('input', function () {
  isProfileFormValid();
});

imageForm.localInput.addEventListener('input', function () {
  isImageFormValid();
});

imageForm.urlInput.addEventListener('input', function () {
  isImageFormValid();
});

// Handle the form submit
imageForm.form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (isImageFormValid()) {

  } else {

  }
});

