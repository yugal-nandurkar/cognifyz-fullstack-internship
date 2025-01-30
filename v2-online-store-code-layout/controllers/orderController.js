// controllers/orderController.js
const Order = require('../models/Order');
const { createPaymentIntent } = require('../services/paymentService');

exports.createOrder = async (req, res) => {
    try {
        const { items, total } = req.body;
        const paymentIntent = await createPaymentIntent(total);

        const order = await Order.create({
            user: req.userId,
            items,
            total,
            status: 'pending'
        });

        res.json({
            orderId: order._id,
            clientSecret: paymentIntent
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};