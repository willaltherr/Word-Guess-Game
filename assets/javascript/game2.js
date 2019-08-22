// Pseudocode all the directions//

// Answers that will be choosen at random //
var movie = ["rudy", "hook", "jurassic park", "snatch", "jaws", "pyscho", "gremlins"];




// Press Any Key To Get Started //
document.onkeyup = function () {
// Captures user guesses //
  var userguess = String.fromCharCode(event.keyCode).
    toLowerCase();

    console.log(userguess);

   
}

    // Pick random word //
    var rand = movie[Math.floor(Math.random() * movie.length)];
    console.log(rand);


// Make movie appear in underscore //
var wrongGuess = [];
var rightGuess = [];
var numLetters = [];
var underscore = 0;

numLetters = rand.split("");
console.log(numLetters);

underscore = numLetters.length;
console.log(underscore);

for (var i = 0; i < numLetters.length; i++) {
  rightGuess.push("_");
}

document.getElementById("newAnswer").innerHTML = rightGuess;


console.log(rightGuess);



// Identify Correct Guesses and make them appear//




// Identify Incorrect Guesses and make them appear//




// Limit the number of guesses //
var guessRemaining = 10;

for (var i = 0; i > guessRemaining; i--) {
  if (rightGuess !== numLetters) {
    guessRemaining --;
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

