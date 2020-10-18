//ENV LOADING
require("dotenv").config();

const { Client } = require("pg");
const exports = require("webpack");
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

exports.getAllRec = function (table) {
  client.connect();
  client.query(`SELECT * FROM ${table};`, (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });
};

exports.Resister = function (table, name, clientId) {
  client.connect();
  client.query(
    `INSERT INTO ${table} (name, clientid) VALUES (${name}, ${clientId});`,
    (err, res) => {
      if (err) throw err;
      client.end();
    }
  );
};
