// Get form elements
const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const collegeInput = document.getElementById('college');
const idInput = document.getElementById('id');
const emailInput = document.getElementById('email');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Validate form inputs
  if (validateForm()) {
    alert('Registration successful!'); // Show success message
    resetForm(); // Reset form inputs
  }
});

// Function to validate form inputs
function validateForm() {
  // Initialize flag for validation
  let isValid = true;

  // Validate name
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
    isValid = false;
  } else {
    showSuccess(nameInput);
  }

  // Validate college
  if (collegeInput.value.trim() === '') {
    showError(collegeInput, 'College is required');
    isValid = false;
  } else {
    showSuccess(collegeInput);
  }

  // Validate ID
  if (idInput.value.trim() === '') {
    showError(idInput, 'ID is required');
    isValid = false;
  } else {
    showSuccess(idInput);
  }

  // Validate email
  if (emailInput.value.trim() === '') {
    showError(emailInput, 'Email is required');
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, 'Please enter a valid email address');
    isValid = false;
  } else {
    showSuccess(emailInput);
  }

  return isValid;
}

// Function to display error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.remove('success');
  formControl.classList.add('error');
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Function to display success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
  formControl.classList.add('success');
}

// Function to reset form inputs
function resetForm() {
  form.reset();
}

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
