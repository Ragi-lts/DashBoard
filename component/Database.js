//ENV LOADING
require("dotenv").config();
const pg = require("pg");

exports.pool = pg.Pool({
  host: process.env.ENV_HOST,
  database: process.env.ENV_DB,
  user: process.env.ENV_USER,
  port: 5432,
  password: process.env.ENV_PASSWORD,
});
