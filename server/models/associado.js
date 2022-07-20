const { DataTypes } = require('sequelize')
const connection = require('../infra/database')

const associado = connection.define('associado', {
	codigo: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
    nome: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
	senha: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
    endereco: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
	email: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
    status: {
        type: DataTypes.ENUM('Grad', 'Posgrad', 'Prof'),
		allowNull: false,
    }

}, {
	tableName: 'associado',
	timestamps: false,
	hooks: {
		afterCreate: (record) => {
			delete record.dataValues.senha
		},
	},
})

module.exports = associado
