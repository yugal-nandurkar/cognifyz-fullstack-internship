// services/paymentService.js
const stripe = require('stripe')(process.env.STRIPE_KEY);

exports.createPaymentIntent = async (amount) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: 'usd'
        });
        return paymentIntent.client_secret;
    } catch (err) {
        throw new Error('Payment processing failed');
    }
};