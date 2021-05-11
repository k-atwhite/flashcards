const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
    var card
    // beforeEach(() => {
    //     card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    // });

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

    it('should evaluate a guess', function () {
        const turn = new Turn();
        card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
        turn.evaluateGuess()

        expect(turn.evaluateGuess()).to.equal('true')
    });

    it.skip('should give feedback if the answer is correct or incorrect', function() {
        
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);

        turn.evaluateGuess()
        turn.giveFeedback()
        expect(turn.giveFeedback()).to.equal('correct!')

        turn.evaluateGuess()
        turn.giveFeedback()
        expect(turn.giveFeedback()).to.equal('incorrect!')
    })

});