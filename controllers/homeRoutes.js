const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

// Profile Page
router.get('/profile', withAuth, async (req, res) => {
    try {

        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

// Individual Post Page
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    include: [
                        { model: User }
                    ]
                }

            ]
        });
        const post = postData.get({ plain: true });
        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get All Comments
router.get('/comments', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                }]
        });

        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }


})

// Create new Blog Post Page
router.get('/new-post', withAuth, (req, res) => {
    res.render('new-post', {
        logged_in: req.session.logged_in
    });
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