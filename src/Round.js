
const Turn = require('../src/Turn');
const Card = require('../src/Card')


class Round {
  constructor(deck) {
    this.deck = deck;
    this.incorrectAnswers = [];
    this.turns = 0;
  };

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  };

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    !turn.evaluateGuess() && this.incorrectAnswers.push(this.returnCurrentCard().id);
     this.turns++

     return turn.giveFeedback()
  };

  calculatePercentCorrect() {
    return Math.round(this.incorrectAnswers.length / this.turns * 100)
  };

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }


}



module.exports = Round