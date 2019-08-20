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


