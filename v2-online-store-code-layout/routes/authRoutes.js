// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const passport = require('passport');

router.get('/login', (req, res) => res.render('pages/login'));
router.post('/login', authController.login);
router.get('/register', (req, res) => res.render('pages/registration'));
router.post('/register', authController.register);
router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

// Google OAuth
router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => res.redirect('/'));

module.exports = router;