import { Materials } from './material';
import { Products } from "./product";

const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const Product_Materials = db.define(
  "Product_Materials",
  {
    id_product_material: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_product: {
      type: DataTypes.INTEGER,
      references:{
        model: Products,
        key: 'id_product' 
      }     
    },
    id_material: {
      type: DataTypes.INTEGER,
      references:{
        model: Materials,
        key: 'id_material'
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
    tableName: "product_materials",
  }
);
