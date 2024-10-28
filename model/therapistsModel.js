const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Timestamp } = require("mongodb");

const TherapistsSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: false
  },
  last_name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
    unique : true
  },
  phone: {
    type: String,
    required: false,
    unique : true
  },
  password: {
    type: String,
    required: false
  },
  country_of_practice: {
    type: String,
    required: false
  },
  agree: {
    type: String,
    required: false
  },
  status : {
    type : String,
    required : false,
    trim : true,
    lowercase : true,
    default : "null"
  },
  hours_spent : {
    type : String,
    required : false,
    default : "0"
  },
  no_of_clients : {
    type : Number,
    required : false,
    default : 0
  },
  loginTime : {
    type : Date,
    default : Date.now(),
    required : false
  },
  logoutTime : {
    type : Date,
    default : Date.now(),
    required : false
  },
  createdAt: {
    type: Number,
    default: Date.now(), 
  },
  otp : {
    type : String,
    required : false,
    trim : true
  }
});

TherapistsSchema.pre("save", async function (next) {
  if(!this.isModified("password")) next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

TherapistsSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

TherapistsSchema.methods.generateAccessToken = async function () {
  return await jwt.sign({
    _id : this._id,
    first_name : this.first_name,
    last_name : this.last_name,
    email : this.email,
    phone : this.phone
  },
  process.env.THERAPIST_ACCESS_TOKEN_SECRET,
  {expiresIn : process.env.THERAPIST_ACCESS_TOKEN_EXPIRY});
};


const Therapists = mongoose.model("Therapists", TherapistsSchema);
module.exports = Therapists;