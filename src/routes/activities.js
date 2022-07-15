
const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activity-controller");
const validateFile = require("../middlewares/file-validator");
const {
  validateCreateActivity,
} = require("../middlewares/validations/Activity");
const s3Services = require("../services/s3-service");

router.get("/list", activityController.getAllActivity);

router.post(
  "/",validateFile,
  validateCreateActivity,
  activityController.createNewActivity
);

//Retrieves the image from aws
router.get("/image/:key", (req, res) => {
  const key = req.params.key;
  console.log(key);
  const result = s3Services.getFileStream(key);
  result.pipe(res);
});

router.put('/:id', activityController.updateActivity)

module.exports = router;
