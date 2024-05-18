const { User } = require("../models/index");
const CrudRepository = require("./crud-repository");
class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }
  async getByEmail(email) {
    try {
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      return user;
    } catch (error) {
      console.log("Something went wrong in the crud layer");
      throw { error };
    }
  }
}

module.exports = UserRepository;
