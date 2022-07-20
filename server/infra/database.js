const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
	process.env.DB_DATABASE,
	process.env.DB_USER,
	process.env.DB_PASS,
	{
		host: 'ec2-23-23-182-238.compute-1.amazonaws.com',
		dialect: 'postgres',
		logging: false,
	},
)

module.exports = sequelize
