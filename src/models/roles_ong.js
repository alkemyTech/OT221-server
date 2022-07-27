'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Role_ong extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Role_ong.hasMany(models.Members)
        }
    }
    Role_ong.init({
        role_ong: DataTypes.STRING
    }, {
        sequelize,
        tableName: 'roles_ong',
    });
    return Role_ong;
};