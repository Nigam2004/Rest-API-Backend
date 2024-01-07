const { ValidationError } = require("joi");
const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let data = {
    errorMessage: "Internal Server Error",
    originalError: err,
  };
  if (err instanceof ValidationError) {
    statusCode = 422;
    data = {
      errorMessage: err.message,
    };
  }
  return res.send(data);
};

module.exports = errorHandler;
