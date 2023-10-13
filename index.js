import band from "./band.js";
import musiker from "./musiker.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })

const bankomat = new band(11000);
const card = new musiker(15000, "123");

bankomat.insertCard(card);

bankomat.enterPin(prompt("Skriv in pin kod - "));


bankomat.withdrawMoney(Number(prompt("Skriv in summa du vill ta ut - ")));
console.log(card.cardBalance);