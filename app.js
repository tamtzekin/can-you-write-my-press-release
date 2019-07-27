// Require express and create an express application instance
const express = require('express');
const app = express();

// Require the express routes defined in router.js
const routes = require('./router');

// Define the hostname and port where the server can be found
const hostname = "127.0.0.1";
const port = 8888;

// Define the directory where static files are found
app.use(express.static('public'));

// Specify the routes to be used for our application 
app.use(routes);

// Begin accepting connections to the specified port
app.listen(port, () => {
  // Display server location information to the console
  console.log(`Server is listening at http://${hostname}:${port}/`);

  // in sublime
var express = require(‘express’);
var port = process.env.PORT || 3000;var app = express();
app.get(‘/’, function (req, res) {
  res.send(JSON.stringify({ Hello: ‘World’}));
});
app.listen(port, function () {
  console.log(`Example app listening on port !`);

})

