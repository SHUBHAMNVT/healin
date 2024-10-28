const jwt = require("jsonwebtoken");

const therapistRegisterMiddleware = async (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies?.accessToken;

  if(!token) throw new Error("Therapist registration failed");
  const decodedToken = jwt.verify(token, process.env.THERAPIST_ACCESS_TOKEN_SECRET);
  console.log(decodedToken);
  req.therapist = decodedToken;
  next();
}

module.exports = therapistRegisterMiddleware;