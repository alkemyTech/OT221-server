const express           = require("express");
const router            = express.Router();
const entryController   = require('../controllers/entry-controller');
const validateFields    = require('../middlewares/field-validator');
const validateFile      = require('../middlewares/file-validator');
const { check }         = require('express-validator');
const checkAdminUser    = require("../middlewares/authentication/check-admin-user");


router.get("/:limit/:page", entryController.getNewsEntries);
router.get("/", entryController.getNewsEntries);
router.get('/:id', entryController.getNewsEntryById);

router.use( checkAdminUser );

router.put("/:id" ,entryController.updateNewsEntry);
router.delete('/:id',entryController.deleteEntry)
router.post("/", [
    check('name', 'name field is required').not().isEmpty(),
    check('content', 'content field is required').not().isEmpty(),
    validateFields,
    validateFile,
  ],
  entryController.createNewEntry);



module.exports = router;