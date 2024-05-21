const DepartmentRepository = require("../repository/department-repository");

class DepartmentService {
  constructor() {
    this.departmentRepository = new DepartmentRepository();
  }
  async create(departmentName) {
    try {
      const department = await this.departmentRepository.create(departmentName);
      return department;
    } catch (error) {
      console.log("something went wrong in service layer", error);
      throw error;
    }
  }
  async getAll() {
    try {
      const departments = await this.departmentRepository.getAll();
      return departments;
    } catch (error) {
      console.log("something went wrong in service layer", error);
      throw error;
    }
  }
  async destroy(id) {
    try {
      const department = await this.departmentRepository.deleteDepartment(id);
      return department;
    } catch (error) {
      console.log("something went wrong in service layer", error);
      throw error;
    }
  }
  async update(data, id) {
    try {
      const department = await this.departmentRepository.updateDepartment(
        id,
        data
      );
      return department;
    } catch (error) {
      console.log("something went wrong in service layer", error);
      throw error;
    }
  }
}

module.exports = DepartmentService;
