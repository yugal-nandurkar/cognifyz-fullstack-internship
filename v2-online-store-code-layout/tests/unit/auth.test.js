// tests/unit/auth.test.js
const request = require('supertest');
const app = require('../../server');
const User = require('../../models/User');

describe('Authentication', () => {
    beforeEach(async () => {
        await User.deleteMany({});
    });

    test('Register new user', async () => {
        const response = await request(app)
            .post('/register')
            .send({
                email: 'test@example.com',
                password: 'ValidPass123'
            });
        expect(response.statusCode).toBe(302);
    });
});