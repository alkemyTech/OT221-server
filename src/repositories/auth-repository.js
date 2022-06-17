
const { User, sequelize } = require('../models')


const getByEmail = async (email) =>{
    const user = await User.findOne({where:{email: email}})
    return user
}



module.exports = {
    getByEmail
}