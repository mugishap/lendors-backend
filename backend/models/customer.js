'use strict';
const {
  Model
} = require('sequelize');
const { v4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    id: { type: DataTypes.STRING, allowNull: false, defaultValue: v4(), primaryKey: true },
    names: { type: DataTypes.STRING, allowNull: false, },
    email: { type: DataTypes.STRING, allowNull: false, },
    address: { type: DataTypes.STRING, allowNull: false, },
    joined: { type: DataTypes.INTEGER, defautValue: Date.now(), allowNull: false, },
    telephone: { type: DataTypes.STRING, allowNull: false, },
    role: { type: DataTypes.STRING, defautValue: 'user', allowNull: false, },
    password: { type: DataTypes.STRING, allowNull: false, }
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};