'use strict';
const {
  Model
} = require('sequelize');
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
    id:{},
    names: {type:DataTypes.STRING,allowNull:false,},
    email: {type:DataTypes.STRING,allowNull:false,},
    address: {type:DataTypes.STRING,allowNull:false,},
    joined: {type:DataTypes.STRING,allowNull:false,},
    telephone: {type:DataTypes.STRING,allowNull:false,},
    role: {type:DataTypes.STRING,allowNull:false,},
    password: {type:DataTypes.STRING,allowNull:false,}
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};