// Psuedocode all the directions//
// Press Any Key To Get Started //
document.onkeyup = function () {
// Captures user guesses //
  var userguess = String.fromCharCode(event.keyCode).
    toLowerCase();

    console.log(userguess);
}

// Answers that will be choosen at random //
var answer = ["rudy", "hook", "batman", "snatch", "jaws", "pyscho", "gremlins"];

// Pick random word //
var rand = answer[Math.floor(Math.random() * answer.length)];
  console.log(rand);


// Identify Correct Guesses //




// Identify Incorrect Guesses //




// Make random answers appear with underscores //




// Limit the number of guesses //





// Cumulate Wins //





// Cumulate Loses //





// Restart Game After you win or lose //









// Bonus //
// Add Theme song to movie they guess right //
// Add image from movie when they guess right //

