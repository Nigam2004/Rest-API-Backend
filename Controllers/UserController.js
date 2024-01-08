const user = require("../Models/User");
const joi = require("joi");
const bcrypt = require("bcrypt");

exports.userRegister = async (req, res, next) => {
  const registerSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp("(?=.*[a-z])")).required(),
    confirmPassword: joi.ref("password"),
  });
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return next(error);
  }

  const { email, password, confirmPassword } = req.body;

  const result = await user.findOne({ email });
  if (result) {
    return next("User already exist");
  }

  // hashes
  const hashedPassword = await bcrypt.hash(password, 10);
  const C_hashedPassword = await bcrypt.hash(confirmPassword, 10);
  newUser = new user({
    email,
    password: hashedPassword,
    confirmPassword: C_hashedPassword,
  });
  let newResult = await newUser.save();
  res.send({ success: true, data: newResult });
};
