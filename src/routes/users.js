const express = require("express");
const router = express.Router();
const userController = require('../controllers/user-controller');
const validateFile      = require('../middlewares/file-validator');
const checkAdminUser = require("../middlewares/authentication/check-admin-user");

router.get("/", checkAdminUser, userController.getUsers);
router.delete("/delete/:id", checkAdminUser, userController.deleteUser);
router.put("/update", checkAdminUser, userController.updateUser)
router.put("/updateProfile",validateFile, userController.updateProfile)
router.delete("/deleteProfile/:id", userController.deleteUser);

module.exports = router



