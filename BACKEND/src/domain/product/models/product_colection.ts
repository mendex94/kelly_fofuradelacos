const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const  Product_Collections = db.define(
  "Product_Collections",
  {
    id_product_collection: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_collection: {
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
    tableName: "product_collections",
  }
);