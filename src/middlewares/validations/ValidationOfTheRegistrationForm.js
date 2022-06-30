const { body } = require('express-validator')
const { getByEmail } = require('../../repositories/auth-repository')

module.exports = [
    body('firstName')
        .notEmpty().withMessage('Debe completar el compo nombre')
        .isLength({ min: 2 }).withMessage('El campo nombre Debe tener al menos dos caracteres'),
    body('lastName').notEmpty().withMessage('Debe completar el compo apellido')
        .isLength({ min: 2 }).withMessage('El campo apellido Debe tener al menos dos caracteres'),
    body('email').notEmpty().withMessage('Debe completar el compo email')
        .isEmail().withMessage('Debe ingresar un mail valido')
        .custom(async (value, { req }) => {
            try {
                const userFind = await getByEmail(req.body.email)
                if (userFind) {
                    throw new TypeError('Email no valido') //para no dar mas información
                }
                //este error lo captura el catch, y si el error es una instancia de typeError manda otro error que lo captura express-validator
                //ren caso de no ser una instancia de TypeError retorna true
            } catch (err) {
                if (err instanceof TypeError) {
                    throw new TypeError('Email no valido')
                } else {
                    return true
                }
            }
        }),
    body('password').notEmpty().withMessage('Debe completar el campo contraseña')
        .isLength({ min: 8 }).withMessage("Su contraseña debe tener al menos 8 caracteres")


]