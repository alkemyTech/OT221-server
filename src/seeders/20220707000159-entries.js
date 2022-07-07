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
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo news number 1',
      type: 'news',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo news 2',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo news number 2',
      type: 'news',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo news 3',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo news number 3',
      type: 'news',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo news 4',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo news number 4',
      type: 'news',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo event 5',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo event number 5',
      type: 'event',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 6',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo activity number 6',
      type: 'event',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 7',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo activity number 7',
      type: 'event',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 8',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo activity number 8',
      type: 'news',
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 9',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
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
