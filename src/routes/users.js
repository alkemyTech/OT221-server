const express = require("express");
const router = express.Router();
const userController = require('../controllers/user-controller');
const checkAdminUser = require("../middlewares/authentication/check-admin-user");

router.get("/", checkAdminUser, userController.getUsers);
router.delete("/delete/:id", checkAdminUser, userController.deleteUser);
router.put("/update", checkAdminUser, userController.updateUser)
router.put("/updateProfile", userController.updateProfile)
router.delete("/deleteProfile/:id", userController.deleteUser);

module.exports = router



