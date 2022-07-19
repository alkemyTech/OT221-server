const express = require("express");
const  memberController = require("../controllers/memeber-controller");
const router = express.Router();

router.get('/',memberController.getListMember) 

module.exports = router