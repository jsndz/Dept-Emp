const { User } = require("../models/index");
const CrudRepository = require("./crud-repository");
class UserRepository extends CrudRepository {
  constructor() {
    super(Url);
  }
}

module.exports = UserRepository;
