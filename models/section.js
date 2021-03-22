module.exports = function(sequelize, DataTypes) {
    const Section = sequelize.define("Section", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    });

    return Section;
};