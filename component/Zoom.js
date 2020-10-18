const jwt = require("jsonwebtoken");
const rp = require("request-promise");

const config = {
  APIKey: process.env.Zoom_APIKey,
  APISecret: process.env.Zoom_APISecret,
};

function getToken() {
  let payload = {
    iss: config.APIKey,
    exp: new Date().getTime() + 5000,
  };
  let token = jwt.sign(payload, config.APISecret);
  return token;
}

function getConfig() {
  var options = {
    uri: "https://api.zoom.us/v2/users/" + process.env.ZoomId,
    qs: {
      status: "active",
    },
    auth: {
      bearer: getToken(),
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json",
    },
    json: true, //Parse the JSON string in the response
  };

  rp(options)
    .then(function (response) {
      //logic for your response
      console.log("User has", response);
    })
    .catch(function (err) {
      // API call failed...
      console.log("API call failed, reason ", err);
    });
  return JSON.stringify(response);
}
