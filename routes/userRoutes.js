const express = require('express');
const router = express.Router();
const { registerUser, loginUser, forgotPassword } = require('../controllers/userController')


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgotpassword", forgotPassword)

module.exports = router;