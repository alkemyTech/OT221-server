'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('members', [
            {
                name: "Cecilia Mendez",
                image: "4010ec042ab90911678715b72ba8e291",
                description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor dolorum deleniti optio aliquam repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 1
            },
            {
                name: "Marcos Fernandez",
                image: "039738df2e708d9bf03f886fb9c06dc7",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor suscipit obcaecati eniti optio al rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 3
            },

            {
                name: "María Garcia",
                image: "e1442cb91295dbff46b70916c3d9994b",
                description: "Lorem ipsum dolor  adipisicing elit. Officia dolor suscipit obcaecati dolorum deleniti optio  repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 2
            },

            {
                name: "María Iraola",
                image: "b66f88ba3f6c09a67aae35586f821ae5",
                description: "Lorem ipsum doloreleniti optio aliquam repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 3
            },

            {
                name: "Marita Gomez",
                image: "f325b5b4a49890d39ace9a64a90e1430",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor suscipit obcaecati dolorum deleniti optio aliquam repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 2
            },

            {
                name: "Miriam Rodriguez",
                image: "9b92a40f33146c68c167e777501edf3e",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor suscipit obcaecati dolorum deleniti optio aliquam repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 2
            },

            {
                name: "Rodrigo Fuente",
                image: "fb7888465f7816aa68ecda08c5013c4c",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor suscorum deleniti optio aliquam repudiaomnis ipsam? Ab atque eius sit!",
                roleOngId: 3
            },

        ], {});
    },


    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('members', null,);
    }
};



[

]