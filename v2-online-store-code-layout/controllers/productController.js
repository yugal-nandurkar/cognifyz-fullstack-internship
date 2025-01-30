// controllers/productController.js
const Product = require('../models/Product');
const { ERROR_MESSAGES } = require('../config/constants');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().cache({ key: req.userId });
        res.render('pages/product-list', { products });
    } catch (err) {
        next(err);
    }
};

exports.addToCart = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        const product = await Product.findById(req.body.productId);

        const cartItem = user.cart.find(item => item.product.equals(req.body.productId));
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            user.cart.push({ product: product._id, price: product.price });
        }

        await user.save();
        res.json({ success: true });
    } catch (err) {
        res.status(400).json({ error: 'Failed to add to cart' });
    }
};