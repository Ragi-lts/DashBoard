//ENV LOADING
require("dotenv").config();
exports.pool = function () {
  const pg = require("pg");
  const pool = pg.Pool({
    url: process.env.DATABASE_URL,
  });
  pool.query("SELECT * FROM test_table").then((result) => {
    console.log("Success", result);
  });
};
