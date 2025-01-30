// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/',
    authMiddleware.requireAuth,
    orderController.createOrder
);

router.get('/history',
    authMiddleware.requireAuth,
    orderController.getOrderHistory
);

router.get('/:id',
    authMiddleware.requireAuth,
    orderController.getOrderDetails
);

module.exports = router;