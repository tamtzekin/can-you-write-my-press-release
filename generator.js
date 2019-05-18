// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "The [Grammy Award]-winning, [Nobel Peace Prize]-nominated band return to the country for their first [Australian] performance in [twenty] years.",
      "For this concert only, the band's original line-up will reunite for the first time since its inception.",
      "They will perform their [Pitchfork]-approved sophomere album for the first time, which was praised by as ['genre-defying'] and ['eclectic'].",
      "The band's sound has been defined by critics as an intersection betwen [early-career Bjork] and [late-career Morrissey], having received accolades from [Radiohead's Thom Yorke] and [Talking Head's David Byrne] alike.",
      "Their signature blend of [bass-heavy electronics] and [infectious rhythmic beats] will melt the [Concert Hall] once more.",
      "For this concert only, [band name] will perform a site-specific performance commissioned exclusively for the [venue].",
      "With seven albums to their name, they will perform a career-spanning set performing fan favourites and new music alike.",
      "Breaking the boundaries between electronic and acoustic music, their electrifying performance has seen them headline Coachella, Splendour in the Grass and Laneway Festival.", 
      "Not content with just their music, the band's individual members have written, produced and starred in their own [electro-cabaret fusion shows], direct from sold-out seasons at [Edinburgh, Adelaide Fringe and Las Vegas - the home of showbiz]."
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