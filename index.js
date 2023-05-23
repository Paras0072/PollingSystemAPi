//initialize port
require('dotenv').config();
//import
const express = require("express");
const app = express();
const connectDB = require("./config/mongoose");
const hostName='127.0.0.1';
const port = 8000;


connectDB();

// JSON CONVERT REQUEST BODY TO JSON
app.use(express.urlencoded({ extended: true }));

// DEFINE ROUTES
app.use("/", require("./routes/index"));

//check for error
app.listen(port, function (err) {
  if (err) {
    console.log("Error in running server");
    return;
  }
  console.log("Server is up and running at port", port);
});
