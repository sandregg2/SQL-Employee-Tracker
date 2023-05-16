const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "", //put SQL password here!
    database: "emptrack",
  },
  console.log("Connected to the Employee Tracking database.")
);

module.exports = db;
