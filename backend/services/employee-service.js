const DepartmentRepository = require("../repository/department-repository");
const EmployeeRepository = require("../repository/employee-repository");

class EmployeeService {
  constructor() {
    this.employeeRepository = new EmployeeRepository();
    this.departmentRepository = new DepartmentRepository();
  }
  async create(employeeName) {
    try {
      const employee = await this.employeeRepository.create(employeeName);
      return employee;
    } catch (error) {
      console.log("something went wrong in service layer", error);
      throw error;
    }
  }
  async getAll() {
    try {
      const employees = await this.employeeRepository.getEmployees();
      const promises = employees.map(async (employee) => {
        const departmentName =
          await this.departmentRepository.getDepartmentNameById(employee.DID);
        return {
          EID: employee.EID,
          Name: employee.Name,
          Salary: employee.Salary,
          Department: departmentName,
          createdAt: employee.createdAt,
          updatedAt: employee.updatedAt,
        };
      });
      const employeesWithDepartments = await Promise.all(promises);

      return employeesWithDepartments;
    } catch (error) {
      console.log("something went wrong in service layer", error);
      throw error;
    }
  }

  async destroy(id) {
    try {
      const employee = await this.employeeRepository.deleteEmployee(id);
      return employee;
    } catch (error) {
      console.log("something went wrong in service layer", error);
      throw error;
    }
  }
  async update(data, id) {
    try {
      const employee = await this.employeeRepository.updateEmployee(id, data);
      return employee;
    } catch (error) {
      console.log("something went wrong in service layer", error);
      throw error;
    }
  }
}

module.exports = EmployeeService;
