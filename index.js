//ENV LOADING
require("dotenv").config();

const linebot = require("linebot");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Zoom = require("./component/Zoom");

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
      console.log(Zoom.getConfig());
    })
    .catch(function (error) {
      console.log("Error", error);
    });
});

app.listen(process.env.PORT || 80, function () {
  console.log("LineBot is runnning.");
});
