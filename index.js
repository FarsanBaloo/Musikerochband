import fs from 'fs';
import Personer from "./persons.js";
import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

// When we create a new Personer object, the constructor will
// read in the persons from the JSON file.
const personLista = new Personer();

function remove() {
  personLista.skrivUtPersoner();
  const val = prompt("Enter the index of the one you want to remove ->");

  if (isNaN(Number(val))) { 
    console.log("You must enter a number!");
    return;
  }
  if (val <= personLista.getLength() && val >= 1) {
    personLista.removePersonFromList(Number(val) - 1); 
  } else {
    console.log(`The number must be between 1 and ${personLista.getLength()}`);
  }
}

while (true) {
  console.clear()
  console.log(''); 
  console.log('Meny Musik och band databasen');
  console.log(''); 
  console.log('1. Skapa ett band');
  console.log('2. Ta bort ett band');
  console.log('3. Skapa en musiker');
  console.log('4. Ta bort en musiker');
  console.log('5. Lägg till en musiker till ett band');
  console.log('6. Ta bort en musiker från ett band');
  console.log('7. Skriv ut inlaggda musiker och band');
  console.log('8. Avsluta programmet');
  console.log(''); 

  let val = prompt('Välj ett meny vall: ');

  switch (val) {


    case "1": // Skapa ett band
      const nameofband = prompt('Ange namnet på bandet: ');
      const yearstarted = Number(prompt('Ange årtalet som bandet skappades: '));
      if (!isNaN(yearstarted)) {
        personLista.addBandToList(nameofband, yearstarted);
      } else {
        console.log("Ogiltigt inmatning av år ange ett tal.");
      }
      break;

    case "2": // Ta bort ett band
      remove();
      break;

    case "3": // Skapa en musiker
      const nameofartist = prompt('Ange namnet på musikanten: ');
      const yearbirth = Number(prompt('Ange födelse året: '));
      if (!isNaN(yearbirth)) {
        personLista.addMusikerToList(nameofartist, yearbirth);
      } else {
        console.log("Ogiltigt inmatning av år ange ett tal.");
      }
      break;

    case "4": // Ta bort en musiker
      remove();
      break;

      case "5": // Lägg till en musiker till ett band
      personLista.skrivUtPersoner(); 
      const musikerIndex = Number(prompt('Ange numret för musikanten i listan som skall läggas till ett band: ')) - 1; // we subtract 1 because array indexes start from 0
      const bandIndex = Number(prompt('Ange numret som bandet har i listan: ')) - 1; 
      if (!Number.isNaN(musikerIndex) && !Number.isNaN(bandIndex) && 
          musikerIndex >= 0 && bandIndex >= 0 && 
          musikerIndex < personLista.getLength() && bandIndex < personLista.getLength()) {
        personLista.addMusikerToBand(musikerIndex, bandIndex);
      } else {
        console.log('Ogiltigt nummer utför listans giltiga område ');
      }
      prompt('Tryck enter för att återgå till menyn')
      break;



    case "6": // Ta bort en musiker ifrån ett band
      personLista.skrivUtPersoner(); //
      const musikerIndex1 = Number(prompt('Ange numret för musikanten i listan som skall tas bort från ett band: ')) - 1; // we subtract 1 because array indexes start from 0
      const bandIndex1 = Number(prompt('Ange numret som bandet har i listan: ')) - 1;
      if (!Number.isNaN(musikerIndex1) && !Number.isNaN(bandIndex1) && 
          musikerIndex >= 0 && bandIndex >= 0 && 
          musikerIndex < personLista.getLength() && bandIndex < personLista.getLength()) {
        personLista.removeMusikerFromBand(musikerIndex, bandIndex);
      } else {
        console.log('Ogiltigt nummer utför listans giltiga område ');
      }
    
      break;

    case "7": // Skriv ut inlaggda musiker och band
      personLista.skrivUtPersoner(); // 
      prompt('Tryck enter för att återgå till menyn')
      break;

    case "8": // Avsluta programmet
      process.exit(0);

    default:
      console.log('Ogiltigt meny vall försök igen!');
      break;
  }
}