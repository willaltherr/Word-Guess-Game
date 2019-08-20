// Create an array of words //
var word = ["rudy", "hook", "batman", "snatch", "jaws", "pyscho", "gremlins"];

// Pick random word //
  var randNum = Math.floor(Math.random() * word.length);
  var choosenWord = word[randNum];
  var rightWord = [];
  var wrongWord = [];
  var underScore = [];

// Dom manipulation //
  var docUnderScore = document.getElementsByClassName('underscore');
  var docRightGuess = document.getElementsByClassName('rightGuess');
  var docWrongGuess = document.getElementsByClassName('wrongGuess');



console.log(choosenWord);

// Create underscore based on word length array //
var generateUnderscore = () => {
  for(var i = 0; i < choosenWord.length; i++) {
    underScore.push('_');
  }
  return underScore;
}


// Get users guess //
document.addEventListener('keypress', (event) => {
  var keyword = String.fromCharCode(event.keyCode);
// User guess is right //
  if(choosenWord.indexOf(keyword) > -1) {
    // Add to right words array //
    rightWord.push(keyword);
    // Replace underscore with correct letter
    underScore[choosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = underScore.join(' ');
    docRightGuess[0].innerHTML = rightWord;
    // Check to see if user word matches user guesses //
    if(underScore.join('') == choosenWord) {
      alert('You Win');
    }
  }
    // Add to wrong words array //
  else {
    wrongWord.push(keyword);
    docWrongGuess[0].innerHTML = wrongWord;

  }
});


UnderScore[0].innerHTML = generateUnderscore().join(' ');