const express = require("express");
const router = express.Router();
const categoryController = require('../controllers/category-controller')
const CategoryDataValidation = require ('../middlewares/validations/CategoryDataValidation')


router.post("/",CategoryDataValidation, categoryController.createCategory);


module.exports = router