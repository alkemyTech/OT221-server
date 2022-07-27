'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('roles_ong',
            [
                {
                    role_ong: 'CEO',
                },
                {
                    role_ong: 'CoFundador',
                },
                {
                    role_ong: 'Miembro',
                }
            ]);

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('roles_ong', null, {});

    }
};
