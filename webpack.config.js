"use strict ";

const webpack = require("webpack");

module.exports = {
  devServer: {
    proxy: {
      "/api/*": {
        target: "https://api.zoom.us/v2/",
      },
    },
  },
};
