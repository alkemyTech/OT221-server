'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('categories', [{
            name: "Plumbing & Medical Gas",
            description: "Melanoma in situ of trunk",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "RF Shielding",
            description: "Nondisp fx of medial condyle of right femur, sequela",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "RF Shielding",
            description: "Fall same lev from slip/trip w strike against sharp object",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Roofing (Metal)",
            description: "Oth physeal fracture of lower end radius, right arm, sequela",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Granite Surfaces",
            description: "Other specified injuries of head, initial encounter",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Electrical and Fire Alarm",
            description: "Unsp fracture of unsp lum vertebra, subs for fx w nonunion",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Fire Sprinkler System",
            description: "Other vitreous opacities, bilateral",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Construction Clean and Final Clean",
            description: "Displaced unsp condyle fracture of lower end of left femur",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Fire Protection",
            description: "Laceration w fb of right thumb w/o damage to nail, init",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Exterior Signage",
            description: "Lacerat intrns musc/fasc/tend r little finger at wrs/hnd lv",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Structural and Misc Steel (Fabrication)",
            description: "Injury of ovary",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Exterior Signage",
            description: "Subluxation of metacarpal (bone), proximal end of right hand",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Granite Surfaces",
            description: "Toxic effect of contact w sea anemone, self-harm, subs",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Electrical and Fire Alarm",
            description: "Strain msl/tnd lng flxr msl toe at ank/ft lev, r foot, init",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Temp Fencing, Decorative Fencing and Gates",
            description: "Fall from non-moving motorized mobility scooter, subs encntr",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Masonry",
            description: "Unsp fracture of lower end of unsp humerus, init for clos fx",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Sitework & Site Utilities",
            description: "Malignant carcinoid tumor of the midgut, unspecified",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Structural and Misc Steel (Fabrication)",
            description: "Adverse effect of agents primarily affecting GI sys, subs",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Exterior Signage",
            description: "Inj unsp musc/tend at lower leg level, unsp leg",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Doors, Frames & Hardware",
            description: "Other helicopter accident injuring occupant, init encntr",
            createdAt: new Date(),
            updatedAt: new Date()
        }]);

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('categories', null, {});

    }
};
