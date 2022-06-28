'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    id_product: DataTypes.INTEGER,
    in_product_material: DataTypes.INTEGER,
    id_product_size: DataTypes.INTEGER,
    id_product_size: DataTypes.INTEGER,
    id_product_color: DataTypes.INTEGER,
    description: DataTypes.STRING,
    model: DataTypes.STRING,
    type: DataTypes.STRING,
    weight: DataTypes.DECIMAL,
    notes: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};