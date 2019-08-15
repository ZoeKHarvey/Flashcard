const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round')
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {


it('should be a function', function() {
  const round = new Round();
  expect(Round).to.be.a('function')
});

it('should return the current card', function() {
  
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  const deck = new Deck([card1, card2, card3])
  const round = new Round(deck);
  expect(round.returnCurrentCard()).to.equal(card1)
});

it('should take turn', function() {
  const card1 = new Card ({'id': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer': 'sea otter'});
  const card2 = new Card({'id': 2, 'question': 'What organ is Khalid missing?', 'answers': ['spleen', 'appendix', 'gallbladder'], 'correctAnswer': 'gallbladder'});
  const card3 = new Card({'id': 3, 'question': 'What is Travis\'s middle name?', 'answers': ['Lex', 'William', 'Fitzgerald'], 'correctAnswer': 'Fitzgerald'});
  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);

  expect(round.takeTurn('sea otter')).to.equal('correct!');
  
  expect(round.takeTurn('capybara')).to.equal('incorrect!');
  });

  it('should calculate percents', function() {
    const card1 = new Card ({'id': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer': 'sea otter'});
    const card2 = new Card({'id': 2, 'question': 'What organ is Khalid missing?', 'answers': ['spleen', 'appendix', 'gallbladder'], 'correctAnswer': 'gallbladder'});
    const card3 = new Card({'id': 3, 'question': 'What is Travis\'s middle name?', 'answers': ['Lex', 'William', 'Fitzgerald'], 'correctAnswer': 'Fitzgerald'});
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

  round.takeTurn('pug')
  round.takeTurn('gallbladder')
  round.takeTurn('William')

   
   expect(round.calculatePercentCorrect()).to.equal(67)
  });

  it('should end round', function() {
    const card1 = new Card ({'id': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer': 'sea otter'});
    const card2 = new Card({'id': 2, 'question': 'What organ is Khalid missing?', 'answers': ['spleen', 'appendix', 'gallbladder'], 'correctAnswer': 'gallbladder'});
    const card3 = new Card({'id': 3, 'question': 'What is Travis\'s middle name?', 'answers': ['Lex', 'William', 'Fitzgerald'], 'correctAnswer': 'Fitzgerald'});
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('pug')
    round.takeTurn('gallbladder')
    round.takeTurn('William')

    expect(round.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!')
  })

 

    


})