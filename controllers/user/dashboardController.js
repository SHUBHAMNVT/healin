const bcrypt = require("bcrypt");
const User = require("../../model/userModel");
const sendEmail = require("../../utils/sendEmail");
const OTP = require("../../utils/OTP");

module.exports = {
  dashboard: async (req, res) => {
    const loginTime = new Date();
    loginTime.setHours(
      loginTime.getHours(),
      loginTime.getMinutes(),
      loginTime.getSeconds(),
      loginTime.getMilliseconds()
    );

    await User.findByIdAndUpdate(
      req.user._id,
      { loginTime: loginTime },
      { new: true }
    );
    res.render("user/dashboard", { user: req.user });
  },
  userProfile: async (req, res) => {
    console.log(req.user);
    res.render("user/profile", { user: req.user });
  },
  userProfileUpdate: async (req, res) => {
    const user_id = req.user._id;
    const zipcode = req.body.zipcode;
    const address = req.body.address;
    const name = req.body.name;
    const email = req.body.email;

    let image;
    if (req.file) {
      image = req.file.originalname;
    } else {
      try {
        const getUserData = await User.findOne({ _id: user_id });
        if (!getUserData) throw new Error("User not found");
        image = getUserData.image;
      } catch (error) {
        console.error(error);
        return res.json({ status: false, message: "Something went wrong" });
      }
    }

    try {
      let data = await User.findByIdAndUpdate(
        user_id,
        {
          file: image,
          zipcode: zipcode,
          address: address,
          name: name,
          email: email,
        },
        { new: true }
      );
      if (!data) throw new Error("User profile failed");
      return res.json({
        status: true,
        message: "User profile updated successfuly",
        data: data,
      });
    } catch (error) {
      return res.json({ status: false, message: "Somthing went wrong" });
    }
  },

  userSignUp: async (req, res) => {
    console.log(req.body);
    try {
      const data = await User.create({
        name: req.body.name_hide,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        password: req.body.password,
        looking_for: req.body.looking_for_hide,
        gender: req.body.gender_hide,
        age: req.body.age_hide,
        relationship_status: req.body.relationship_status_hide,
        therapy_before: req.body.therapy_before_hide,
        therapy_today: req.body.therapy_today_hide,
        therapist_looking_for: req.body.therapist_looking_for_hide,
        expectations_therapist: req.body.expectations_therapist_hide,
        physical_health: req.body.physical_health_hide,
        eating_habits: req.body.eating_habits_hide,
        feelings_of_anxiety: req.body.feelings_of_anxiety_hide,
        little_interest: req.body.little_interest_hide,
        hyper_and_restless: req.body.hyper_and_restless_hide,
        depressed_and_hopeless: req.body.depressed_and_hopeless_hide,
        sleeping_too_much: req.body.sleeping_too_much_hide,
        very_little_energy: req.body.very_little_energy_hide,
        eating_too_much: req.body.eating_too_much_hide,
        letting_people_down: req.body.letting_people_down_hide,
        even_watching_television: req.body.even_watching_television_hide,
        better_off_dead: req.body.better_off_dead_hide,
        daily_life_at_work: req.body.daily_life_at_work_hide,
        currently_employed: req.body.currently_employed_hide,
        you_drink_alcohol: req.body.you_drink_alcohol_hide,
        harming_yourself: req.body.harming_yourself_hide,
        phobias: req.body.phobias_hide,
        medications: req.body.medications_hide,
        chronic_pain: req.body.chronic_pain_hide,
        financial_status: req.body.financial_status_hide,
        sleeping_habits: req.body.sleeping_habits_hide,
        current_support_system: req.body.current_support_system_hide,
        useful_for_you: req.body.useful_for_you_hide,
        your_therapist: req.body.your_therapist_hide,
        therapist_coach: req.body.therapist_coach_hide,
        referred_healinhere: req.body.referred_healinhere_hide,
        country: req.body.country_hide,
        language: req.body.language_hide,
        mark_apply: req.body.mark_apply_hide,
        terms_conditions: req.body.terms_conditions,
        agree: req.body.agree,
      });
      if (!data) throw new Error("User sign-up failed");

      const msg = {
        email: req.body.email,
        text: `Hello ${req.body.name_hide},
                        Welcome to Healinhere, Your registration is successfull.`,
        from: "support@nonnegotiableliving.com",
        subject: "Registration successfull",
        html: `<p>Hello ${req.body.name_hide}</p>
                        <p>Welcome to Healinhere, Your registration is successfull.</p>`,
      };

      try {
        await sendEmail(msg);
      } catch (error) {
        console.log(`Email Error : ${error}`);
      }

      return res.json({
        status: true,
        message: "User sign-up successfull",
        data: data,
      });
    } catch (error) {
      console.log(error);
      return res.json({ status: false, message: "Somthing went wrong" });
    }
  },

  userChangePassword: async (req, res) => {
    const user_id = req.user._id;
    const password = req.body.password;

    //Hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(user_id, password, hash);
    try {
      let data = await User.findByIdAndUpdate(
        user_id,
        { password: hash },
        { new: true }
      );

      if (!data) throw new Error("User password change failed");
      return res.json({
        status: true,
        message: "User password updated successfuly",
      });
    } catch (error) {
      return res.json({ status: false, message: "Somthing went wrong" });
    }
  },

  userSignOut: async (req, res) => {
    const logoutTime = new Date();
    const hoursSpent =
      req.user.hours_spent +
      (logoutTime - new Date(req.user.loginTime)) / (1000 * 60 * 60);
    console.log(req.user);

    await User.findByIdAndUpdate(req.user._id, {
      logoutTime: logoutTime,
      hours_spent: hoursSpent,
    });
    req.session.destroy();
    res.redirect("/");
  },

  showForgetPasswordPage: async (req, res) => {
    return res.render("website/user-forget-password-page");
  },

  userGenerateOTP: async (req, res) => {
    console.log(req.body);
    const { email } = req.body;

    if (!email)
      return res
        .status(401)
        .json({ status: "fail", data: {}, message: "Pleaase provide email" });

    try {
      const user = await User.findOne({ email: email });

      if (!user)
        return res
          .status(401)
          .json({ status: "fail", data: {}, message: "User does not exist." });

      const otpGen = new OTP();
      const otp = await otpGen.otpOperation(user._id, User);
      const msg = {
        email : email,
        text : `Hello ${user.name_hide}\nYour otp for pasword change request is ${otp}\notp will be valid for 10 minutes\nDon't share your otp with anyone.`,
        from : "support@nonnegotiableliving.com",
        subject : "New OTP for password change",
        html : `<p>Hello ${therapist.name_hide}</p><p>Your otp for pasword change request is :</p><h1>${otp}</h1><p>otp will be valid for 10 minutes</p><h4>Don't share your otp with anyone.</h4>`
     };
    await sendEmail(msg);
    return res.status(200).json({status : "success", data : user, message : "otp generated successfully"});
    } catch (error) {
        return res.status(500).json({status : "fail", data : {}, message : "Something went wrong"});
    }
  },

  userVerifyOTPAndChangePassword: async (req, res) => {
    console.log(req.body);
  },
};
