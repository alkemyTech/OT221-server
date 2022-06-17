const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");

router.use("/users", usersRoutes);
router.use("/auth", usersRoutes);

module.exports = router;
