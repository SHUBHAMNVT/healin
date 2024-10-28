const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:false,
    trim : true,
    lowwercase : true
  },
  email:{
    type:String,
    required:false,
    unique : true,
    trim : true
  },
  phone : {
    type : String,
    required : false,
    unique : true,
    trim : true
  },
  address:{
    type:String,
    required:false,
  },
  password:{
    type:String,
    required:false,
  },
  otp : {
    type : String,
    required : false,
    trim : true
  },
  looking_for: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  relationship_status: {
    type: String,
    required: false
  },
  therapy_before: {
    type: String,
    required: false
  },
  therapy_today: {
    type: String,
    required: false
  },
  therapist_looking_for: {
    type: String,
    required: false
  },
  expectations_therapist: {
    type: String,
    required: false
  },
  physical_health: {
    type: String,
    required: false
  },
  eating_habits: {
    type: String,
    required: false
  },
  feelings_of_anxiety: {
    type: String,
    required: false
  },
  little_interest: {
    type: String,
    required: false
  },
  hyper_and_restless: {
    type: String,
    required: false
  },
  depressed_and_hopeless: {
    type: String,
    required: false
  },
  sleeping_too_much: {
    type: String,
    required: false
  },
  very_little_energy: {
    type: String,
    required: false
  },
  eating_too_much: {
    type: String,
    required: false
  },
  letting_people_down: {
    type: String,
    required: false
  },
  even_watching_television: {
    type: String,
    required: false
  },
  better_off_dead: {
    type: String,
    required: false
  },
  daily_life_at_work: {
    type: String,
    required: false
  },
  currently_employed: {
    type: String,
    required: false
  },
  you_drink_alcohol: {
    type: String,
    required: false
  },
  harming_yourself: {
    type: String,
    required: false
  },
  phobias: {
    type: String,
    required: false
  },
  medications: {
    type: String,
    required: false
  },
  chronic_pain: {
    type: String,
    required: false
  },
  financial_status: {
    type: String,
    required: false
  },
  sleeping_habits: {
    type: String,
    required: false
  },
  current_support_system: {
    type: String,
    required: false
  },
  useful_for_you: {
    type: String,
    required: false
  },
  your_therapist: [{
    type: String,
    required: false
  }],
  therapist_coach: [{
    type: String,
    required: false
  }],
  referred_healinhere: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  language: {
    type: String,
    required: false
  },
  mark_apply: {
    type: String,
    required: false
  },
  past_therapist : {
    type : mongoose.Schema.ObjectId,
    ref : "Therapists",
    required : false
  },
  current_therapist : {
    type : mongoose.Schema.ObjectId,
    ref : "Therapists",
    required : false
  },
  hours_spent : {
    type : Number,
    required : false,
    default : 0
  },
  amount_spent : {
    type : Number,
    required : false,
    default : 0
  },
  terms_conditions:{
    type: String,
    required: false
  },
  agree:{
    type: String,
    required: false
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
    default: Date.now, 
  }
})

userSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;