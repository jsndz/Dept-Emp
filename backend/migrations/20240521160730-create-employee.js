"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Employees", {
      EID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      Name: {
        type: Sequelize.STRING,
      },
      Salary: {
        type: Sequelize.INTEGER,
      },
      DID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Departments",
          key: "DID",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Employees");
  },
};
