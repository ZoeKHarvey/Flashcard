const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function')
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have a guessed answer', function() {
    const card1 = new Card ({'id': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer': 'sea otter'});
    const turn = new Turn('Bob', card1)
    expect(turn.guess).to.equal('Bob');
  });

  it('should store the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('first guess', card1);
    expect(turn.card).to.deep.equal(card1)
  });

  it('should return the guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('first guess', card1);

    let theGuess = turn.returnGuess();
    expect(theGuess).to.equal(turn.guess)
  
  });

  it('should return the card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('first guess', card1);

    let theCard = turn.returnCard();
    expect(theCard).to.equal(turn.card);
  });

  it('should evaluate the guess', function() {
    const card1 = new Card ({'id': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer': 'sea otter'});
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const turn = new Turn('sea otter', card1);
    const turn2 = new Turn('pug', card2)
    expect(turn.evaluateGuess('sea otter')).to.equal(true);
    expect(turn2.evaluateGuess('pug')).to.equal(false);

  });

  it('should give feedback', function() {
    const card1 = new Card ({'id': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer': 'sea otter'});
    const card2 = new Card({'id': 1, 'question': 'What organ is Khalid missing?', 'answers': ['spleen', 'appendix', 'gallbladder'], 'correctAnswer': 'gallbladder'});
    const turn = new Turn('sea otter', card1);
    const turn2 = new Turn('appendix', card2)

    expect(turn.giveFeedback('sea otter')).to.equal('correct!');
    expect(turn2.giveFeedback('gallbladder')).to.equal('incorrect!');

    
});

});