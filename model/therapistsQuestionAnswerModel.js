const mongoose = require("mongoose")

const TherapistsQuestionAnswerSchema = new mongoose.Schema({
  user: {
        type: mongoose.Schema.ObjectId,
        ref: "Therapists",
        required: false
  },
  professional_insurance: {
    type: String,
    required: false
  },
  professional_insurance_policy: {
    type: String,
    required: false
  },
  malpractice_files: [{
    type: String,
    required: false
  }],
  address: {
    type: String,
    required: false
  },
  ptan_number: {
    type: String,
    required: false
  },
  medicaid_number: {
    type: String,
    required: false
  },
  type_of_therapist: [{
    type: String,
    required: false
  }],
  communicate_with_your_clients: [{
    type: String,
    required: false
  }],
  descriptions_apply_to_you: [{
    type: String,
    required: false
  }],
  language: {
    type: String,
    required: false
  },
  healinhere_provider_platform: {
    type: String,
    required: false
  },
  telehealth_platform: {
    type: String,
    required: false
  },
  agree:{
    type: String,
    required: false
  },
  licence_number:{
    type: String,
    required: false
  },
  select_country_qualification:{
    type: String,
    required: false
  },
  certificate_licence_number:[{
    type: String,
    required: false
  }],
  other_details_file_path : {
    type : String,
    required : false
  },
  createdAt: {
    type: Number,
    default: Date.now, 
  }
})

const TherapistsQuestionQuestionAnswer = mongoose.model("TherapistsQuestionAnswer", TherapistsQuestionAnswerSchema)
module.exports = TherapistsQuestionQuestionAnswer;