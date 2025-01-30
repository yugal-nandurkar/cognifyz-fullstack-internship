// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/',
    authMiddleware.requireAuth,
    authMiddleware.requireRole(config.ROLES.ADMIN),
    productController.createProduct
);

module.exports = router;