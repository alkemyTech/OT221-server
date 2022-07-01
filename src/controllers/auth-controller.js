const authService = require('../services/auth-service')
const userService = require('../services/user-service')
const { validationResult } = require('express-validator');


const login = async (req, res, next) => {

    try {
        const userData = await authService.login(req.body)
        res.json(userData)
    } catch (err) {
        res.status(400)
        res.json({error: err.message})
    }
}




const register = async (req, res, next) => {
    try {
        const { body } = req;
        const errorsRegister = validationResult(req);
        if (!errorsRegister.isEmpty()) {
            //406 no Acceptable
            res.status(406).json(errorsRegister.mapped()) //devuelvo los errores al front por si los necesita
        } else {
            
            const user = await userService.userRegister({...body})
            res.status(200).json(user)
        }

    } catch (err) {
        console.log(err)
        res.status(500).json(err)

    }
}

module.exports = {
    register,
    login
}
