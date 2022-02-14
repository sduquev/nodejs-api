const ENVIRONMENT = process.env.NODE_ENV || "development";
const config = require("../config/environments/" + ENVIRONMENT).config;
const apiBaseAdapter = require("../adapters/api-base-adapter");

const getUserByUserName = (userName) => {
  const headers = {
    "User-Agent": "api-example-nodejs",
  };
  return apiBaseAdapter
    .executeRequest(
      `${config.apiBaseUrlGitHub}users/${userName}`,
      "GET",
      null,
      headers
    )
    .then((response) => response)
    .catch((error) => error);
};

module.exports = {
  getUserByUserName,
};
