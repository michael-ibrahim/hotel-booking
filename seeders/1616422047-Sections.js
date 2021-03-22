'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Sections', [
            {name: 'Anafora'},
            {name: 'Anamnesa'},
            {name: 'Anastasia'},
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Sections', null, {});
    }
};