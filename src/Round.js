const Turn = require('../src/Turn');
const Card = require('../src/Card');


class Round {
    constructor(cards = []) {
        this.deck = cards;
        this.currentCard = cards[0];
        this.turnCount = 0
        this.incorrectGuesses = [];
        this.accuracy = 0
    }

    returnCurrentCard() {
        return this.currentCard
    }

    takeTurn(userGuess) {
        let turn = new Turn(userGuess, this.currentCard)
        this.turnCount++
        if (!turn.evaluateGuess())  {
            this.incorrectGuesses.push(this.currentCard.id)
        }

        this.calculatePercentCorrect()
        this.currentCard = this.deck[this.turnCount]
        return turn.giveFeedback()
    }

    calculatePercentCorrect() {
        this.accuracy = Math.round((((this.turnCount -
            this.incorrectGuesses.length) / this.turnCount) * 100));
        return this.accuracy
    }

    endRound() {

    }
}

module.exports = Round;


