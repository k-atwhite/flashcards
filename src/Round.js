const Turn = require('../src/Turn');
const Card = require('../src/Card');


class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = this.deck.cards[0];
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
        this.currentCard = this.deck.cards[this.turnCount]
        return turn.giveFeedback()
    }

    calculatePercentCorrect() {
        this.accuracy = Math.round((((this.turnCount -
            this.incorrectGuesses.length) / this.turnCount) * 100));
        return this.accuracy
    }

    endRound() {
      const roundStatement = `** Round over! ** You answered ${this.accuracy}% of the questions correctly!`;
      console.log(roundStatement);
      return roundStatement;
    }
}

module.exports = Round;
