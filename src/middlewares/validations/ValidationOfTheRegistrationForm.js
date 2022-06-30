const path = require('path')
const { body } = require('express-validator')
//const { getByEmail } = require('../../repositories/auth-repository') no me sirve porque devuelve un error si no lo encuentra
const { User, sequelize } = require('../../models')

module.exports = [
    body('firstName')
        .notEmpty().withMessage('Debe completar el compo nombre')
        .isLength({ min: 2 }).withMessage('El campo nombre Debe tener al menos dos caracteres'),
    body('lastName').notEmpty().withMessage('Debe completar el compo apellido')
        .isLength({ min: 2 }).withMessage('El campo apellido Debe tener al menos dos caracteres'),
    body('email').notEmpty().withMessage('Debe completar el compo email')
        .isEmail().withMessage('Debe ingresar un mail valido')
        .custom(async (value, { req }) => {
            const userFind = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            //   console.log(userFind, 'userFind')
            if (userFind) {
                //401 Unauthorized
                throw new Error('Email no valido') //para no dar mas información
            }
            return true
        }),
    body('password').notEmpty().withMessage('Debe completar el campo contraseña')
        .isLength({ min: 8 }).withMessage("Su contraseña debe tener al menos 8 caracteres")


]