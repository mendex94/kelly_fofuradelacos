const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");
const Customers = require("./customer");

const  Orders = db.define(
  "Orders",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_customer: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: Customers,
        key: "id",
      }
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

module.exports = Orders;