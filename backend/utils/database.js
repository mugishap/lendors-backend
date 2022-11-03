const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const databaseUsername = import.meta.envDATABASE_USERNAME
const databasePassword = import.meta.envDATABASE_PASSWORD
const databaseName = import.meta.envDATABASE_NAME

// const sequelize = new Sequelize('', {})


exports.sequelize = new Sequelize(databaseName, databaseUsername, databasePassword, {
    host: 'localhost',
    dialect: 'postgres'
  });
  
  const sequelize = new Sequelize(databaseName, databaseUsername, databasePassword, {
    host: 'localhost',
    dialect: 'postgres'
  });

exports.connectToDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error({ message: 'Unable to connect to the database:', error: error });
    }
}