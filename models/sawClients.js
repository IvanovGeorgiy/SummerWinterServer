const {DataTypes} = require('sequelize');

const sequelize = require('../db');

const sawClients = sequelize.define('summerandwinterclients', {
    id: {
        primaryKey: true,
        autoincrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = sawClients;
