module.exports = function(sequelize, DataTypes) {
    const Admin = sequelize.define("Admin", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Admin;
};