var express = require('express');
var router = express.Router();
const multer  = require('multer');
const passport = require('passport')
const passportConfig  = require('../passportConfig');
const therapistRegisterMiddleware = require("../middleware/therapistRegisterMiddleware");
const authTherapist = require("../middleware/authTherapist");

// Initialize Passport
passportConfig.initializingPassport(passport);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/uploads/profile-image'); // Define the destination folder for uploaded files
//   },
//   filename: (req, file, cb) => {
//     // Use the originalname as the filename
//     cb(null, file.originalname);
//   },
// });

// Initialize multer with the storage configuration
// const upload = multer({ storage: storage });
//Middleware
const adminAuth = require('../middleware/authAdmin');
const userAuth = require('../middleware/authUser');
const upload = require("../middleware/multerMiddleware");

//Website Controller Import
const homeController = require('../controllers/website/homeController');
const aboutController = require('../controllers/website/aboutController');
const serviceController = require('../controllers/website/serviceController')
const therapistController = require('../controllers/website/therapistController')

//User Controller Import
const userDashboard = require('../controllers/user/dashboardController');
const userSession = require('../controllers/user/sessionDashboard');

//Therapy Controller Import
const therapyDashboard = require('../controllers/therapy/dashboardController');

//Admin Controller Import
var loginController = require('../controllers/admin/loginController');

var fakeController = require('../controllers/user/fakeController');

//======================Start Routes for website===============================//

router.get('/',homeController.index);

router.get('/get-start',homeController.getStart);
router.get('/for-business',homeController.forBusiness);

//about-us pages route
router.get('/the-method',aboutController.theMethod);
router.get('/who-we-are',aboutController.whoWeAre);
router.get('/reviews',aboutController.reviews);
router.get('/faq',aboutController.faq);
router.get('/blog',aboutController.blog);
router.get('/contact',aboutController.contact);



//service pages route
router.get('/individual-therapy',serviceController.individualTherapy)
router.get('/couples-therapy',serviceController.couplesTherapy)
router.get('/teens-therapy',serviceController.teensTherapy)
router.get('/other-areas',serviceController.otherAreas)
router.get('/depression',serviceController.depression)
router.get('/anxiety',serviceController.anxiety)
router.get('/bipolar-disorder',serviceController.bipolarDisorder)
router.get('/ocd',serviceController.ocd)
router.get('/post-traumatic-stress-disorder',serviceController.postTraumaticStressDisorder)
router.get('/post-partum-depression',serviceController.postPartumDepression)
router.get('/panic',serviceController.panic)
router.get('/addiction',serviceController.addiction)
router.get('/eating-disorders',serviceController.eatingDisorders)
router.get('/phobias',serviceController.phobias)
router.get('/lack-confidence',serviceController.lackConfidence)
router.get('/stress',serviceController.stress)
router.get('/loss-grief',serviceController.lossGrief)
router.get('/loss-identity',serviceController.lossIdentity)
router.get('/anger',serviceController.anger)
router.get('/betrayal',serviceController.betrayal)
router.get('/professional-challenges',serviceController.professionalChallenges)
router.get('/terms-condition',serviceController.termsCondition);
router.get('/privacy',serviceController.privacy);
router.get('/get-help-now',serviceController.getHelpNow);

//therapists Pages route
router.get('/our-therapists',therapistController.ourTherapists)
router.get('/work-with-us',therapistController.workWithUs)
router.get('/apply-now-therapists',therapistController.applyNowTherapists)
router.post('/register-therapists',therapistController.registerTherapists)
router.get('/therapists-question-Start',therapistController.therapistsQuestionStart)
router.post('/save-therapists-question-Start', therapistRegisterMiddleware, upload.fields([{
  name : "malpracticefiles",
  maxCount : 3
},
{
  name : "certificatefiles",
  maxCount : 3
}]), therapistController.saveTherapistsQuestionStart);
router.post("/update-therapist-status", therapistController.updateTherapistStatus);
router.get("/therapist/loginpage", therapistController.showLoginTherapistPage);
router.post("/therapist/login", therapistController.therapistLogin);


//======================End Routes for website===============================//


//======================Start User Routes===============================//
router.get('/login', homeController.login);
router.get('/user/dashboard',passportConfig.isAuthenticated, userDashboard.dashboard);

router.get('/user/profile',passportConfig.isAuthenticated,userDashboard.userProfile);
router.post('/user/sign-up', userDashboard.userSignUp);

router.post('/user/login', passport.authenticate('local'), (req, res,user) => {
  // Successful authentication
  res.json({ status: true, message: 'Login successful', url: '/user/dashboard' });
});

router.get('/user/logout', userDashboard.userSignOut);
router.post('/user/change-password',passportConfig.isAuthenticated, userDashboard.userChangePassword);

router.post('/user/update-profile',passportConfig.isAuthenticated, upload.single('image'), userDashboard.userProfileUpdate);

router.get('/user/session',passportConfig.isAuthenticated,userSession.sessions);
router.get('/user/session-details',passportConfig.isAuthenticated,userSession.sessionDetails);
router.get('/user/forget-password-page', userDashboard.showForgetPasswordPage);
router.post('/user/otp', userDashboard.userGenerateOTP);
router.post('/user/verify-and-change', userDashboard.userVerifyOTPAndChangePassword);



//======================End User Routes===============================//


//======================Start Therapy Routes===============================//

router.get('/therapy/dashboard',authTherapist, therapyDashboard.dashboard);
router.get("/therapy/logout", authTherapist, therapistController.therapistLogout);
router.get("/therapist/change-password-page", authTherapist, therapistController.showTherapistPasswordChangePage);
router.post("/therapist/password-change", authTherapist, therapistController.therapistPasswordChange);
router.get("/therapist/forget-password-page", therapistController.showTherapistForgetPasswordPage);
router.post("/therapist/otp", therapistController.generateAndSaveOTP);
router.post("/therapist/verify-and-change", therapistController.verifyOTPAndChangePassword);

//======================End Therapy Routes===============================//
router.get('/user/fake',fakeController.index);

//Admin Routes
router.get('/admin/login',adminAuth.isLogout,loginController.login);
router.post('/admin/login',loginController.authenticate);
router.get('/admin/dashboard',adminAuth.isLogin,loginController.dashboard);
router.get('/admin/logout',adminAuth.isLogin,loginController.logOut);
router.post('/admin/get-other-details',adminAuth.isLogin, loginController.generateOtherDetailsPDF);


module.exports = router;
