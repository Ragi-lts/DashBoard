//ENV LOADING
require("dotenv").config();
const pg = require("pg");
const exports = require("webpack");

exports.pool = pg.Pool({
  host: process.env.ENV_HOST,
  database: process.env.ENV_DB,
  user: process.env.ENV_USER,
  port: 5432,
  password: process.env.ENV_PASSWORD,
});
