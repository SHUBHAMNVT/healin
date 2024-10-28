module.exports = {
    dashboard: async (req, res) => {
        console.log(req.loggedinTherapist);
        res.render('therapy/dashboard', {data : req.loggedinTherapist});
    }
}