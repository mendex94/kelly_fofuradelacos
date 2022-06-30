import { Products } from "./product";

const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const  Product_Albums = db.define(
  "Product_Albums",
  {
    id_album: {
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
    url_image: {
      type: DataTypes.STRING
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
    tableName: "product_albums",
  }
);
