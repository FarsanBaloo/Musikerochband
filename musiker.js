export default class Card {

  cardBalance;
  pin;

  constructor(cardBalance, pin) {
    this.cardBalance = cardBalance
    this.pin = pin;
  }

  comparePin(inputPin) {
    if (inputPin === this.pin) {
      return true;
    } else {
      return false;
    }
  }

  getCardBalance() {
    return this.cardBalance;
  }

}