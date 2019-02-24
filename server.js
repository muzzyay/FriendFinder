
// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const friends = require("./app/data/friends");
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

apiRoutes(app, friends);
htmlRoutes(app);

// var totalDifference = 0;

// for (var i = 0; i < user1.length; i++) {

//     var num1 = user1[i];
//     var num2 = user2[i];

//     var singleDifference = Math.abs(num1 - num2);
//     console.log(singleDifference);
//     totalDifference = singleDifference + totalDifference
// }

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});