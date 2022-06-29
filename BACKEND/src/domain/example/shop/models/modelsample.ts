const db = require("../../../infrastructure/database");
import { DataTypes } from "sequelize";

export const Produtos = db.define(
  "Produtos",
  {
    id_product: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_product_material: { 
      type: DataTypes.INTEGER
    },
    id_product_size: {
      type: DataTypes.INTEGER
    },
    id_product_color: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    model: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    weight: {
      type: DataTypes.DECIMAL
    },
    notes: {
      type: DataTypes.STRING
    },
    images: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.INTEGER
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
    tableName: "produtos",  
  }
);
