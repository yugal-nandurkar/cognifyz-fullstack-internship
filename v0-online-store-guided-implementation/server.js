const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

// Configure EJS
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Mock data
const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 699 }
];

// Temporary array to store registered users
const users = [];

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/products', (req, res) => res.render('product-list', { products }));

app.post('/register',
    [
        body('email').isEmail().withMessage('Invalid email address'),
        body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Store in temporary array
        users.push(req.body);
        res.redirect('/');
    }
);

app.listen(3000, () => console.log('Server running on port 3000'));