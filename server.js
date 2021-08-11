const express = require("express");
const dotenv = require("dotenv");
const bootcamps = require("./routes/bootcamps");
//const logger = require("./middlewares/logger");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middlewares/error");

dotenv.config({ path: "./config/config.env" });
require("./config/db");
//connectDB();
const app = express();

//body parser
app.use(express.json());

// app.use(logger);
//DEV logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`running on ${PORT}`.yellow.bold));

//handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`.red);
  //close server and exit
  server.close(() => {
    process.exit(1);
  });
});
