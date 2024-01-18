const { ValidationError } = require("joi");
const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let data = {
    error: err,
  };
  if (err instanceof ReferenceError) {
    data = {
      error: "internal error",
    };
  }

  if (err instanceof ValidationError) {
    statusCode = 422;
    data = {
      error: err.message,
    };
  }
  return res.send(data);
};

module.exports = errorHandler;
