var express=require("express");
var mysql=require("mysql");
var bodyParser=require("body-parser");
var methodOverride=require("method-override");

var routes = require("./controllers/burgers_controller.js");

var app = express();
var port = 3000;



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/", routes);
/*var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Poptarttreat11@",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Serve index.handlebars to the root route.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      throw err;
    }
    res.render("index", { burgers: data });
  });
});

app.post("/", function(req, res) {
  connection.query("INSERT INTO burgers (burger_name, the_date) VALUES (?, ?)", [
    req.body.burger_name, req.body.the_date
  ], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
});

// Update a quote by an id and then redirect to the root route.
app.put("/:id", function(req, res) {
  connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [
    req.body.devoured, req.params.id
  ], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
});*/

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
