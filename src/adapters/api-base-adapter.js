const request = require("request");

const executeRequest = (url, method, body, headers) => {
  const options = {
    url,
    method,
    headers,
    body,
  };
  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      if (err) {
        console.log("Error sendig request => ", err);
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
};

module.exports = {
  executeRequest,
};
