const { Sequelize } = require('sequelize')
require('dotenv').config()


const sequelize = new Sequelize(
	"ddmc0ei54d44sd", 
	"rbvurxoeymmtqd", 
	"9eebce5c9148932d53ab865c8eec7a50c08d3bb47bb3aab8293bcb4af3c21cc4", 
	{
		host: "ec2-23-23-182-238.compute-1.amazonaws.com",
		port: 5432,
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				rejectUnauthorized: false
			}
		}
  })

sequelize.authenticate()
	.then(async () => console.log('Connection has been established successfully.'))

module.exports = sequelize