
const { UserNotFoundError, UsersTableEmptyError } = require('../errors/user-errors')
const userRepository = require('../repositories/user-repository')



const getUserByEmail = async (email) => {

    const user = await userRepository.getUserByEmail(email)

    if (!user) {
        throw new UserNotFoundError({email})
    }

    return user
}

const saveUser = async (user) => {
 return await  userRepository.saveUser(user)
}


const getAllUsers = async (query) => {
    
    const usersForPage = await userRepository.getAllUsers(query)

    if(!usersForPage){
        throw new UsersTableEmptyError()
    }

    return usersForPage
}

const deleteUserById = async (id) => {
    const user = await userRepository.deleteUserById(id)
    if (user == 0) {
        throw new UserNotFoundError(`El usuario con id: ${id} no existe`)
    }
    return user;
}

const updateUserById = async (updatedUserData) => {
    const user = await userRepository.updateUserById(updatedUserData)
    if (user == 0) {
        throw new UserNotFoundError(`El usuario con id: ${updatedUserData.id} no existe`)
    }
    return user;
}


module.exports = {
    getUserByEmail,
    saveUser,
    getAllUsers,
    deleteUserById,
    updateUserById
}