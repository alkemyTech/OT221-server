'use strict';
const bcrypt = require('bcrypt');

const data = require('../data/mock_users_data.json');

// Encode password
const toSeed = data.map(user => {
    const password = bcrypt.hashSync(user.password, 10);
    user.password = password;
    return user
})

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('users', toSeed)
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {});
    }
};
