const express = require("express");
const router = express.Router();
const {getNewsEntries, getById} = require('../controllers/entries-controller');

router.get("/news", getNewsEntries);

router.post("/news/:id",getById);

module.exports = router;