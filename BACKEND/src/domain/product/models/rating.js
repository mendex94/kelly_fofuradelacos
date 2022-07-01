const { Products } = require('./product')

const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

const  Ratings = db.define(
  "Ratings",
  {
    id_rating: {
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
    description: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.DATE
    },
    evaluation_grade: {
      type: DataTypes.INTEGER
    },
    author: {
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
    tableName: "ratings",
  }
);

module.exports = Ratings