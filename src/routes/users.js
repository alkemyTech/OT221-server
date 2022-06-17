const express = require("express");
const router = express.Router();
const userController = require('../controllers/users-controllers')
const bcrypt = require('bcrypt');

router.get("/users");
router.post("/login", userController.login)



router.get("/aa", async (req, res)=>{
    const pass = bcrypt.hashSync("1234", 10)
    res.json(pass)
    })

module.exports = router;
