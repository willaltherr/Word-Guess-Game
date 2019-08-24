// Pseudocode all the directions//

// Answers that will be choosen at random //
var movie = ["rudy", "hook", "snatch", "jaws", "pyscho", "gremlins"];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



// Press Any Key To Get Started //
document.onkeyup = function () {
// Captures user guesses //
  var userguess = String.fromCharCode(event.keyCode).
    toLowerCase();

    console.log(userguess);

   
}

    // Pick random word //
    var rand = movie[Math.floor(Math.random() * movie.length)];
      // console.log(rand);


// Make movie appear in underscore //
var newAnswer = [];
var numLetters = [];
var underscore = 0;

numLetters = rand.split("");
  console.log(numLetters);

underscore = numLetters.length;
  // console.log(underscore);

for (var i = 0; i < numLetters.length; i++) {
  newAnswer.push("_");
}

document.getElementById("newAnswer").innerHTML = newAnswer;


  console.log(newAnswer);



// Identify Correct Guesses and make them appear//
var rightGuess = [];
var userguess = movie[rand];

if (userguess === numLetters) {
  userguess.push(event.keycode);
}
 // console.log(rightGuess);

document.getElementById("rightGuess").innerHTML = rightGuess;

// Identify Incorrect Guesses and make them appear//
var wrongGuess = [];




// Limit the number of guesses //
var guessRemaining = 0;

for (var i = 0; i < 10; i++) {
  if (wrongGuess !== numLetters) {
    // console.log(i);
    guessRemaining -1;
  } 
}
document.getElementById("guessesLeft").innerHTML = guessRemaining;


// Cumulate Wins //
var wins = 0;




// Cumulate Loses //
var loses = 0;




// Restart Game After you win or lose //









// Bonus //
// Add Theme song to movie they guess right //
// Add image from movie when they guess right //

