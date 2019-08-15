class Turn {
  constructor(guess, cardObj) {
    this.guess = guess;
    this.card = cardObj;
  };

  returnGuess() {
    return this.guess
  };

  returnCard() {
    return this.card;
  };

  evaluateGuess(guess) {
    return this.guess  === this.card.correctAnswer ? true : false;
  
  };

  giveFeedback(guess) {
    return this.card.correctAnswer === this.guess ? 'correct!' : 'incorrect!'

  };

};

module.exports = Turn;

