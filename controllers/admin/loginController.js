// const {Sequelize} = require('sequelize');
 const bcrypt = require('bcrypt');
 const Admin = require("../../model/adminModel")
 const TherapyModel = require("../../model/therapistsModel");
 const TherapistsQuestionAnswer = require("../../model/therapistsQuestionAnswerModel");
 const User = require("../../model/userModel");
 const fs = require("fs");
 const pdfParse = require("pdf-parse");
 const { PDFDocument, rgb } = require("pdf-lib");
const path = require('path');

module.exports = {
    login:async(req, res)=>{
        res.render("admin/login");
    },
    authenticate:async(req, res)=>{
       const email = req.body.email;
       const password = req.body.password;
       try{
           let results = await Admin.findOne({email:email});
           if(!results) throw new Error("Admin Not Found");
           var checkuserPassword = await bcrypt.compare(password,results.password);
           if(!checkuserPassword) throw new Error("Invalid Credentials");
            req.session.user_id = results.id;
            console.log("Admin Id Store "+req.session.user_id)
           return res.json({status:true, message:"Logged In", url:'dashboard'});
       }catch(error){
           return res.json({status:false, message:"Invalid Credentials"});
       }
    },

    dashboard: async (req, res)=>{
        const therapistList = await TherapyModel.find({});
        const therapistQuestionAnswersList = await TherapistsQuestionAnswer.find({});
        const user = await User.find({});
        console.log("User = ", user);
        const data = therapistList.map((ele) => {

            const qData = therapistQuestionAnswersList.find(obj => { 
               return obj.user.equals(ele._id);
            });

            let joiningDate = new Date(ele.createdAt).toLocaleDateString();

            isQDataExists = qData ? true : false;

            let therapist = {};

            if(!qData?._doc) {
                therapist = {
                    first_name : ele.first_name,
                    last_name : ele.last_name,
                    email : ele.email,
                    phone : ele.phone,
                    status : ele.status,
                    joiningDate : joiningDate,
                    hours_spent : ele.hours_spent,
                    isQDataExists : isQDataExists
                };
            } else {
                therapist = {
                    first_name : ele.first_name,
                    last_name : ele.last_name,
                    email : ele.email,
                    phone : ele.phone,
                    status : ele.status,
                    joiningDate : joiningDate,
                    hours_spent : ele.hours_spent,
                    isQDataExists : isQDataExists,
                    ...qData._doc
                };
            }
            
            return therapist;
        });


        if(!therapistList && !therapistQuestionAnswersList) throw new Error("Something went wrong while fetching data.");

        res.render('admin/dashboard', {data : data, user : user});
    },

    logOut:async(req,res)=>{
        console.log("User Id distroy "+req.session.user_id);
       req.session.destroy();
       res.render('admin/login');
    },

    generateOtherDetailsPDF : async (req, res) => {
        console.log(req.body);
        if(!req.body.email) return res.json({status : "error", message : "Insufficient data"});

        const therapist = await TherapyModel.findOne({ email : req.body.email });

        if(!therapist) return res.status(401).json({status : "error", message : "Therapist does not exist"});

        const therapistData = await TherapistsQuestionAnswer.findOne({user : therapist._id});

        if(!therapistData) return res.status(401).json({status : "error", message : "Cannot found Therapist details"});

        console.log(therapist);
        console.log(therapistData);

        await fs.readFile("public/templatePDF/template.pdf", async (err, data) => {
            console.log(data);
            const templatePdfData = await pdfParse(data);
            let templatePdfText = templatePdfData.text
            .replace("{name}", (therapist.first_name + " " + therapist.last_name))
            .replace("{professional_insurance}", therapistData.professional_insurance)
            .replace("{professional_insurance_policy}", therapistData.professional_insurance_policy)
            .replace("{address}", therapistData.address)
            .replace("{ptan_number}", therapistData.ptan_number)
            .replace("{medicaid_number}", therapistData.medicaid_number)
            .replace("{type_of_therapist}", therapistData.type_of_therapist)
            .replace("{communicate_with_your_clients}", therapistData.communicate_with_your_clients)
            .replace("{descriptions_apply_to_you}", therapistData.descriptions_apply_to_you)
            .replace("{language}", therapistData.language)
            .replace("{healinhere_provider_platform}", therapistData.healinhere_provider_platform)
            .replace("{telehealth_platform}", therapistData.telehealth_platform)
            .replace("{agree}", therapistData.agree)
            .replace("{license_number}", therapistData.license_number)
            .replace("{select_country_qualification}", therapistData.select_country_qualification);

            console.log(templatePdfText);

            const pdfDoc = await PDFDocument.create();
            const page = pdfDoc.addPage([1200, 1000]);

            page.drawText(templatePdfText, {x : 50, y : 980, size : 15, color : rgb(0,0,0)});

            const pdfBytes = await pdfDoc.save();
            await fs.writeFileSync(`${require.main.filename.replace("\\app.js", "")}/public/therapist/other-details/${therapist.first_name}_${therapist.last_name}_${therapist._id}.pdf`, pdfBytes);
            console.log(typeof pdfBytes);
            
            therapistData.other_details_file_path = `/therapist/other-details/${therapist.first_name}_${therapist.last_name}_${therapist._id}.pdf`;
            const savedTherapistData = await therapistData.save({validateBeforeSave : false});
            console.log("Saved Therapist Data  = ", savedTherapistData);

            return res.status(200).json({status : "success", message : "File saved successfully", url :`/therapist/other-details/${therapist.first_name}_${therapist.last_name}_${therapist._id}.pdf`}); 
        });
    }

   



}