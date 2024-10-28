

module.exports = {

    //home page
    index: async (req, res) => {
        res.render('website/index');
    },
    login: async (req, res) => {
        res.render('website/login');
    },
    getStart: async (req, res) => {
        res.render('website/get-started');
    },
    forBusiness: async (req, res) => {
        res.render('website/for-business');
    },
 
    

} 






