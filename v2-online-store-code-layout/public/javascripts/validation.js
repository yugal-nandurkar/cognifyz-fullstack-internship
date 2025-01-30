// public/js/validation.js
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form[data-validation]');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            let isValid = true;

            // Email validation
            const email = form.querySelector('[type="email"]');
            if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                isValid = false;
                showError(email, 'Invalid email format');
            }

            // Password validation
            const password = form.querySelector('[type="password"]');
            if(password && (password.value.length < 8 ||
                !/[A-Z]/.test(password.value) ||
                !/\d/.test(password.value))) {
                isValid = false;
                showError(password, 'Password must be at least 8 characters with uppercase and number');
            }

            if(!isValid) e.preventDefault();
        });
    });

    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error mt-1';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
    }
});