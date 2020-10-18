//ENV LOADING
require("dotenv").config();

const linebot = require("linebot");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Zoom = require("./component/Zoom");
const db = require("./component/Database");
const inform = require("./component/Inform");

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
      console.log("Success", event.source.userId, event.message.text);
    })
    .catch(function (error) {
      console.log("Error", error);
    });
  bot.getUserProfile(event.source.userId).then((profile) => {
    console.log(profile.displayName);
    let data = inform.FinishResister(
      profile.displayName,
      "TEST",
      "11/21",
      "19:00",
      new Date().toString
    );
    bot
      .reply(data)
      .then(function () {
        console.log("Success");
      })
      .catch(function (err) {
        console.log("Err:", err);
      });
  });
});

app.listen(process.env.PORT || 80, function () {
  console.log("LineBot is runnning.");
});
