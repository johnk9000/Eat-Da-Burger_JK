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
// if (process.env.JAWSDB_URL) {
  const connection = mysql.createConnection(process.env.JAWSDB_URL)
// } 
// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Welcome_1!",
//   database: "eat_da_burger_db"
// });

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL)
// } 

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// ROUTE TABLES ========================================================================================================================
app.get("/", function(req, res) {
  connection.query("SELECT * FROM menu WHERE eaten = 0;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    res.send(views.app(views.burgers( { burger: data })))
  });
});
// Add a burger
app.post("/api/burger", function(req, res) {
  const sanitizedHtml = escapeHTML(req.body.burger);
  let query = "INSERT INTO menu (burger) VALUES (?)"
  connection.query(query, [sanitizedHtml], function(err, result) {
    if (err) {
      return res.status(500).end();
    }
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
});
// Eat a burger
app.post("/api/burger/:id", function(req, res) {
  let query = "UPDATE menu SET eaten = 1 WHERE id = ?"
  connection.query(query, [req.params.id], function(err, result) {
    if (err) {
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});
// SERVER INIT =========================================================================================================================
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });