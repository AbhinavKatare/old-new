document.addEventListener('DOMContentLoaded', function() {
    // Handle form switching between Login and Sign Up
    document.getElementById('signup-tab').addEventListener('click', function() {
        document.getElementById('login-form').classList.remove('active-form');
        document.getElementById('signup-form').classList.add('active-form');
        document.querySelector('.login-btn').classList.remove('active');
        document.querySelector('.signup-btn').classList.add('active');
    });

    document.getElementById('login-tab').addEventListener('click', function() {
        document.getElementById('signup-form').classList.remove('active-form');
        document.getElementById('login-form').classList.add('active-form');
        document.querySelector('.signup-btn').classList.remove('active');
        document.querySelector('.login-btn').classList.add('active');
    });

    // Handle "Already have an account?" or "Don't have an account?" links
    document.getElementById('switch-to-signup').addEventListener('click', function() {
        document.getElementById('signup-tab').click();
    });

    document.getElementById('switch-to-login').addEventListener('click', function() {
        document.getElementById('login-tab').click();
    });

    // Show/hide password functionality
    document.querySelectorAll('.show-password').forEach(item => {
        item.addEventListener('click', function() {
            const passwordField = this.previousElementSibling;
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
        });
    });

    // Login form submission and validation
    document.querySelector('.login-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;

        if (!username || !password) {
            alert('Please enter both username and password.');
        } else {
            // Proceed with login (or AJAX request)
            console.log('Login attempt with:', username, password);
            // Here you would typically make an AJAX call to your server for authentication
        }
    });

    // Sign up form submission and validation
    document.querySelector('.signup-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const newUsername = document.querySelector('input[name="new-username"]').value;
        const newPassword = document.querySelector('input[name="new-password"]').value;
        const confirmPassword = document.querySelector('input[name="confirm-password"]').value;

        if (!newUsername || !newPassword || !confirmPassword) {
            alert('Please fill in all fields.');
        } else if (newPassword !== confirmPassword) {
            alert('Passwords do not match.');
        } else {
            // Proceed with sign up (or AJAX request)
            console.log('Sign up attempt with:', newUsername, newPassword);
            // Here you would typically make an AJAX call to your server to create a new account
        }
    });
});
