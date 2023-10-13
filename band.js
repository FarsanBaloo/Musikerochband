export default class Bankomat {

  cardInserted;
  validCard;
  machineBalance;

  constructor(machineBalance) {
    this.machineBalance = machineBalance;
    this.validCard = false;
    this.cardInserted = false;
  }

  welcomePhrase() {
    console.log("Välkommen, sätt in ditt kort");
  }

  insertCard(card) {
    this.welcomePhrase();
    this.cardInserted = card
  }

  enterPin(inputPin) {
    if (this.cardInserted.comparePin(inputPin)) {
      this.validCard = true;
      console.log("Korrekt pinkod. Hur mycket vill du ta ut?");
    } else {
      console.log("Fel pinkod, försök igen");
    }
  }

  withdrawMoney(withdrawAmount) {
    if (this.validCard) {

      if (this.getBalance() < withdrawAmount) {
        console.log(`Tyvärr finns det inte tillräckligt med pengar i bankomaten. Du kan ta ut upp till ${this.getBalance()}. Hur mycket vill du ta ut?`);
      } else if (this.cardInserted.getCardBalance() < withdrawAmount) {
        console.log("Du har för lite pengar på!");
      } else {
        this.machineBalance -= withdrawAmount;
        this.cardInserted.cardBalance -= withdrawAmount;
        this.ejectCard();
        console.log(`Här har du dina ${withdrawAmount}kr. Glöm inte ditt kort! Tack för att du använt bankomaten`);
      }

    } else if (!this.cardInserted) {
      console.log("Du måste sätta in ett kort!");
    } else {
      console.log("Skriv in rätt pinkod!");
    }
  }

  getBalance() {
    return this.machineBalance;
  }

  ejectCard() {
    this.cardInserted = false;
    this.validCard = false;
  }

}