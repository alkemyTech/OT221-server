'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('entries', [{
      name: 'Demo news 1',
      image: '1b84c3f95c84088e0fa6a4ff54f9a90e',
      content: 'This is the demo news number 1',
      type: 'news',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo news 2',
      image: '9fa679ef2b8cca0fb881a37ff711aa12',
      content: 'This is the demo news number 2',
      type: 'news',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo news 3',
      image: '079896e23bbbd35072ceba400dcc0b7b',
      content: 'This is the demo news number 3',
      type: 'news',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo news 4',
      image: 'cd20b6be88c9d191b50513885406aa0d',
      content: 'This is the demo news number 4',
      type: 'news',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo event 5',
      image: '4913db44a2218b9962175c497aaeba35',
      content: 'This is the demo event number 5',
      type: 'event',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 6',
      image: '59590b6bc1614a14e4c0b129dbf62346',
      content: 'This is the demo activity number 6',
      type: 'event',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 7',
      image: '1b84c3f95c84088e0fa6a4ff54f9a90e',
      content: 'This is the demo activity number 7',
      type: 'event',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 8',
      image: '1b84c3f95c84088e0fa6a4ff54f9a90e',
      content: 'This is the demo activity number 8',
      type: 'news',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 9',
      image: '00f802f29e60f4a087e94011248eb943',
      content: 'This is the demo activity number 9',
      type: 'news',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};