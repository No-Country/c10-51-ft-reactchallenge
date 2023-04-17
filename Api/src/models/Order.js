const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('order', {
        received: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        onWay: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        delivered: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
};