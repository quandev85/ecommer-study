const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router.post('/signup', authController.signup);

router.post('/signin', authController.signin);

module.exports = router;
