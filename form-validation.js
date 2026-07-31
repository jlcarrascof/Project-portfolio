const form = document.getElementById('form');
const emailInput = document.getElementById('mail');
const errorMessage = document.getElementById('error-message');

function validateForm(event) {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.innerHTML = `Please use only lowercase. Try: <b>${emailInput.value.toLowerCase()}</b>`;
  } else {
    errorMessage.innerHTML = '';
  }
}

emailInput?.addEventListener('input', () => {
  if (emailInput.value === emailInput.value.toLowerCase()) {
    errorMessage.innerHTML = '';
  }
});

form.addEventListener('submit', validateForm);