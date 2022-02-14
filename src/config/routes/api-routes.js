const express = require("express");
const apiValuesController = require("../../controllers/api-values-controller");
const userController = require("../../controllers/user-controller");

const initApiRoutes = () => {
  const routes = express.Router();

  routes.post("/values", apiValuesController.values);
  routes.get("/user/:userName", userController.getUserGitHubByUserName);

  return routes;
};

module.exports = {
  initApiRoutes,
};
