module.exports = {

    sessions: async (req, res) => {
        res.render('user/sessions',{ user: req.user });
    },
    sessionDetails: async (req, res) => {
        res.render('user/session-detail',{ user: req.user });
    },

}