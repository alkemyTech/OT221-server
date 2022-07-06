const userRepository = require('../repositories/user-repository')



const getUserByEmail = async (email) => {

    const user = await userRepository.getUserByEmail(email)

    if (!user) {
        throw new Error(`El usuario con email: ${email} no existe`)
    }

    return user
}

const userRegister = async (newUser) => {

    const user = await userRepository.getUserByEmail(newUser.email)

    if (user) {
        throw new Error(`Usuario con email: ${newUser.email} ya existe.`)
    }
    const password = bcrypt.hashSync(newUser.password, 10);
    newUser.password = password
    newUser.roleId = 2
    const savedUser = await userRepository.saveUser(newUser)
    delete savedUser.password
    return savedUser
}


const getAllUsers = async (page) => {
    const usersForPage = userRepository.getAllUsers(page)
    return usersForPage
}

const deleteUser = async (id) => {
    const user = await userRepository.getUserById(id)
    if (!user) {
        throw new Error(`El usuario con id: ${id} no existe`)
    }
    await userRepository.deleteUser(id)
    return "Usuario eliminado"
}

module.exports = {
    getUserByEmail,
    userRegister,
    getAllUsers,
}