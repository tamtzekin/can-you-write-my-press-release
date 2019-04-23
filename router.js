// Require the necessary modules
const loremIpsum = require("./generator.js");
const querystring = require ("querystring");
const fs = require("fs");

// Require Express.js and create an express router object
const express = require('express');
const router = express.Router();

// Route route that sends the contents of index.html to the client
router.get('/', (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  // Capture contents of index.html in a variable
  let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
  // Send res to client with the index.html file
  response.write(fileContents);
  response.end();
});

  // Route that generates the lorem ipsum text and replaces the placeholder <div>. reloads the modified index.html
  router.post('/', (request, response) => {
    request.on("data", function(inputValue) {
      // Convert POST data into a readable string
      let query = inputValue.toString(); // i.e. numberOfParagraphs = 3
      // Parse the query into a key/value pair and store the value of numberOfParagraphs in a variable 
      let numberOfParagraphs = querystring.parse(query).numberOfParagraphs;
      // Generate the lorem ips text with the getAllParagraphs function
      let loremIpsumText = loremIpsum.getAllParagraphs(numberOfParagraphs);
      // Capture contents of index.html within a variable
      let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
      // Replace placeholder <div> with the lorem ipsum text
      fileContents = fileContents.replace("<div class='placeholder-div'></div>",loremIpsumText);;
      response.setHeader('Content-Type', 'text/html');
      // Send res to client with the modded index.html file
      response.write(fileContents); 
      response.end();
    });
});

//additional features:

// make first letter always capital
// limit minimum to 0 
// reorganise directory to use ./src folder

// Require the file inside of app.js
module.exports = router;