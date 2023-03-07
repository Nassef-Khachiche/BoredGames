/* request handler */

const express = require('express');
router = express.Router();

const { register } = require('./controllers/user/register');
const { login } = require('./controllers/user/login');

const { settings } = require('./controllers/guessthenumber/settings');
const { guess } = require('./controllers/guessthenumber/guess');


// user
router.post('/register', register);
router.post('/login', login);

// guess the number
router.post('/settings', settings);
// router.get('/settings', settings);
router.post('/guess', guess);


module.exports = router;