const userService = require("../services/user-services");

const getUserGitHubByUserName = (req, res) => {
  const { userName } = req.params;
  return userService
    .getUserByUserName(userName)
    .then((response) => res.status(200).json(JSON.parse(response)))
    .catch((error) => res.status(421).json(error));
};

module.exports = {
  getUserGitHubByUserName,
};
