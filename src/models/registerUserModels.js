const database = require("../database/database");

module.exports = class RegisterUserModel {
  static async getUserByEmail(getEmailFromUserController) {
    const selectEmail = "SELECT user_email FROM users WHERE user_email = ? ";
    const [[result]] = await database.query(selectEmail, [ getEmailFromUserController, ]);
    return result;
  }
}
