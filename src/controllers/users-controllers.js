const authService = require('../services/auth-service')

const login = async (req, res, next) => {
    try {
        const logged = await authService.login(req.body)
        res.json({
            logged
        })
    } catch (err) {
        res.json({err})
    }
}

module.exports={
    login
}