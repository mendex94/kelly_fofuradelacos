'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_size.init({
    id_product_size: DataTypes.INTEGER,
    id_size: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_size',
  });
  return product_size;
};