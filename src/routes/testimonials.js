const express = require("express");
const router = express.Router();
const testimonialController = require('../controllers/testimonial-controller');
const { validateCreateTestimonial } = require("../middlewares/validations/Testimonial");
const validateFile = require("../middlewares/file-validator");
const checkAdminUser = require("../middlewares/authentication/check-admin-user");
const { authenticateToken } = require("../middlewares/authentication/authenticate-token");


router.get("/:limit/:page", testimonialController.getAllTestimonials)
router.delete("/:id", checkAdminUser, testimonialController.deleteTestimonial)

router.post("/", authenticateToken,
    validateCreateTestimonial,
    testimonialController.createNewTestimonial);

  router.put("/update/:id", testimonialController.updateTestimony);

module.exports = router;
