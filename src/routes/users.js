const express = require("express");
const router = express.Router();

router.get("/users");
router.post("/login", userController.login)


module.exports = router;
