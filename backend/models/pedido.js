'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.juego,{
        foreignKey:'pedidoId'
      });
    }
  };
  pedido.init({
    juegoId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    fecha_alquiler: DataTypes.DATE,
    fecha_devolucion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'pedido',
  });
  return pedido;
};