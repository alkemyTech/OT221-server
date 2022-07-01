const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const userService = require('../services/user-service')



const login = async (body) => {
    const user = await userService.getUserByEmail(body.email)
    if (bcrypt.compareSync(body.password, user.password)) {
        const accessToken = generateAccessToken(user)
        delete user.password
        return {accessToken , user}
    } else {
        throw new Error ("Contraseña incorrecta") 
    }

}



const generateAccessToken = async (user)=>{

    const userData = {...user}
    delete userData.password
    const accessToken = jwt.sign(userData, process.env.SECRET_JWT_SEED, { expiresIn: Number(process.env.TOKEN_EXPIRATION_TIME) }) 
    return accessToken  

}

// Middleware for authentication

const  authenticateToken = async (req,res,next)=>{
 
    const authHeader = req.headers['authorization']
    
    const token = authHeader && authHeader.split(' ')[1]
  
    if(!token) {
        throw new Error('Token inválido')
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,  (err,decodedUser)=>{

        if(err){
            throw new Error('Token expirado')
        }
        req.currentUser = decodedUser
       
        next()
    })
  }



module.exports = {
    authenticateToken,
    login,
}