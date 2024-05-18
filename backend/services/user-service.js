const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong in service layer");
      throw error;
    }
  }

  async signin(email, password) {
    try {
      const user = await this.userRepository.getByEmail(email);

      if (password !== user.password) {
        console.log("password doesnt match");
        throw { error: "password doesnt match" };
      }

      return user;
    } catch (error) {
      console.log(error);
      console.log("something went wrong in service layer for sign in process");
      throw error;
    }
  }
}

module.exports = UserService;
