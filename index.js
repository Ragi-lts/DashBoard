//ENV LOADING
require("dotenv").config();

const {LineClient} = require('messaging-api-line')
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Zoom = require("./component/Zoom");
const db = require("./component/Database");
const inform = require("./component/Inform");

const client = new LineClient({
  accessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
});

//channelId: process.env.CHANNEL_ID,

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
    let data = inform.FinishResister(
      profile.displayName,
      "TEST",
      "11/21",
      "19:00",
      new Date().toString
    );
    event.reply(data);
  });
});

app.listen(process.env.PORT || 80, function () {
  console.log("LineBot is runnning.");
});
