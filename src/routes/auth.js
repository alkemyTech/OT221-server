const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth-controller');
const ValidateLogin = require("../middlewares/validations/ValidateLogin");
const ValidationOfTheRegistrationForm = require('../middlewares/validations/ValidationOfTheRegistrationForm')

router.post("/login", ValidateLogin, authController.login)

router.post("/register", ValidationOfTheRegistrationForm, authController.register)

module.exports = router