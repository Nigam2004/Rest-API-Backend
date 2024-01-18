const jwt = require("jsonwebtoken");

class jwtServices {
  static sign(payload, expiry = "120s", secret = process.env.JWT_SECRET) {
    return jwt.sign(payload, secret, { expiresIn: expiry });
  }
  //   static compare()
}

module.exports = jwtServices;
