// tests/integration/order.test.js
const { Order } = require('../../src/models/Order');
const { validUser } = require('../fixtures/users');
const orderService = require('../../src/services/orderService');

describe('Order Service Integration Tests', () => {
    let order;

    beforeEach(() => {
        order = new Order({ userId: validUser.id });
    });

    it('should create an order', async () => {
        const products = [
            { id: 1, name: 'Laptop', price: 1000 },
            { id: 2, name: 'Mouse', price: 50 }
        ];
        await orderService.createOrder(order, products);

        expect(order.products.length).toBe(2);
        expect(order.totalPrice).toBe(1050);
    });

    it('should cancel an order', async () => {
        const products = [
            { id: 1, name: 'Laptop', price: 1000 },
            { id: 2, name: 'Mouse', price: 50 }
        ];
        await orderService.createOrder(order, products);
        await orderService.cancelOrder(order);

        expect(order.status).toBe('Cancelled');
    });

    it('should calculate the total price of the order', async () => {
        const products = [
            { id: 1, name: 'Laptop', price: 1000 },
            { id: 2, name: 'Mouse', price: 50 }
        ];
        await orderService.createOrder(order, products);

        const totalPrice = await orderService.calculateTotalPrice(order);
        expect(totalPrice).toBe(1050);
    });
});