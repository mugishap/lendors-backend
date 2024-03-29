'use strict';
const DataTypes = require('sequelize/lib/data-types');
const { registerSchema } = require('swaggiffy');
const { sequelize } = require('../utils/database');

const Request = sequelize.define('Request', {
  id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
  userId: { type: DataTypes.STRING, allowNull: false },
  carId: { type: DataTypes.STRING, allowNull: false },
  startDate: { type: DataTypes.INTEGER, allowNull: false },
  endDate: { type: DataTypes.INTEGER, allowNull: false },
  timeRequested: { type: DataTypes.INTEGER, allowNull: false, defaultValue: Date.now() },
  status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'pending' }
}, {})

//registerSchema('Request', sequelize.createSchema('Request'), { orm: "sequelize" });

module.exports = () => {
  return Request;
};