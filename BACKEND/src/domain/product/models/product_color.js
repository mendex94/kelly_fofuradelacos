const { Colors } = require ('./color');
const { Products } = require ("./product");

const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

const  Product_Colors = db.define(
  "Product_Colors",
  {
    id_product_color: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_product: {
      type: DataTypes.INTEGER,
      foreign_key: true,
      references:{
        model: Products,
        key: 'id_product' 
      }     
    },
    id_color: {
      type: DataTypes.INTEGER,
      foreign_key: true,
      references:{
        model: Colors,
        key: 'id_colors'
    }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    tableName: "product_colors",
  }
);

module.exports = Product_Colors