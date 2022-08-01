const { body } = require('express-validator')


module.exports = [
    body('email')
        .notEmpty().withMessage('Debe enviar un email para logearse')
        .isEmail().withMessage('El email enviado no es una direccion de email valida'),
    body('password').notEmpty().withMessage('Debe completar el campo contraseña')
]