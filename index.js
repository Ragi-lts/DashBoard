"use strict";
//ENV LOADING
const line = require("@line/bot-sdk");
const express = require("express");
const app = express();
const Zoom = require("./component/Zoom");
const db = require("./component/Database");
const inform = require("./component/Inform");

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};
const client = new line.Client(config);

app.post("/linewebhook", line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

function handleEvent(event) {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }

  return client.replyMessage(
    event.replyToken,
    inform.FinishResister("all", "descript", "startd", "startt")
  );
}

app.listen(process.env.PORT || 80, function () {
  console.log("LineBot is runnning.");
});
