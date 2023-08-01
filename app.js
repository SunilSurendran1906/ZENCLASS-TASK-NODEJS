const express = require("express");
const APP_SERVER = express();

// REGISTER ALL THE CONTROLLERS

APP_SERVER.use("/Files", require("./controllers/Files.controller"));

module.exports = APP_SERVER;
