const errorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  console.log(err);

  let error = { ...err, message: err.message };

  // bad object error
  if (err.name === "CastError") {
    const msg = "bootcamp not found";
    error = new errorResponse(msg, 404);
  }

  //duplication error
  if (err.code === 11000) {
    const msg = "Already exists";
    error = new errorResponse(msg, 400);
  }

  // validation errors
  if (err.name === "ValidationError") {
    const msg = "All field are not send";
    error = new errorResponse(msg, 400);
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, msg: error.message || "server error" });
};

module.exports = errorHandler;
