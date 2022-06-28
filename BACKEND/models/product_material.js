'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_material.init({
    id_product_material: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    id_material: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_material',
  });
  return product_material;
};