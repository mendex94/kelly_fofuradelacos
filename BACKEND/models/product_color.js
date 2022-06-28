'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_color.init({
    id_product_color: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    id_color: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_color',
  });
  return product_color;
};