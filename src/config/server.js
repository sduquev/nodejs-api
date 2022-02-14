const ENVIRONMENT = process.env.NODE_ENV || "development";
const config = require("./environments/" + ENVIRONMENT).config;
const express = require("express");
const app = express();
const apiRoutes = require("./routes/api-routes");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", apiRoutes.initApiRoutes());
app.listen(config.port, () => console.log(`App Runing on port ${config.port}`));
