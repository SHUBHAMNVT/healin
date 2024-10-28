

module.exports = {

   // About all pages
    theMethod: async (req, res) => {
        res.render('website/the-method');
    },
    whoWeAre: async (req, res) => {
        res.render('website/who-we-are');
    },
    reviews: async (req, res) => {
        res.render('website/reviews');
    },
    faq: async (req, res) => {
        res.render('website/faq');
    },
    blog: async (req, res) => {
        res.render('website/blog');
    },
    contact: async (req, res) => {
        res.render('website/contact');
    },


} 






