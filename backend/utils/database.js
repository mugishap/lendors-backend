const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const databaseUsername = process.env.DATABASE_USERNAME
const databasePassword = process.env.DATABASE_PASSWORD
const databaseName = process.env.DATABASE_NAME
const databasePort = process.env.DATABASE_DRIVER 

const sequelize = new Sequelize(`postgres://${databaseUsername}:'${databasePassword}':${databasePort}/${databaseName}`)

exports.connectToDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}