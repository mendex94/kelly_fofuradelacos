'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_album.init({
    id_album: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    url_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product_album',
  });
  return product_album;
};