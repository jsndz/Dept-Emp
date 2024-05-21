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
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Name: DataTypes.STRING,
      Salary: DataTypes.INTEGER,
      DID: {
        type: DataTypes.INTEGER,
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
