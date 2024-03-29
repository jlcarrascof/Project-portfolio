const form = document.getElementById('form');
function validateForm(event) {
  const emailInput = document.getElementById('mail');
  const errorMessage = document.getElementById('error-message');
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.innerHTML = `Please use only lowercase. try:${emailInput.value.toLowerCase()}`;
  }
}

form.addEventListener('submit', validateForm);