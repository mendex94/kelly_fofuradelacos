const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const  Orders = db.define(
  "Orders",
  {
    id_order: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date_order: {
      type: DataTypes.DATE
    },
    total_order: {
      type: DataTypes.DECIMAL
    },
    discount: {
      type: DataTypes.DECIMAL
    },
    products_quantity: {
      type: DataTypes.INTEGER
    },
    shipping_total: {
      type: DataTypes.DECIMAL
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
    tableName: "orders",
  }
);
