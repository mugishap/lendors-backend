'use strict';
const { v4 } = require('uuid');
const DataTypes = require('sequelize/lib/data-types');
const { sequelize } = require('../utils/database');
const { registerSchema } = require('swaggiffy');

const Customer = sequelize.define('Customer', {
  id: { type: DataTypes.STRING, allowNull: false, defaultValue: v4(), primaryKey: true },
  names: { type: DataTypes.STRING, allowNull: false, },
  email: { type: DataTypes.STRING, allowNull: false, },
  address: { type: DataTypes.STRING, allowNull: false, },
  joined: { type: DataTypes.INTEGER, defautValue: Date.now(), allowNull: false, },
  telephone: { type: DataTypes.STRING, allowNull: false, },
  role: { type: DataTypes.STRING, defautValue: 'user', allowNull: false, },
  password: { type: DataTypes.STRING, allowNull: false, }
}, {});

//registerSchema('Customer', sequelize.createSchema('Customer'), { orm: 'sequelize' });

module.exports = () => {
  return Customer;
};