'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Rooms', [
            {SectionId:1},
            {SectionId: 1},
            {SectionId: 1},
            {SectionId: 2},
            {SectionId: 2},
            {SectionId: 3},
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Rooms', null, {});
    }
};