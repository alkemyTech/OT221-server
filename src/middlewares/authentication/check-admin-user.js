const jwt = require('jsonwebtoken');

/**
 * It verifys if the roleId field taken from current token, taken from the 
 * Authorization header, is equal to 1 (admin roleId), if it's not, it
 * returns an not authorized error message, same if the token is not valid.
 * 
 * This function is designed to strip the token out of a Bearer header 
 * authentication.
 */

const checkAdminUser = (req, res, next) => {

  const bearerHeader = req.headers['authorization'];

  if(!bearerHeader ){
    return res.status(401).json({
      ok: false,
      error: 'No token attached'
    })
  }
  

  const bearerToken = bearerHeader.split(' ')[1];
  console.log(bearerToken)

  try {        
    const { dataValues } = jwt.verify( bearerToken, process.env.SECRET_JWT_SEED );
    console.log(dataValues)
    if( dataValues.roleId !== 1 ){
      return res.status(401).json({
            ok: false,
            error: 'Not authorized'
        })
    } 

  } catch (error) {
      // console.log(error);
      return res.status(401).json({
          ok: false,
          error: "Not a valid token"
      })
  }

  next();

} 

module.exports = checkAdminUser;