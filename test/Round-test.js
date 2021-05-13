const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function () {
    let card1, card2, card3, deck, round;

    beforeEach(() => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    });
    
    it('should be a function', function () {
        const round = new Round();
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function () {
        const round = new Round();
        expect(round).to.be.an.instanceof(Round);
    });

    it('should store a deck of cards', function () {
        const round = new Round();
        expect(round.deck).to.deep.equal(deck.cards);
    });

    it('should store turns with a default of 0', function () {
       expect(round.turnCount).to.equal(0)
    });

    it('should increment turns by 1 after each round', function () {
        round.takeTurn('Im Guessing')
        round.takeTurn('Im Guessing')

        expect(round.turnCount).to.equal(2)
    })

    // it('should store incorrect guesses', function () {
    //     round.takeTurn('array');
    //     expect(round.incorrectGuesses).to.deep.equal([1]);

    //     round.takeTurn('array');
    //     expect(round.incorrectGuesses).to.deep.equal([1]);

    //     round.takeTurn('iteration method');
    //     expect(round.incorrectGuesses).to.deep.equal([1, 3]);
    // });

    // it('should store ids of incorrect guesses with their id', function () {

    // });

    // it('should make next item in array the current card', function () {
        
    // });

    // it('should return "correct!" if guess is correct', function () {
    //     expect(round.takeTurn('object')).to.equal('correct!');
    // });

    // it('should return "incorrect!" if guess is incorrect', function () {
    //     expect(round.takeTurn('array')).to.equal('incorrect!');
    // });

    // it('should return percentage of accurate guesses', function () {

    // });
});
