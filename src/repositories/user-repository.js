const { User } = require("../models");
const sequelize = require("sequelize");

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email: email } });
  return user;
};

const saveUser = async (newUser) => {
  // if newUser id is not null, it will update the user. If  id is null it will create a new register

  const user = User.build(newUser, { isNewRecord: !newUser.id });

  await user.save();

  return user;
};

const getAllUsers = async (query) => {

//Both column and term "ToSearch" will look if the query to search is empty to return a default value
//Now we can search by term and specific column
  const columnToSearch = () => {
    if (query.searchBy) {
      return query.searchBy;
    }
    return "email";
  };

  const termToSearch = () => {
    if (query.searchTerm) {
      return query.searchTerm;
    }
    return "";
  };
//Both column and direction "ToSort" will look if the query to order is empty to return a default value
//Now we can sort by specific column
  const columnToSort = () => {
    if (query.sortCol) {
      return query.sortCol;
    }
    return "id";
  };

  const directionToSort = () => {
    if (query.sortDirection) {
      return query.sortDirection;
    }
    return "ASC";
  };




  const limit = 10;
  const offset = query.page * limit;
  const { count, rows } = await User.findAndCountAll({
    where: sequelize.where(
      sequelize.fn("LOWER", sequelize.col(columnToSearch())),
      "LIKE",
      "%" + termToSearch() + "%"
    ),
    order: [[columnToSort(), directionToSort()]],
    attributes: {
      exclude: ["password"],
    },
    offset: offset,
    limit: limit,
  });
  if (count === 0) {
    return null;
  }
  //devuelvo un objeto con la cantidad de usuarios total que hay y un array con sos usuarios eliminado la password
  return { total_users: count, users: rows };
};

const deleteUserById = async (id) =>{
    const user = await User.destroy({where:{id: id}})
    if (!user){
        return "User does not exist"
    }
    return "User deleted"
}


const updateUserById = async (updatedUserData) => {
    const user = await User.update(updatedUserData, {
        where: { id: updatedUserData.id },
      })
    if (user[0] === 0){
        return "User does not exist"
    }
    return updatedUserData
}

module.exports = {
    getUserByEmail,
    saveUser,
    getAllUsers,
    deleteUserById,
    updateUserById
}
