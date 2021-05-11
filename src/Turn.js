const Card = require('../src/Card');

class Turn {
    constructor(usersGuess, card) {
        this.usersGuess = usersGuess;
        this.card = card
    }
    // Method that returns the guess
    returnGuess() {
        return this.usersGuess
    };

    // Method that returns the Card
    returnCard() {
        return this.card
    };
    // Method that returns a boolean indicating
    // if the user’s guess matches the correct answer on the card
    evaluateGuess() {
        if (this.usersGuess ==== card.correctAnswer) {
            return "correct!"
        } else {
            return "incorrect!"
        }
    };

    giveFeedback() {

    };
}

module.exports = Turn;