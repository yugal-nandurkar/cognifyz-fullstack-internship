// services/searchService.js
const Product = require('../models/Product');

exports.searchProducts = async (query) => {
    try {
        return await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } }
            ]
        }).limit(10);
    } catch (err) {
        throw new Error('Search failed');
    }
};