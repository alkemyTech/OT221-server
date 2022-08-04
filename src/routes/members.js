const express = require("express");
const memberController = require("../controllers/member-controller");
const validateFile = require("../middlewares/file-validator");
const { validateCreateMember } = require("../middlewares/validations/Member");
const router = express.Router();

router.get('/', memberController.getListMember)

router.put('/:id', checkAdminUser, memberController.updateMember)

router.post("/",
    validateFile,
    validateCreateMember,
    memberController.createNewMember
);

router.delete('/:id', memberController.deleteMember)

router.get('/',memberController.getListMember) 

module.exports = router
