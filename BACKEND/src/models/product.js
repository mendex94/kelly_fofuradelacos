const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const  Products = db.define(
  "Products",
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
    id_album: {
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
    tableName: "products",
  }
);
