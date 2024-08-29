class LoginUsesrControllers {
  static async getLogin(req, res) {
  return res.render("loginRegister", {msg: ""});
  }

  static async postLogin(req, res) {
    return res.redirect("/");
    }
}

module.exports = LoginUsesrControllers;
