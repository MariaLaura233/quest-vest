const RegisterUserModel = require("../models/registerUserModels");

module.exports = class RegisterUserMiddleware{
    static async verifyFields(req, res, next){
        const { ...data_user } = req.body;

        const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regex_senha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$#@%*&!?])/;
    
        const regex_maiuscula = /^(?=.*[A-Z])/;
        const regex_minuscula = /^(?=.*[a-z])/;
        const regex_numero = /^(?=.*[0-9])/;
        const regex_caracter_especial = /^(?=.*[$#@%*&!?])/;
    
        if (
          !data_user.user_name ||
          !data_user.user_email ||
          !data_user.user_password ||
          !data_user.userConfirmPassword
        ) {
          req.message = {
            msgFieldsEmpty: "Os campos não podem ser vazios!",
          };
    
          return res.render("loginRegister", {
            msg: req.message,
          });
        }
    
        if (data_user.user_name.length < 3) {
          req.message = {
            msgNameError: "Nome precisa ter no minino 3 caracteres!",
          };
    
          return res.render("loginRegister", {
            msg: req.message,
          });
        }
    
        if (!regex_email.test(data_user.user_email)) {
          req.message = {
            msgEmailError: "Digite um email valido!",
          };
    
          return res.render("loginRegister", {
            msg: req.message,
          });
        }
    
        if (!regex_senha.test(data_user.user_password)) {
          req.message = {
            passwordError:
              "Senha precisa ter Letras Maiusculas, Minusculas, Numeros e Caracteres especiais!",
          };
          console.log(req.message);
          return res.render("loginRegister", {
            msg: req.message,
          });
        }
    
        if (data_user.user_password !== data_user.userConfirmPassword) {
          req.message = {
            msgPassError: "Senha não são iguais",
          };
          console.log(req.message);
          return res.render("loginRegister", {
            msg: req.message,
          });
        }
    
        const recebeEmailFromModel = await RegisterUserModel.getUserByEmail(
          data_user.user_email
        );
        console.log("Estamos na Controller");
        console.log(recebeEmailFromModel);
        next();
    }
}