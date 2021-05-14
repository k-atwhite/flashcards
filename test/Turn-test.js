const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
    var card
    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should have two arguments', function() {
        const turn = new Turn('object', card);
    });

    it('should return a guess', function() {
        const turn = new Turn('object', card);
        turn.returnGuess()

        expect(turn.returnGuess()).to.equal('object')
    });

    it('should return a card', function () {
        card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
        const turn = new Turn('object', card);
        turn.returnCard()

        expect(turn.returnCard()).to.equal(card)
    });

    it('should return true when guess is correct', function () {
        const turn = new Turn('object', card);

        expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should return false when guess is incorrect', function () {
        const turn = new Turn('array', card);

        expect(turn.evaluateGuess()).to.equal(false);
    });

    it('should return "correct!" when guess is correct', function () {
        const turn = new Turn('object', card);

        turn.evaluateGuess();

        expect(turn.giveFeedback()).to.equal('correct!');
    });

    it('should return "incorrect!" when guess is incorrect', function () {
        const turn = new Turn('array', card);

        turn.evaluateGuess();

        expect(turn.giveFeedback()).to.equal('incorrect!');
    });

});
