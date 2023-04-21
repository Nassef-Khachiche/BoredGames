/* request handler */

const express = require('express');
router = express.Router();

const { register } = require('./controllers/user/register');
const { login } = require('./controllers/user/login');
const { settings } = require('./controllers/guessthenumber/settings');
const { guess, restart } = require('./controllers/guessthenumber/guess');
const { leaderboard } = require('./controllers/leaderboard/leaderboard');
const { savescore } = require('./controllers/memory/save-score');
const { getcontent } = require('./controllers/puzzle/get-content');
const { savedata } = require('./controllers/puzzle/save-data');


/* user */
router.post('/register', register);
router.post('/login', login);

/* leaderboard */
router.get('/leaderboard', leaderboard);

/* guess the number */
router.post('/settings', settings);

router.post('/guess', guess);
router.post('/restart', restart);

/* memory */
router.post('/memory', savescore);

/* puzzle */
router.post('/puzzle', savedata);
router.get('/puzzle/content', getcontent);


module.exports = router;