const express = require("express");
const router = express.Router();
const categoryController = require('../controllers/category-controller')
const CategoryDataValidation = require('../middlewares/validations/CategoryDataValidation')
const checkAdminUser = require("../middlewares/authentication/check-admin-user");


router.get('/', categoryController.getListCategory)

router.put('/:id', checkAdminUser, CategoryDataValidation, categoryController.updateCategory)
router.post("/",checkAdminUser, CategoryDataValidation, categoryController.createCategory);

router.delete('/:id',checkAdminUser, categoryController.deleteCategory)

router.get('/', checkAdminUser, categoryController.getListCategory)


module.exports = router