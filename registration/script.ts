document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form') as HTMLFormElement;
  const registerButton = document.getElementById('register-button') as HTMLButtonElement;

  form.addEventListener('input', () => {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirm-password') as HTMLInputElement;

    if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '' || confirmPasswordInput.value === '') {
      registerButton.disabled = true;
    } else {
      registerButton.disabled = false;
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirm-password') as HTMLInputElement;

    // Perform form validation
    if (passwordInput.value !== confirmPasswordInput.value) {
      alert('Passwords do not match');
      return;
    }

    // Submit the form
    // You can add your code here to handle form submission (e.g., sending data to a server)

    // Reset the form
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';
  });
});
