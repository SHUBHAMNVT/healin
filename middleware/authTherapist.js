const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const TherapyModel = require("../model/therapistsModel");

const authTherapist = async (req, res, next) => {
  const loginToken = req.cookies.loginToken;

  if(!loginToken) return res.status(401).json({status : "error", message : "Unauthorized request"});

  const decodedLoginToken = await jwt.verify(loginToken, process.env.THERAPIST_ACCESS_TOKEN_SECRET);

  if(!decodedLoginToken) return res.status(401).json({status : "Error", message : "Invalid token login again"});

  const therapist = await TherapyModel.findById(decodedLoginToken._id).select("-password");

  req.loggedinTherapist = therapist;

  next();
};

module.exports = authTherapist;