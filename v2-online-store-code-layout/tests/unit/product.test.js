// tests/unit/product.test.js
const { Product } = require('../../src/models/Product');
const { validUser } = require('../fixtures/users');

describe('Product Model', () => {
    let product;

    beforeEach(() => {
        product = new Product({
            id: 1,
            name: 'Laptop',
            price: 1000,
            userId: validUser.id
        });
    });

    it('should create a product', () => {
        expect(product).toBeDefined();
        expect(product.name).toBe('Laptop');
        expect(product.price).toBe(1000);
        expect(product.userId).toBe(validUser.id);
    });

    it('should update product price', () => {
        product.price = 1200;
        expect(product.price).toBe(1200);
    });

    it('should validate product name', () => {
        product.name = '';
        expect(() => product.validate()).toThrow('Product name is required');
    });
});