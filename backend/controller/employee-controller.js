const EmployeeService = require("../services/employee-service");

const employeeService = new EmployeeService();

const create = async (req, res) => {
  try {
    const response = await employeeService.create({
      Name: req.body.name,
      Salary: req.body.salary,
      DID: req.body.did,
    });
    return res.status(201).json({
      data: response,
      error: {},
      sucess: true,
      message: "created the Employee",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      err: error,
      sucess: false,
      message: error.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await employeeService.getAll();
    return res.status(201).json({
      data: response,
      error: {},
      sucess: true,
      message: "got the Employees",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      err: error,
      sucess: false,
      message: "didnt get employees",
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await employeeService.destroy(req.params.id);
    return res.status(201).json({
      data: response,
      error: {},
      sucess: true,
      message: "deleted the Employee",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      err: error,
      sucess: false,
      message: "didnt delete employees",
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await employeeService.update(
      { Name: req.body.name, Salary: req.body.salary, DID: req.body.did },
      req.params.id
    );
    return res.status(201).json({
      data: response,
      error: {},
      sucess: true,
      message: "updated the Employee",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      err: error,
      sucess: false,
      message: "didnt update employees",
    });
  }
};

module.exports = {
  create,
  getAll,
  destroy,
  update,
};
