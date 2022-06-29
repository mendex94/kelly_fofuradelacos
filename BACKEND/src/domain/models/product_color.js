const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const  Product_Colors = db.define(
  "Product_Colors",
  {
    id_product_color: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_product: {
      type: DataTypes.INTEGER
    },
    id_color: {
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
    tableName: "product_colors",
  }
);
