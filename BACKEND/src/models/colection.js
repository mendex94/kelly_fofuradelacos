const db = require ('../dataBase/dbConexao')
const { DataTypes } = require ('sequelize')

const Colection = db.define ('colection', {
    id_colection: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'colection'
})

module.exports = Colection

