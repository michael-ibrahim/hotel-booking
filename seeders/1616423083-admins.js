'use strict';

const bCrypt = require('bcrypt-nodejs');
var generateHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Admins', [
            {email:"admin@admin.com", password: generateHash('admin'), role: 'super'},
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Admins', null, {});
    }
};