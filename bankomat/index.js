import Bankomat from "./bankomat.js";
import Card from "./card.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })

const bankomat = new Bankomat(11000);
const card = new Card(15000, "0123");

bankomat.insertCard(card);

bankomat.enterPin(prompt("Skriv in pin kod - "));

bankomat.enterPin(prompt("Skriv in pin kod - "));

bankomat.withdrawMoney(Number(prompt("Skriv in summa du vill ta ut - ")));
console.log(card.cardBalance);

bankomat.insertCard(card);

bankomat.enterPin(prompt("Skriv in pin kod - "));

bankomat.withdrawMoney(Number(prompt("Skriv in summa du vill ta ut - ")));

bankomat.withdrawMoney(Number(prompt("Skriv in summa du vill ta ut - ")));

console.log(card.cardBalance);