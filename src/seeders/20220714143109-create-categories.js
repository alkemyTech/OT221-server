"use strict";
const data = require("../data/DummyDataCategories.json");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
