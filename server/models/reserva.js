const { DataTypes } = require('sequelize')
const connection = require('../infra/database')

const reserva = connection.define('reserva', {
	codigo: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
    isbn: {
        type: DataTypes.STRING(12),
        allowNull: false,
    },
    codigo_Assoc: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('Iniciado', 'Avisado', 'Anulado'),
        allowNull: false,
    },


}, {
	tableName: 'reserva',
	timestamps: false,
})

module.exports = reserva
