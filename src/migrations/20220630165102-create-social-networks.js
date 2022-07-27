'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('social_networks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            network: {
                type: Sequelize.STRING
            },
            link: {
                type: Sequelize.STRING
            },
            bootstrapIconName: {
                type: Sequelize.STRING
            },
            organization_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'organizations',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('social_networks');
    }
};