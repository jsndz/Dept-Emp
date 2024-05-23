"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsTo(models.Department, {
        foreignKey: "DID",
        as: "department",
      });
    }
  }
  Employee.init(
    {
      EID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      Name: { type: DataTypes.STRING, allowNull: false },
      Salary: { type: DataTypes.INTEGER, allowNull: false },
      DID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Departments",
          key: "DID",
        },
      },
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  return Employee;
};
