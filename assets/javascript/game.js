// Creates an array that lists out all of the options (Alphabet & Movie Answers).
// var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //

var word = ['Rudy', 'Jurassic Park', 'Star Wars', 'The Princess Bride', 'Lord of the Rings'];


//Picks Movie Answer at Random//
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
console.log(choosenWord);
let underScore = [];
console.log(choosenWord);


//Creates Underscores based off length of Movie Answer//
let generateUnderscore = () => {
    for (var i = 0; i < choosenWord.length; i++) {
      underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore());


//Get Users Guess //
document.addEventListener('keypress', (event) => {
  console.log(event);
});


//Check if guess is Correct //

// If right, push to right array //

//If wrong, push to wrong array //