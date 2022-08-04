const jwt = require('jsonwebtoken')
const { InvalidTokenError, ExpiredTokenError } = require('../../errors/auth-errors')


//This middleware adds the encoded data from the jwt to the request object

const authenticateToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']

        const token = authHeader && authHeader.split(' ')[1]

        if (!token) {
            throw new InvalidTokenError()
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedUser) => {
            if (err) {
                throw new ExpiredTokenError()
            }
            req.currentUser = decodedUser

            next()
        })
    } catch (err) {
        console.log(err)
        next(err)
    }
}

module.exports = {
    authenticateToken,
}