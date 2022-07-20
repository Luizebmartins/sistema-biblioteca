const { DataTypes } = require('sequelize')
const connection = require('../infra/database')

const publicacao = connection.define('publicacao', {
    isbn: {
        type: DataTypes.STRING(12),
        allowNull: false,
        primaryKey: true,
    },
	titulo: {
        type: DataTypes.STRING(40),
        allowNull: false,
	},
    autor: {
        type: DataTypes.STRING(35),
        allowNull: false,
    },
    editora: {
        type: DataTypes.STRING(30),
        allowNull: false,
    }
}, {
	tableName: 'publicacao',
	timestamps: false,
})

module.exports = publicacao
