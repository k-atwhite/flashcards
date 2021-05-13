class Turn {
    constructor(usersGuess, card) {
        this.usersGuess = usersGuess;
        this.card = card
    }
    returnGuess() {
        return this.usersGuess
    };

    returnCard() {
        return this.card
    };

    evaluateGuess() {
        return this.usersGuess === this.card.correctAnswer
    };

    giveFeedback() {
        return (this.evaluateGuess() ? 'correct!' : 'incorrect!');
    };
}

module.exports = Turn;