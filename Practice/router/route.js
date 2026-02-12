const express = require('express');
const { userAuth, login } = require('../controllers/auth');

const router = express.Router();

router.post('/createUser', userAuth);
router.post('/login', login);

module.exports = router;