const { DataTypes } = require('sequelize')
const connection = require('../infra/database')

const exemplar = connection.define('exemplar', {
	numero: {
		type: DataTypes.INTEGER,
		primaryKey: true,
	},
    nro_Exemplar: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
	isbn: {
		type: DataTypes.STRING(12),
		allowNull: false,
        primaryKey: true,
	},
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: null
    }
}, {
	tableName: 'exemplar',
	timestamps: false,
})

module.exports = exemplar
