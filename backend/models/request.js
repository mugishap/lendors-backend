'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Request.init({
    id: { type: DataTypes.STRING, allowNull: false },
    customerId: { type: DataTypes.STRING, allowNull: false },
    carId: { type: DataTypes.STRING, allowNull: false },
    startDate: { type: DataTypes.INTEGER, allowNull: false },
    endDate: { type: DataTypes.INTEGER, allowNull: false },
    timeRequested: { type: DataTypes.INTEGER, allowNull: false, defaultValue: Date.now() },
    isAllowed: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};