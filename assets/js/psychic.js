var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
// var guessesLeft = 10;
var winsText = document.getElementById("winCount");
var lossesText = document.getElementById("lossCount");
// var userGuessText = document.getElementById("userGuess");
var remainingText = document.getElementById("remaining");
var guessedText = document.getElementById("guessed");
var guessed = [];

var computerGuess = options[Math.floor(Math.random() * options.length)];

function repeat() {
    remaining = 9;
    guessed = [];
    computerGuess = options[Math.floor(Math.random() * options.length)];
}

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
    console.log(computerGuess);
    check();
    
    function check() {
        if (options.indexOf(userGuess) > -1) {
            if (guessed.indexOf(userGuess) === -1) {
                if (userGuess === computerGuess) {
                    wins++;
                    repeat();
                } else if (remaining > 1) {
                    remaining--;
                    guessed.push(userGuess);
                } else {
                    losses++;
                    repeat();
                }
                winsText.textContent = wins;
                lossesText.textContent = losses;
                remainingText.textContent = remaining;
                guessedText.textContent = guessed;
            } else {
                alert("Choose an unused letter to continue playing!")
            }
        } else {
            alert("Guess a letter to play!");
        }
    }
}