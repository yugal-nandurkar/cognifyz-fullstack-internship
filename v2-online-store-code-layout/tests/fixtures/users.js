// tests/fixtures/users.js
module.exports = {
    validUser: {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123'
    },
    invalidUser: {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        password: 'wrongpassword'
    }
};