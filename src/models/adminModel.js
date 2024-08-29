const database = require("../database/database");

module.exports = class AdminModel {
  static async selectAdminByEmail(adminEmail) {
    const selectAdminEmail = "SELECT * FROM admin_users WHERE admin_email = ?;";
    const [[result]] = await database.query(selectAdminEmail, [adminEmail]);

    return result;
  }
};
