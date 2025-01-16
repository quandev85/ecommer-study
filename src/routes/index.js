const express = require('express');
const authRouter = require('./auth');

const router = express.Router();

// Use the auth router for routes starting with /auth
router.use('/auth', authRouter);

module.exports = router;
