import { Sizes } from './size';
import { Products } from "./product";

const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const Product_Sizes = db.define(
  "Product_Sizes",
  {
    id_product_size: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_size: {
      type: DataTypes.INTEGER,
      references:{
        model: Sizes,
        key: 'id_size'
    }
    },
    id_product: {
      type: DataTypes.INTEGER,
      references:{
        model: Products,
        key: 'id_product' 
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
    tableName: "product_sizes",

  }
);
