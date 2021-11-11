'use strict';
const {Model} = require('sequelize');
const category = require('./category');
module.exports = (sequelize, DataTypes) => {
  class juego extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      juego.belongsTo(models.category, {
        foreignKey: 'categoryId'
      });
    }
  };
  juego.init({
    title: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'juego',
  });
  return juego;
};