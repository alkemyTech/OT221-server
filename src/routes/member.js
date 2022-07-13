const express = require("express");
const router = express.Router();
const memberController = require("../controllers/member-controller");
const validateFile = require("../middlewares/file-validator");
const { validateCreateMember } = require("../middlewares/validations/Member");

router.post(
    "/",
    validateFile,
    validateCreateMember,
    memberController.createNewMember
);

module.exports = router;