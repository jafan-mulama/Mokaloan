document.getElementById('login-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
  
    // Perform login validation
    if (usernameInput.value !== 'admin' || passwordInput.value !== 'password') {
      alert('Invalid username or password');
      return;
    }
  
    // Perform successful login
    alert('Login successful');
  
    // Reset the form
    usernameInput.value = '';
    passwordInput.value = '';
  });
  