const { Products } = require ("./product");

const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

const  Highlights = db.define(
  "Highlights",
  {
    id_highlight: {
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
    }},
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
    tableName: "highlights",
  }
);

module.exports = Highlights