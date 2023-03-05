const express = require('express');
router = express.Router();

const { register } = require('./controllers/user/register');
const { login } = require('./controllers/user/login');

router.post('/register', register);
router.post('/login', login);

module.exports = router;