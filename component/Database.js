//ENV LOADING
require("dotenv").config();
const pg = require("pg");

exports.pool = pg.Pool({
  url: process.env.DATABASE_URL,
});
