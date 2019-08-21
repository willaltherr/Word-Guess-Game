// Psuedocode all the directions//

// Answers that will be choosen at random //
var movie = ["rudy", "hook", "batman", "snatch", "jaws", "pyscho", "gremlins"];



// Press Any Key To Get Started //
document.onkeyup = function () {
// Captures user guesses //
  var userguess = String.fromCharCode(event.keyCode).
    toLowerCase();

    console.log(userguess);

    // Pick random word //
  var rand = movie[Math.floor(Math.random() * movie.length)];
  console.log(rand);

}



// Identify Correct Guesses and make them appear//




// Identify Incorrect Guesses and make them appear//




// Make random answers appear with underscores //




// Limit the number of guesses //





// Cumulate Wins //





// Cumulate Loses //





// Restart Game After you win or lose //









// Bonus //
// Add Theme song to movie they guess right //
// Add image from movie when they guess right //

