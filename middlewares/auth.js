require("dotenv").config();
const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const { authorization } = req.headers;
  //console.log(authorization);

  if (!authorization) {
    return res.status(401).json({ message: "token not authorized" });
  } else {
    const token = authorization.replace("Bearer ", "");

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
      if (err) {
        return res.status(401).json({ message: err.message });
      } else {
        return next();
      }
    });
  }
};

module.exports = { isAuth };
