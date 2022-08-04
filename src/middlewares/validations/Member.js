const { check } = require("express-validator");
const validateFields = require("../field-validator");

const validateCreateMember = [
    check("name")
        .exists()
        .withMessage("The name field must be present  at the request")
        .isString()
        .withMessage("The name field must be a string")
        .notEmpty()
        .withMessage("The name field can't be empty")
        .isLength({ min: 2 })
        .withMessage("The name field must at least be 2 characters long"),
        (req, res, next) => {
            validateFields(req, res, next);
        }
];

module.exports = { validateCreateMember };