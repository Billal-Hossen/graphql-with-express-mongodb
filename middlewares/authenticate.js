const jwt = require("jsonwebtoken")
const authenticate = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1] || "";
  try {
    const varified = jwt.verify(token, process.env.JWT_SECRECT_KEY);
    req.loggedInUser = varified.user;
    next()
  } catch (error) {
    console.log(error);
    next()
  }
}

module.exports = authenticate;