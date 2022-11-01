'use strict';
const {
  Model
} = require('sequelize');
const { v4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    id: { type: DataTypes.STRING, allowNull: false, defaultValue: v4(), primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false, },
    brand: { type: DataTypes.STRING, allowNull: false, },
    imageUrl: { type: DataTypes.STRING, allowNull: false, },
    added: { type: DataTypes.STRING, allowNull: false, },
    price: { type: DataTypes.STRING, allowNull: false, },
    isBooked: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false, },
    currency: { type: DataTypes.STRING, allowNull: false, }
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};