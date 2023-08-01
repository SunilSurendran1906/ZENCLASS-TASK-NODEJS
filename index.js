const express = require("express");
const HTTP_SERVER = express();

//  BASIC  SERVER CONFIGRATION
const port = 3001;

HTTP_SERVER.listen(port, "localhost", () => {
  console.log("server is start", port);
});

HTTP_SERVER.use("/", require("./app"));
