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