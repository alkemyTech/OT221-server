const { check } = require("express-validator");
const validateFields = require("../field-validator");

const validateCreateTestimonial = [
    check("name")
        .exists()
        .withMessage("The name field must be present  at the request")
        .notEmpty()
        .withMessage("The name field can't be empty")
        .isLength({ min: 2 })
        .withMessage("The name field must at least be 2 characters long"),
    check("content")
        .exists()
        .withMessage("The content field must be present  at the request")
        .notEmpty()
        .withMessage("The content field can't be empty")
        .isLength({ min: 10 })
        .withMessage("The content field must at least be 10 characters long"),
    (req, res, next) => {
        validateFields(req, res, next);
    },
];

module.exports = { validateCreateTestimonial };