'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order_detail.init({
    id_order_detail: DataTypes.INTEGER,
    id_order: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    unit_value: DataTypes.DECIMAL,
    percentage_discount: DataTypes.DECIMAL,
    total_value: DataTypes.DECIMAL,
    id_product_size: DataTypes.INTEGER,
    id_product_color: DataTypes.INTEGER,
    id_product_material: DataTypes.INTEGER,
    id_product_colection: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_detail',
  });
  return order_detail;
};