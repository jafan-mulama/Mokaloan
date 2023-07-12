document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('registration-form');
    var registerButton = document.getElementById('register-button');
    form.addEventListener('input', function () {
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var passwordInput = document.getElementById('password');
        var confirmPasswordInput = document.getElementById('confirm-password');
        if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '' || confirmPasswordInput.value === '') {
            registerButton.disabled = true;
        }
        else {
            registerButton.disabled = false;
        }
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var passwordInput = document.getElementById('password');
        var confirmPasswordInput = document.getElementById('confirm-password');
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
