const LocalStrategy = require('passport-local').Strategy;
const User = require('./model/userModel');
const bcrypt = require('bcrypt');

exports.initializingPassport = (passport) => {

    passport.use(new LocalStrategy({ usernameField: 'email' },async (email, password, done) => {

        try {
             const user = await User.findOne({ email });
            if (!user) return done(null, false);
             const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) return done(null, false);
                return done(null, user);
        } catch (error) {
            return done(error, false);
        }

    }));


   passport.serializeUser( (user, done) => {
       done(null, user.id);
   });

   passport.deserializeUser( async (id, done)=>{
       try{
          const user = await User.findById(id);
          return done(null, user);
       }catch(error){
        return done(error, user);
       }
   })
// Middleware to check if the user is authenticated
exports.isAuthenticated = (req, res, next) => {
    
    if (req.user) {
        return next();
    }else{
        res.redirect('/login');
    }
    
  }
}