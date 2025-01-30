// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/products', productController.getProducts);
router.post('/cart', authMiddleware, productController.addToCart);
router.get('/search', productController.searchProducts);

module.exports = router;