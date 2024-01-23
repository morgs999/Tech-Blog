const router = require('express').Router();
const { } = require('../models');
const withAuth = require('../utils/auth');

// Homepage
router.get('/', async (req, res) => {
    // grab seed data
    // map to plain:true or serialized
    // res.render to homepage, with logged_in
})

// Profile Page
router.get('/profile', withAuth, async (req, res) => {
    try {
        // find user by Primary key
        // serialize 
        // render to profile page
        // set logged_in to true
    } catch (err) {
        res.status(500).json(err);
    }
})

// Login Page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
})

module.exports = router;