const express = require('express');
const { auth, login, signup } = require('../Controllers/userAuth');
const { agechecker } = require('../Middleware/agechecker');
// const auth = require('../Controllers/userAuth');
// const login = require('../Controllers/userAuth');
const router = express.Router();

router.get('/', auth);
router.post('/login',agechecker, login);
router.post('/signup', signup)

module.exports  = router;