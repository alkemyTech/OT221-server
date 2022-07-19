const express = require("express");
const categoryControllers = require("../controllers/category-controller");
const checkAdminUser = require("../middlewares/authentication/check-admin-user");
const router = express.Router();

router.get('/', checkAdminUser ,categoryControllers.getListCategory)

router.delete('/:id',categoryControllers.deleteCategory)

module.exports = router