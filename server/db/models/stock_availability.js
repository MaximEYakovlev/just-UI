'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock_Availability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stock_Availability.init({
    stocked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Stock_Availability',
  });
  return Stock_Availability;
};