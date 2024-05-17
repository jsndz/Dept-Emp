const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverconfig");
const Apiroutes = require("./routes/index");
const db = require("./models/index");
const morgan = require("morgan");
const setupAndstartserver = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", Apiroutes);
  app.use(morgan("combined"));

  app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);
  });
};
setupAndstartserver();
