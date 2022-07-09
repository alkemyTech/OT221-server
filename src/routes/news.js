const express = require("express");
const router = express.Router();
const entryController = require('../controllers/entry-controller');
const validateFields    = require('../middlewares/field-validator');
const validateFile      = require('../middlewares/file-validator');
const { check } = require('express-validator');




router.get("/", entryController.getNewsEntries);

router.get('/:id', entryController.getNewsEntryById)
router.put("/:id" ,entryController.updateNewsEntry);

router.post("/", [
    check('name', 'name field is required').not().isEmpty(),
    check('content', 'content field is required').not().isEmpty(),
    check('categoryId', 'categoryId field is required').isInt(),
    validateFields,
    validateFile,
  ],
  entryController.createNewEntry);

module.exports = router;