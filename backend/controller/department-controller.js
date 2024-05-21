const DepartmentService = require("../services/department-service");

const departmentService = new DepartmentService();

const create = async (req, res) => {
  try {
    console.log(req.body);
    const response = await departmentService.create({
      Name: req.body.depName,
    });
    return res.status(201).json({
      data: response,
      error: {},
      sucess: true,
      message: "created the Department",
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
    const response = await departmentService.getAll();
    return res.status(201).json({
      data: response,
      error: {},
      sucess: true,
      message: "got the Departments",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      err: error,
      sucess: false,
      message: "didnt get departments",
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await departmentService.destroy(req.params.id);
    return res.status(201).json({
      data: response,
      error: {},
      sucess: true,
      message: "deleted the Department",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      err: error,
      sucess: false,
      message: "didnt delete departments",
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await departmentService.update(
      { Name: req.body.depName },
      req.params.id
    );
    return res.status(201).json({
      data: response,
      error: {},
      sucess: true,
      message: "deleted the Department",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      err: error,
      sucess: false,
      message: "didnt delete departments",
    });
  }
};

module.exports = {
  create,
  getAll,
  destroy,
  update,
};
