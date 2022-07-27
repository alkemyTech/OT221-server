'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Members extends Model {
        static associate(models) {
            Members.belongsTo(models.Role_ong)
        }
    }
    Members.init({
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {
        sequelize,
        tableName: 'members'
    });
    return Members;
};