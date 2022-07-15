

const { body } = require('express-validator')



module.exports = [
    body('name')
        .notEmpty().withMessage('Debe completar el compo nombre')
        .isString().withMessage('El campo nombre debe contener texto'),
    body('description')
       
        
]