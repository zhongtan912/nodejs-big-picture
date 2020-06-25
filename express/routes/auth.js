const express = require('express');
const passport = require('passport');

const router = express.Router();

router.all('/profile', (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect('/');
    }
});

router.route('/signIn')
    .get((req, res) => {
        res.json(req.body);
    })
    .post(() => {
        passport.authenticate('local', {
            successRedirect: '/auth/profile',
            failureRedirect: '/'
        });
    });

router.post('/signUp', (req, res) => {
    // create user
    req.login(req.body, () => {
        res.redirect('/auth/profile');
    });

    // log in
    res.json(req.body);
});

router.get('/profile', (req, res) => {
    res.json(req.user);
});

module.exports = router;
