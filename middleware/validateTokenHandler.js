const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is nor Authorized!");
      }
      req.user = decoded.user
      next();
    });
    if(!token){
        res.status(401);
        throw new Error("User is not authorized or token is missing!")
    }
  }
});

module.exports = validateToken;
