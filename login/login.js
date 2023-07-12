var _a;
(_a = document.getElementById('login-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
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
