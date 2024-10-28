require("dotenv").config();
const TherapyModel = require('../../model/therapistsModel');
const TherapistsQuestionAnswer = require("../../model/therapistsQuestionAnswerModel");  
const nodemailer = require("nodemailer");
const sendEmail = require("../../utils/sendEmail");
const OTP = require("../../utils/OTP");


module.exports = {

    //Therapists page
    ourTherapists: async (req, res) => {
        res.render('website/our-therapists');
    },
    workWithUs: async (req, res) => {
        res.render('website/work-with-us');
    },
    applyNowTherapists: async (req, res) => {
        res.render('website/apply-now-therapists');
    },
    registerTherapists: async (req, res) => {

        console.log(req.body);
        let data = {};

        if (req.body.email) {
            const getTherapistsEmail = await TherapyModel.find({ email: req.body.email });
            if (getTherapistsEmail.length > 0) {
                return res.json({ status: false, type:'email', message: "Email already taken" });
            }
        }

        if (req.body.phone) {
            const getTherapistsPhone = await TherapyModel.find({ phone: req.body.phone });
            if (getTherapistsPhone.length > 0) {
                return res.json({ status: false, type:'phone', message: "Phone already taken" });
            }
        }

        const options = {httpOnly : true, secure : true};
       try{
         data = await TherapyModel.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            password : req.body.password,
            phone:req.body.phone,
            country_of_practice:req.body.country_of_practice,
            agree_checkbox:req.body.agree_checkbox,
         });

         
         if(!data) throw new Error("Therapists registererd Faild!");
         const accessToken = await data.generateAccessToken();
         const msg = {
            email : req.body.email,
            text : `Hello ${req.body.first_name} ${req.body.last_name},
                    Welcome to Healinhere, Your registration is successfull.`,
            from : "support@nonnegotiableliving.com",
            subject : "Registration successfull",
            html : `<p>Hello ${req.body.first_name} ${req.body.last_name}</p>
                    <p>Welcome to Healinhere, Your registration is successfull.</p>`
         };
         
         try {
            await sendEmail(msg);
         } catch (error) {
            console.log(`Email error : ${error}`);
         }

           return res.cookie("accessToken", accessToken).json({ status: true, message: 'Therapists registererd successfuly', data: data, url:'therapists-question-start'});
       }catch(error){
           return res.json({ status: false, message: "Somthing went wrong" });
       }
    },

    therapistsQuestionStart: async (req, res) => {
        res.render('website/therapists-question-start');
    },

    saveTherapistsQuestionStart: async (req, res) => {
       console.log("req.body = ", req.body);
       const {
        professional_insurance,
        professional_insurance_policy,
        address,
        ptan_number,
        medicaid_number,
        type_of_therapist,
        communicate_with_your_clients,
        descriptions_apply_to_you,
        healinhere_provider_platform,
        telehealth_platform,
        agree,
        licence_number,
        language,
        countryOfQualification } = req.body;

        let malpracticeFiles = req.files?.malpracticefiles ? req.files.malpracticefiles.map((fileObj) => {
            return `${fileObj.destination}/${fileObj.filename}`;
        }) : [];

        let certificateFiles = req.files?.certificatefiles ? req.files.certificatefiles.map((fileObj) => {
            return `${fileObj.destination}/${fileObj.filename}`;
        }) : [];

        console.log(malpracticeFiles);

        const therapistsQuestionAnswer = await TherapistsQuestionAnswer.create({ 
            user : req.therapist._id, 
            professional_insurance,
            professional_insurance_policy,
            address,
            ptan_number,
            medicaid_number,
            type_of_therapist,
            communicate_with_your_clients,
            descriptions_apply_to_you,
            healinhere_provider_platform,
            telehealth_platform,
            agree,
            licence_number,
            language,
            select_country_qualification : countryOfQualification,
            malpractice_files : malpracticeFiles,
            certificate_licence_number : certificateFiles

        });

            

            if(!therapistsQuestionAnswer) return res.json({error : "error"});

            return res.json(therapistsQuestionAnswer);
    },

    updateTherapistStatus : async (req, res) => {
        console.log(req.body);
        const { email, elementId } = req.body;

        if([email, elementId].some(field => field.trim() === "")) throw new Error("Insufficient data");

        const therapist = await TherapyModel.findOne({ email : email });

        if(!therapist) throw new Error("Wrong credentails");

        let savedTherapist = "";

        if(elementId === "approve-btn") {
            therapist.status = "true";
            savedTherapist = await therapist.save({validateBeforeSave : false});
        } else if(elementId === "disapprove-btn") {
            therapist.status = "false";
            savedTherapist = await therapist.save({validateBeforeSave : false});
        }

        console.log(savedTherapist);
        return res.status(200).json(savedTherapist);
    },

    showLoginTherapistPage : async (req, res) => {
        return res.render('website/therapist-login');
    },

    therapistLogin : async (req, res) => {
        console.log(req.body);
        const { email, password } = req.body;

        if([email, password].some(field => field.trim() === "")) res.status(401).json({status : "error", message : "invalid credentials"});

        const therapist = await TherapyModel.findOne({email : email});
        console.log(therapist);

        if(therapist === null) return res.status(401).json({status : "Error", message : "User not found"});

        const isPasswordCorrect = await therapist.comparePassword(password);
        console.log(isPasswordCorrect);

        if(!isPasswordCorrect) return res.status(401).json({status : "error", message : "Incorrect password"});

        const accessToken = await therapist.generateAccessToken();

        const loggedInTherapist = await TherapyModel.findById(therapist._id).select("-password");

        const loginTime = new Date();
        loginTime.setHours(loginTime.getHours(), loginTime.getMinutes(), loginTime.getSeconds(), loginTime.getMilliseconds());

        if(!loggedInTherapist) return res.status(401).json({status : "error", message : "Invalid credentials"});

        loggedInTherapist.loginTime = loginTime.toString();
        loggedInTherapist.save({validateBeforeSave : false});

        return res.cookie("loginToken", accessToken).redirect("/therapy/dashboard");
    },

    therapistLogout : async (req, res) => {
        console.log(req.loggedinTherapist);

        const loggedInTherapist = await TherapyModel.findById(req.loggedinTherapist._id);
        const logoutTime = new Date();

        loggedInTherapist.logoutTime = logoutTime;
        loggedInTherapist.hours_spent = String(Number(loggedInTherapist.hours_spent) + (logoutTime - new Date(loggedInTherapist.loginTime)) / (1000 * 60 * 60));
        await loggedInTherapist.save({validateBeforeSave : false});

        return res.status(200).clearCookie("loginToken").redirect("/");
    },

    showTherapistPasswordChangePage : async (req, res) => {
        return res.render("website/therapist-password-change");
    },

    therapistPasswordChange : async (req, res) => {
        console.log(req.therapist);
        const { email, oldPassword, newPassword } = req.body;

        const therapistData = await TherapyModel.findOne({email : email});

        if(!therapistData) return res.status(401).json({status : "Failed", message : "Therapist does not exist"});

        const isPasswordCorrect = await therapistData.comparePassword(oldPassword);
        console.log(isPasswordCorrect);

        if(!isPasswordCorrect) return res.status(401).json({status : "fail", data : {}, message : "Please provide correct old password."});

        therapistData.password = newPassword;
        const updatedTherapist = await therapistData.save({validateBeforeSave : false});

        if(!updatedTherapist) return res.status(500).json({status : "Failed", message : "Something went wrong while changing password."});

        return res.status(200).json({status : "success", data : {}, message : "Password changed successfully"});
    },

    showTherapistForgetPasswordPage : async (req, res) => {
        return res.render('website/therapist-forget-password-page');
    },

    generateAndSaveOTP : async (req, res) => {
        const { email } = req.body;
        if(!email) return res.status(401).json({status : "Fail", message : "Email is required"});
        console.log(email);
        try {
            const therapist = await TherapyModel.findOne({email : email});
            const otpGen = new OTP();
            const otp = await otpGen.otpOperation(therapist._id, TherapyModel);
            const msg = {
                email : email,
                text : `Hello ${therapist.first_name} ${therapist.last_name}\nYour otp for pasword change request is ${otp}\notp will be valid for 10 minutes\nDon't share your otp with anyone.`,
                from : "support@nonnegotiableliving.com",
                subject : "New OTP for password change",
                html : `<p>Hello ${therapist.first_name} ${therapist.last_name}</p><p>Your otp for pasword change request is :</p><h1>${otp}</h1><p>otp will be valid for 10 minutes</p><h4>Don't share your otp with anyone.</h4>`
             };
            await sendEmail(msg);
            return res.status(200).json({status : "success", data : therapist, message : "otp generated successfully"});
        } catch (error) {
            return res.status(500).json({status : "fail", data : {}, message : "Something went wrong while generating otp."});
        }
    },

    verifyOTPAndChangePassword : async (req, res) => {
        console.log(req.body);
        const { email2, otp, password } = req.body;

        if([email2, otp, password].some(field => field.trim() === "")) return res.status(401).json({status : "fail", data : {}, message : "Invalid credentials"});

        const therapist = await TherapyModel.findOne({email : email2});

        if(!therapist) return res.status(401).json({status : "fail", data : {}, message : "User does not exists"});

        if(therapist.otp !== otp) return res.json({status : "fail", data : {}, message : "Invalid OTP"});
        
        therapist.password = password;
        const updatedTherapist = await therapist.save({validateBeforeSave : false});

        console.log(updatedTherapist);
        
        return res.status(200).json({status : "success", data : "Ok", message : "Password changed successfully"});
    }

} 






{/* <button type="button" class="approval-buttons btn btn-success" id="approve-btn" value="<%= ele.email %>">Approve</button>
                          <button type="button" class="approval-buttons btn btn-danger" id="disapprove-btn" value="<%= ele.email %>">Deny</button> */}
