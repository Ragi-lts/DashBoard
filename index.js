const linebot = require("linebot");
const express = require("express");
const app = express();

var bot = linebot({
  channelId: CHANNEL_ID,
  channelSecret: CHANNEL_SECRET,
  channelAccessToken: CHANNEL_ACCESS_TOKEN,
});

const linebotParser = bot.parser();

app.post("/linewebhook", linebotParser);

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
