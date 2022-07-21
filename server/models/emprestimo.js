const { DataTypes } = require('sequelize')
const connection = require('../infra/database')

const emprestimo = connection.define('emprestimo', {
	codigo: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
    nro_exemplar: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
	isbn: {
		type: DataTypes.STRING(12),
		allowNull: false,
	},
    codigo_assoc: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
	data_emp: {
		type: DataTypes.DATE,
		allowNull: false,
	},
    data_devol: {
        type: DataTypes.DATE,
		allowNull: false,
    }

}, {
	tableName: 'emprestimo',
	timestamps: false,
})

module.exports = emprestimo
