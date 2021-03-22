module.exports = function(sequelize) {

    const Room = sequelize.define("Room");

    Room.associate = function(models) {
        Room.belongsTo(models.Section, {
            onDelete: "cascade"
        });

    };

  return Room;
};