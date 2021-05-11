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
        if (this.usersGuess === this.card.correctAnswer) {
            return true
        } else {
            return false
        }
    };

    giveFeedback() {
        if (this.evaluateGuess()) {
            return 'correct!'
        } else {
            return 'incorrect!'
        }
    };
}

module.exports = Turn;