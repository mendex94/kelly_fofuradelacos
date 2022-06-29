'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_colection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_colection.init({
    id_product_colection: DataTypes.INTEGER,
    id_colection: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_colection',
  });
  return product_colection;
};