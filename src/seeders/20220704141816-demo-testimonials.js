'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('testimonials', [{
            name: 'Testimonial 1',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 1',
            userId: 1,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 2',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 2',
            userId: 2,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 3',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 3',
            userId: 3,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 4',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 4',
            userId: 4,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 5',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 5',
            userId: 5,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 6',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonialnumber 6',
            userId: 6,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 7',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 7',
            userId: 7,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 8',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 8',
            userId: 8,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 9',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 9',
            userId: 9,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 10',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 10',
            userId: 10,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 11',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 11',
            userId: 11,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 12',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 12',
            userId: 12,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 13',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 13',
            userId: 13,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 14',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 14',
            userId: 14,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 15',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 15',
            userId: 15,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 16',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonialnumber 16',
            userId: 16,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 17',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 17',
            userId: 17,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 18',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 18',
            userId: 18,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 19',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 19',
            userId: 19,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 20',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 20',
            userId: 20,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 21',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 21',
            userId: 21,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 22',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 22',
            userId: 22,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 23',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 23',
            userId: 23,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 24',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonialnumber 24',
            userId: 24,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 25',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 25',
            userId: 25,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 26',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 26',
            userId: 26,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 27',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 27',
            userId: 27,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 28',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 28',
            userId: 28,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 29',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 29',
            userId: 29,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: 'Testimonial 30',
            image: '9b731bc1345c3b92f7e6e8afe17b62b6',
            content: 'This is the demo Testimonial number 30',
            userId: 30,
            createdAt: new Date,
            updatedAt: new Date
        },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
