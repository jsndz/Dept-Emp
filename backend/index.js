const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT } = require("./config/serverConfig");
const Apiroutes = require("./router/index");
const morgan = require("morgan");
const setupAndstartserver = async () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", Apiroutes);
  app.use(morgan("combined"));

  app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);
  });
};
setupAndstartserver();
