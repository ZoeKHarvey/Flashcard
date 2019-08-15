const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    const card = new Card ({'id': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer': 'sea otter'});

    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card ({'id': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer': 'sea otter'});
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    const card = new Card ({'id': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer': 'sea otter'});
    expect(card.question).to.equal('What is Robbie\'s favorite animal');
  });  

  it('should store a list of possible answers', function() {
    const card = new Card ({'id': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer': 'sea otter'});
    expect(card.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
  });  

  it('should store the correct answer', function() {
    const card = new Card ({'id': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer': 'sea otter'});
    expect(card.correctAnswer).to.equal('sea otter');
  });
});