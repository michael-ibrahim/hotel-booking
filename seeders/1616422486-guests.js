'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Guests', [
            {name: 'Michael Ibrahim', phone: '01226088909', email:"mmibrahim@aucegypt.edu"},
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Guests', null, {});
    }
};