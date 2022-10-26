const jwt = require("jsonwebtoken");

const createJwtToken = (user) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRECT_KEY, { expiresIn: process.env.JWT_EXPIRES_IN })

  return token;
}

module.exports = createJwtToken;