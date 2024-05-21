const { Department } = require("../models/index");
const CrudRepository = require("./crud-repository");
class DepartmentRepository extends CrudRepository {
  constructor() {
    super(Department);
  }
  async deleteDepartment(Id) {
    try {
      const result = await Department.destroy({
        where: {
          DID: Id,
        },
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in the repo layer");
      throw { error };
    }
  }
  async updateDepartment(modelId, data) {
    try {
      console.log(data);
      const result = await Department.update(data, {
        where: {
          DID: modelId,
        },
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in the repo layer");
      throw { error };
    }
  }
}

module.exports = DepartmentRepository;
