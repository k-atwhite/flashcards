const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
    var card1 = {
        "id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object"
    };
    var card2 = {
        "id": 2,
        "question": "What is a comma-separated list of related values?",
        "answers": ["array", "object", "function"],
        "correctAnswer": "array"
    };
    var card3 = {
        "id": 3,
        "question": "What type of prototype method directly modifies the existing array?",
        "answers": ["mutator method", "accessor method", "iteration method"],
        "correctAnswer": "mutator method"
    };
    var card4 = {
        "id": 4,
        "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
        "answers": ["mutator method", "accessor method", "iteration method"],
        "correctAnswer": "accessor method"
    };

    it('should be a function', function () {
        expect(Deck).to.be.a('function')
    });

    it('should be an instance of Deck', function () {
        const deck = new Deck
        expect(deck).to.be.an.instanceOf(Deck)
    });

    it('should show number of cards in Deck', function () {
        const deck = new Deck
        var card1 = {
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
        };
        var card2 = {
            "id": 2,
            "question": "What is a comma-separated list of related values?",
            "answers": ["array", "object", "function"],
            "correctAnswer": "array"
        };

        deck.cards = [card1, card2]
        
        deck.countCards
        expect(deck.cards.length).to.equal(2);
    });
}
)