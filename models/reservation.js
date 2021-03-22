module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
        check_in: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        check_out: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Reservation.associate = function(models) {
        Reservation.belongsTo(models.Room, {
            onDelete: "cascade"
        });

        Reservation.belongsTo(models.Guest, {
            onDelete: "cascade"
        });
    };

    return Reservation;
};