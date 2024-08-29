class DashboardController{
    static async getDashboard(req, res){
        res.render('dashboard');
    }
}

module.exports = DashboardController;
