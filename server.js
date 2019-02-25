
// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const friends = require("./app/data/friends");
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");
const http = require("http");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

apiRoutes(app, friends);
htmlRoutes(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

setInterval(function() {
    http.get("http://frozen-gorge-25057.herokuapp.com");
}, 1800000);