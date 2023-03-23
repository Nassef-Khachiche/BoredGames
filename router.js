/* request handler */

const express = require('express');
router = express.Router();

const { register } = require('./controllers/user/register');
const { login } = require('./controllers/user/login');
const { settings } = require('./controllers/guessthenumber/settings');
const { guess, restart } = require('./controllers/guessthenumber/guess');
const { leaderboard } = require('./controllers/leaderboard/leaderboard');
const { savescore } = require('./controllers/memory/save-score');


/* user */
router.post('/register', register);
router.post('/login', login);

/* guess the number */
router.post('/settings', settings);

router.post('/guess', guess);
router.post('/restart', restart);


/* leaderboard */
router.get('/leaderboard', leaderboard);

/* memory */
router.post('/memory', savescore);


module.exports = router;