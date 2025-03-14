const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');


class Game {
  constructor() {
    this.currentRound = 0;
  }

  printMessage(deck, round) {
    // eslint-disable-next-line no-console 
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  createNewDeck() {
    const cards = prototypeQuestions.map(question => 
      new Card(
        question.id, 
        question.question, 
        question.answers, 
        question.correctAnswer)
    );
    return new Deck(cards);
  }

  start() {
    const deck = this.createNewDeck();
    const round = new Round(deck);
    this.currentRound ++;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;