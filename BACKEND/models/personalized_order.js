'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personalized_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  personalized_order.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'personalized_order',
  });
  return personalized_order;
};