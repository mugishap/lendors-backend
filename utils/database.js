const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const databaseUsername = process.env.DATABASE_USERNAME
const databasePassword = process.env.DATABASE_PASSWORD
const databaseName = process.env.DATABASE_NAME

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