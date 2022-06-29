const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const  Product_Colections = db.define(
  "Product_Colections",
  {
    id_product_colection: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_colection: {
      type: DataTypes.INTEGER
    },
    id_product: {
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
    tableName: "product_colections",
  }
);