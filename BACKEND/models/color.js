const db = require ('../dataBase/dbConexao')
const { DataTypes } = require ('sequelize')

const Color = db.define ('color', {
    id_color: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'color'
})

module.exports = Color

