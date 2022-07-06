const jwt = require('jsonwebtoken')


//This middleware adds the encoded data from the jwt to the request object

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
  }