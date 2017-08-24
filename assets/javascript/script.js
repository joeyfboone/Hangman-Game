//Letter choices available
var AiChoices = ['madonna', 'sting', 'joey', 'hello', 'world'];

//Setting starting values
var wins = 0;
var losses = 0;
var guessedLetters = [];
var guessesLeft = 9;
var guesses = 9;
var AiChoiceMasked = null
var mask = "_";
var letters = []

//Allow 9 Guesses
var updateLetterToGuess = function () {
    this.AiGuess = this.AiChoices[Math.floor(Math.random() * this.AiChoices.length)];
    console.log(AiGuess);

var split = AiGuess;
    for (var i = 0; i < split.length; i++) {
        console.log(split.charAt(i));
    }   
    
};
var updateGuessesLeft = function () {
    //HTML for Guesses Left
    document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + guessesLeft;

}

var updateGuessesSelected = function () {
    // Display attempted guesses as series of letters. 
    document.querySelector('#let').innerHTML = "Your Guesses: " + guessedLetters.join(', ');
};
var updateCurrentWord = function () {
   //HTML for current word
   document.querySelector('#current_word').innerHTML = "Current Word: " + AiChoiceMasked;
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
    updateCurrentWord();
    if (guessesLeft > 0) {
        if (userGuess == AiGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("Wow, you have been saved from hanging!");
            start_over();
        }
    } else if (guessesLeft == 0) {
        // Then we lose and we'll update the html to display the loss 
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Sorry, you have been hung?");
        // Then we'll startover. 
        start_over()}
    }

//START OVER
var start_over = function () {
    totalGuesses = 9;
    guessedLetters = [];
    guessesLeft = 9;

    updateGuessesSelected();
    updateLetterToGuess();
    updateGuessesLeft();
}
    




