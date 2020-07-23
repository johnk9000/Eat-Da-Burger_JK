const express = require("express");
const mysql = require("mysql");

const escapeHTML = require("escape-html");
const views = require("./views");

const app = express();

const PORT = process.env.PORT || 8080;

// EXPRESS SET UP ======================================================================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve all the static files in the public folder
app.use(express.static("public"));

// DB CONNECTION =======================================================================================================================
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "dbpassword",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// ROUTE TABLES ========================================================================================================================

// SERVER INIT =========================================================================================================================
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  