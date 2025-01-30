// utils/validators.js
exports.validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

exports.validatePassword = (password) => {
    return password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /\d/.test(password);
};

exports.validateCreditCard = (number) => {
    return /^[0-9]{13,19}$/.test(number);
};