'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class social_networks extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    social_networks.init({
        network: DataTypes.STRING,
        link: DataTypes.STRING,
        organization_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'social_networks',
    });
    return social_networks;
};