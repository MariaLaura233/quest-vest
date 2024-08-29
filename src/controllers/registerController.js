const RegisterUserModel = require("../models/registerUserModels");

class RegisterController{
    static async getRegister(req, res){
        return res.render('loginRegister', {msg: ''});
    }

    static async postLogin(req, res){
        return res.redirect('/');
    }

    static async postRegister(req, res){
       

    req.message = {
      msgSuccess: "Cadastro realizado com sucesso",
    };
     return res.render("loginRegister", {
      msg: req.message,});
        
    }
}

module.exports = RegisterController;