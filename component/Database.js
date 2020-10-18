//ENV LOADING
require("dotenv").config();
const pg = require("pg");

exports.pool = function () {
  const pool = new pg.Pool({
    url: process.env.DATABASE_URL,
  });
  pool.query("SELECT * FROM test_table").then((result) => {
    console.log("Success", result);
  });
};
