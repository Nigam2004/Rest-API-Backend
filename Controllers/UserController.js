const user = require("../Models/User");
const joi = require("joi");
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
  const register = await user.insertMany({ email, password, confirmPassword });
  res.send({ success: true, data: register });
};
