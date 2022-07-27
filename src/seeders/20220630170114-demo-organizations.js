'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('organizations',
            [{
                name: 'somos mas',
                image: '1b84c3f95c84088e0fa6a4ff54f9a90e',
                phone: '123456789',
                address: 'calle falsa 123',
                welcomeText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsum placeat natus! A quam porro possimus. Optio harum cupiditate rem dolore itaque. Tempora quae dignissimos excepturi sunt nostrum sint accusantium.',
                createdAt: new Date(),
                updatedAt: new Date(),
            }]);

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('organizations', null, {});

    }
};
