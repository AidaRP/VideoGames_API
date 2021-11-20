'use strict';
const {Model} = require('sequelize');
const pedido = require('./pedido');
module.exports = (sequelize, DataTypes) => {
  class juego extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      juego.belongsTo(models.pedido, {
        foreignKey: 'pedidoId'
      });
    }
  };
  juego.init({
    titulo: DataTypes.STRING,
    año: DataTypes.DATE,
    consola: DataTypes.STRING,
    genero: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    alquilada: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'juego',
  });
  return juego;
};