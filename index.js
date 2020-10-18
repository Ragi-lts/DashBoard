require("dotenv").config();

const linebot = require("linebot");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const rp = require("request-promise");

var bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
});

const parser = bodyParser.json({
  verify: function (req, res, buf, encoding) {
    req.rawBody = buf.toString(encoding);
  },
});

app.use(bodyParser.json());

app.post("/linewebhook", parser, function (req, res) {
  if (!bot.verify(req.rawBody, req.get("X-Line-Signature"))) {
    return res.sendStatus(400);
  }
  bot.parse(req.body);
  return res.json({});
});

bot.on("message", function (event) {
  event
    .reply(event.message.text)
    .then(function (data) {
      console.log("Success", data);
    })
    .catch(function (err) {
      console.log("Error", error);
    });
});

app.listen(process.env.PORT || 80, function () {
  console.log("LineBot is runnning.");
});

var request = require("request");
const config = {
  APIKey: process.env.Zoom_APIKey,
  APISecret: process.env.Zoom_APISecret,
};

const payload = {
  iss: config.APIKey,
  exp: new Date().getTime() + 5000,
};

const token = jwt.sign(payload, config.APISecret);

var options = {
  uri: "https://api.zoom.us/v2/users/" + process.env.ZoomId,
  qs: {
    status: "active",
  },
  auth: {
    bearer: token,
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
