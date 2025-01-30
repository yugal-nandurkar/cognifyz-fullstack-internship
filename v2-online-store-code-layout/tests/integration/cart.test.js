// tests/integration/cart.test.js
const { Cart } = require('../../src/models/Cart');
const { validUser } = require('../fixtures/users');
const cartService = require('../../src/services/cartService');

describe('Cart Service Integration Tests', () => {
    let cart;

    beforeEach(() => {
        cart = new Cart({ userId: validUser.id });
    });

    it('should add a product to the cart', async () => {
        const product = { id: 1, name: 'Laptop', price: 1000 };
        await cartService.addProductToCart(cart, product);

        expect(cart.products.length).toBe(1);
        expect(cart.products[0]).toEqual(product);
    });

    it('should remove a product from the cart', async () => {
        const product = { id: 1, name: 'Laptop', price: 1000 };
        await cartService.addProductToCart(cart, product);
        await cartService.removeProductFromCart(cart, product.id);

        expect(cart.products.length).toBe(0);
    });

    it('should calculate the total price of the cart', async () => {
        const product1 = { id: 1, name: 'Laptop', price: 1000 };
        const product2 = { id: 2, name: 'Mouse', price: 50 };
        await cartService.addProductToCart(cart, product1);
        await cartService.addProductToCart(cart, product2);

        const totalPrice = await cartService.calculateTotalPrice(cart);
        expect(totalPrice).toBe(1050);
    });
});