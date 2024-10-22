document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Form submission and validation
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;

        if (!name || !email) {
            alert('Please fill in all required fields.');
        } else {
            // Simulate success
            alert('Form submitted successfully!');
            this.reset();
        }
    });

    // Additional form validation functions
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.classList.add('error');
        const errorMessage = formControl.querySelector('.error-message') || document.createElement('small');
        errorMessage.className = 'error-message';
        errorMessage.innerText = message;
        if (!formControl.querySelector('.error-message')) {
            formControl.appendChild(errorMessage);
        }
    }

    function removeError(input) {
        const formControl = input.parentElement;
        formControl.classList.remove('error');
        const errorMessage = formControl.querySelector('.error-message');
        if (errorMessage) {
            formControl.removeChild(errorMessage);
        }
    }
});
