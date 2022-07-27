const express = require("express");
const router = express.Router();
const contactController = require('../controllers/contact-controller');
const validateFields    = require('../middlewares/field-validator');
const checkAdminUser    = require('../middlewares/authentication/check-admin-user');
const { check, body } = require('express-validator');

router.get('/list', checkAdminUser, contactController.getContacts);

router.post("/", [
    body('name', 'name field is required').not().isEmpty(),
    body('email', 'email field is required').isEmail(),
    validateFields,
  ],
  contactController.storeContact);

module.exports = router;