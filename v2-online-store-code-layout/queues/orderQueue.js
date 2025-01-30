// queues/orderQueue.js
const Queue = require('bull');
const { sendOrderConfirmation } = require('../services/emailService');
const logger = require('../utils/logger');

const orderQueue = new Queue('order processing', {
    redis: process.env.REDIS_URL
});

orderQueue.process(async (job) => {
    try {
        const { email, order } = job.data;
        await sendOrderConfirmation(email, order);
        logger.info(`Processed order confirmation for ${email}`);
    } catch (err) {
        logger.error(`Order processing failed: ${err.message}`);
        throw err;
    }
});

module.exports = orderQueue;