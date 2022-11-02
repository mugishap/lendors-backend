'use strict';
const { DarkModeTwoTone } = require('@mui/icons-material');
const {
  Model
} = require('sequelize');
const { Schema } = require('swaggiffy');

const { v4 } = require('uuid')


module.exports = (sequelize, DataTypes) => {
  // @Schema('Admin')
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init({
    id: { type: DataTypes.STRING, defaultValue: v4({ random: true }), primaryKey: true, allowNull: false },
    names: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    telephone: { type: DataTypes.STRING, allowNull: false },
    joined: { type: DataTypes.INTEGER, defaultValue: Date.now(), allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "admin", allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};