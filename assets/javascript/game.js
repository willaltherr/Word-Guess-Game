// Create an array of words //
var word = ["rudy", "hook", "batman", "snatch", "jaws", "pyscho", "gremlins"];

// Pick random word //
var randNum = Math.floor(Math.random() * word.length);
var choosenWord = word[randNum];
var underScore = [];
console.log(choosenWord);

// Create underscore based on word length array //
var generateUnderscore = () => {
  for(var i = 0; i < choosenWord.length; i++) {
    underScore.push('_');
  }
  return underScore;
}

console.log(generateUnderScore());