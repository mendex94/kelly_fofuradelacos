import { Customers } from "./customer";
import { Orders } from "./order";

const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const Order_Details = db.define(
  "Order_Details",
  {
    id_order_detail: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_order: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: Orders,
        key: "id",
      }
    },
    id_product: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: Products,
        key: "id",
      }
    },
    id_customer: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: Customers,
        key: "id",
      }
    },
    amount: {
      type: DataTypes.INTEGER
    },
    unit_value: {
      type: DataTypes.DECIMAL
    },
    percentage_discount: {
      type: DataTypes.DECIMAL
    },
    total_value: {
      type: DataTypes.DECIMAL
    },
    id_product_size: {
      type: DataTypes.INTEGER
    },
    id_product_color: {
      type: DataTypes.INTEGER
    },
    id_product_material: {
      type: DataTypes.INTEGER
    },
    id_product_collection: {
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
    tableName: "order_details",
  }
);
