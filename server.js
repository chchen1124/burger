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

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});