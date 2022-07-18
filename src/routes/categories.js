const express = require("express");
const router = express.Router();
const categoryController = require('../controllers/category-controller')
const CategoryDataValidation = require('../middlewares/validations/CategoryDataValidation')
const checkAdminUser = require("../middlewares/authentication/check-admin-user");


router.get('/', checkAdminUser, categoryController.getListCategory)

router.post("/", CategoryDataValidation, categoryController.createCategory);

router.delete('/:id',categoryController.deleteCategory)

router.get('/', checkAdminUser ,categoryController.getListCategory)


module.exports = router