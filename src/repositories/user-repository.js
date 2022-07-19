const { User } = require('../models')


const getUserByEmail = async (email) =>{
    const user = await User.findOne({
        where:{
            email: email
        },        
       raw:true
    })
   
    return user
}


const saveUser = async (newUser) => {

    // if newUser id is not null, it will update the user. If  id is null it will create a new register

    const user = User.build(newUser,{isNewRecord: !newUser.id})

    await user.save()

    return user
}

const getAllUsers = async(page)=>{
    const limit = 10;
    const offset = page * limit;
    const { count, rows } = await User.findAndCountAll({
        attributes: {
            exclude: ['password']
        },
        offset: offset,
        limit: limit,
    })
    if(count === 0){
        return null
    }
    //devuelvo un objeto con la cantidad de usuarios total que hay y un array con sos usuarios eliminado la password 
    return { total_users: count, users: rows }
}

const deleteUserById = async (id) =>{
    const user = await User.destroy({where:{id: id}})
    if (!user){
        return "User does not exist"
    }
    return "User deleted"
}

module.exports = {
    getUserByEmail,
    saveUser,
    getAllUsers,
    deleteUserById
}