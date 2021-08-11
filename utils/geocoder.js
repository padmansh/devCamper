const NodeGeocoder = require("node-geocoder");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  apiKey: process.env.GEOCODER_API_KEY,
  httpAdapter: "https",
  formatter: null,
};
console.log(process.env.GEOCODER_API_KEY, "kiska h");

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
