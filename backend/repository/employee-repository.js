const { Employee } = require("../models/index");
const CrudRepository = require("./crud-repository");
class EmployeeRepository extends CrudRepository {
  constructor() {
    super(Employee);
  }
  async deleteEmployee(Id) {
    try {
      const result = await Employee.destroy({
        where: {
          EID: Id,
        },
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in the repo layer");
      throw { error };
    }
  }
  async updateEmployee(modelId, data) {
    try {
      const result = await Employee.update(data, {
        where: {
          EID: modelId,
        },
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in the repo layer");
      throw { error };
    }
  }
  async getEmployees() {
    try {
      const result = await Employee.findAll();

      return result;
    } catch (error) {
      console.log("Something went wrong in the repo layer");
      throw { error };
    }
  }
}

module.exports = EmployeeRepository;
