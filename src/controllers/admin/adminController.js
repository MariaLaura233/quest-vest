const jwt = require("jsonwebtoken");
const AdminModel = require("../../models/adminModel");

class AdminController {
  static async getAdmin(req, res) {
  const message = req.query.message;
   return res.render("admin", {message});
  }

  static async postAdmin(req, res) {
    const { admin_email , admin_password} = req.body;
    const result = await AdminModel.selectAdminByEmail(admin_email);
   
    if (!result) {
      return res.redirect('/admin?message= Você não possui login de Admin, entre em contato com o Admin do sistema!' )
    }


    if (admin_password !== result.admin_password) {
      return res.redirect('/admin?message= As senhas não são iguais!' )
      
    }
    
const token = jwt.sign({token: result.admin_id},
   process.env.SECRET, 
   {expiresIn: 60 * 60 * 1000});

   res.cookie('token', token, {maxAge: 60 * 60 * 1000, httpOnly: true} )




   return res.redirect("/dashboard");
  }
}

module.exports = AdminController;
