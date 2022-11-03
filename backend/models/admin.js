'use strict';
const DataTypes = require('sequelize/lib/data-types');
const { v4 } = require('uuid');
const { sequelize } = require('../utils/database');
const { registerSchema } = require('swaggiffy');

const Admin = sequelize.define('Admin', {
  id: { type: DataTypes.STRING, defaultValue: v4(), primaryKey: true, allowNull: false },
  names: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  telephone: { type: DataTypes.STRING, allowNull: false },
  joined: { type: DataTypes.INTEGER, defaultValue: Date.now(), allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "admin", allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false }
});

//registerSchema('Admin', Admin, { orm: 'sequelize' });

module.exports = () => {
  return Admin;
};