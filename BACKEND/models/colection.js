'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class colection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  colection.init({
    id_colection: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date_begin: DataTypes.DATE,
    date_end: DataTypes.DATE,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'colection',
  });
  return colection;
};