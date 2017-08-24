//Letter choices available
var AiChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting starting values
var wins = 0;
var losses = 0;
var guessedLetters = [];
var guessesLeft = 9;
var guesses = 9;


//START OVER
var start_over = function () {
    totalGuesses = 9;
    guessedLetters = [];
    guessesLeft = 9;

    updateGuessesSelected();
    updateLetterToGuess();
    updateGuessesLeft();
}

//Allow 9 Guesses
var updateGuessesLeft = function () {
    //HTML for Guesses Left
    document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
    console.log(AiGuess);
}
var updateLetterToGuess = function () {
    this.AiGuess = this.AiChoices[Math.floor(Math.random() * this.AiChoices.length)];

};
var updateGuessesSelected = function () {
    // Display attempted guesses as series of letters. 
    document.querySelector('#let').innerHTML = "Your Guesses: " + guessedLetters.join(', ');
};

//These trigger functions
updateLetterToGuess();
updateGuessesLeft();

//User hits selected key to make guess

document.onkeyup = function (event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSelected();

    if (guessesLeft > 0) {
        if (userGuess == AiGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("Wow, you are psychic!");
            start_over();
        }
    } else if (guessesLeft == 0) {
        // Then we lose and we'll update the html to display the loss 
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Sorry, you are not psychic?");
        // Then we'll startover. 
        start_over();
    }
};



