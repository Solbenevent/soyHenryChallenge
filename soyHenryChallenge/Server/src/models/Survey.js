const { DataTypes, UUID, UUIDV4 } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
    sequelize.define("Survey", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        language: {
            type: DataTypes.ENUM("English", "Spanish", "French"),
            allowNull: false
        },
        howFound: {
            type: DataTypes.ENUM("onlineSearch", "Friends", "Advertisement")
        },
        newsletter: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
}