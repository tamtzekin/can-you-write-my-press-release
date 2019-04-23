// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "for their only Australian performance",
      "The Grammy Award-winning, Nobel Peace Prize-nominated band",
      "that features the band's original line-up for the first time since its inception",
      "They will perform their Pitchfork-praised sophomere album for the first time, which was praised by as 'genre-defying'",
      "Their sound is an intersection betwen early-career Bjork and , having received accolades from Bjork and Leonard Cohen alike.",
      "bringing their signature blend of bass-heavy electronics and infectious rhythmic beats",
      "performing a site-specific performance commissioned exclusively for the Sydney Opera House",
      "with seven albums to their name",
      "to perform a career-spanning set performing fan favourites and new music alike",
      "breaking the boundaries between electronic and acoustic music",
      "with an electrifying performance that has seen them headline Coachella, Splendour in the Grass and Laneway Festival", 
      "in a world exclusive performance",
      "direct from a season on Broadway",
      "direct from sold-out seasons at Edinburgh and Adelaide Fringe"
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;