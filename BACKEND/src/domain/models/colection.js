const db = require("../../../infrastructure/database");
const { DataTypes } = require ('sequelize')

export const Colections = db.define (
    'Colections', {
        id_colection: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          name: {
            type: DataTypes.STRING
          },
          date_begin: {
            type: DataTypes.DATE
          },
          date_end: {
            type: DataTypes.DATE
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
}, {
    tableName: 'colections'
})



