class LoginController{
    static async getLogin(req, res){
        res.render('login');
    }

    static async postlogin(req, res){
        res.redirect('/');
    }
}

module.exports = LoginController;