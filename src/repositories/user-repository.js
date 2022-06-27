const { User } = require('../models')


const getUserByEmail = async (email) =>{
    const user = await User.findOne({where:{email: email}})
    return user
}



module.exports = {
    getUserByEmail
}