<<<<<<< HEAD
=======

import fs from 'fs';
>>>>>>> parent of a7315e6 (..)
import Personer from "./persons.js";

import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

<<<<<<< HEAD
// När vi skapar ett nytt objekt kommer constructor att
// läsa in musikerna och banden från JSON-filen. 
const personLista = new Personer();

function remove() {
  personLista.skrivUtPersoner();
  const val = prompt("Ange numret för den musiker eller band du vill tabort ->");

=======
// När vi skapar ett nytt Hundar-objekt kommer constructor att
// läsa in hundarna från JSON-filen. 
const personLista = new Personer();



function removePerson() {
  personLista.skrivUtPersoner(); // Skriver ut listan på alla hundar med index i början.
  const val = prompt("Skriv in index för det du vill tabort ->");

>>>>>>> parent of a7315e6 (..)
  if (Number(val).toString() === "NaN") { // Kollar så att val går att parsa till ett nummer.
    console.log("Måste skriva in ett tal!");
  }
  if (val <= personLista.getLength() && val >= 1) {
<<<<<<< HEAD
    personLista.removePersonFromList(Number(val) - 1);  // Tar det inskrivna valet och minskar med 1. (för arrays index börjar på 0)
  } else {
    console.log(`Talet måste vara mellan 1 och ${personLista.getLength()}`);
    prompt('Tryck enter för att återgå till menyn')

  }
}
let run = true;
while (run) {
  console.clear()
  console.log(''); 
  console.log('Meny Musik och band databasen');
  console.log(''); 
=======
    hundLista.removePersonFromList(Number(val) - 1); // Tar det inskrivna valet och minskar med 1. (för arrays index börjar på 0)
  } else {
    console.log(`Talet måste vara mellan 1 och ${personLista.getLength()}`);
  }
}


while (true) {
  console.clear();

  console.log('Meny Musik databasen');
  console.log(''); // Empty line

>>>>>>> parent of a7315e6 (..)
  console.log('1. Skapa ett band');
  console.log('2. Ta bort ett band');
  console.log('3. Skapa en musiker');
  console.log('4. Ta bort en musiker');
  console.log('5. Lägg till en musiker i ett band');
  console.log('6. Ta bort en musiker från ett band');
  console.log('7. Skriv ut musiker och band');
  console.log('8. Avsluta programmet');

  console.log(''); // Empty line
  let val = prompt('Välj ett alternativ: ');


  switch (val) {
  
    case "1": // Lägg till ett band i databasen
      const nameofband = prompt('Ange namnet på bandet: ');
<<<<<<< HEAD
      const yearstarted = Number(prompt('Ange årtalet som bandet skappades: '));
      if (!isNaN(yearstarted)) {
        personLista.addBandToList(nameofband, yearstarted);
      } else {
        console.log("Ogiltigt inmatning av år ange ett tal.");
        prompt('Tryck enter för att återgå till menyn')
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
        prompt('Tryck enter för att återgå till menyn')
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
=======
      const yearstarted = Number(prompt('Ange årtalet bandet skapades: '));

      personLista.addBandToList(nameofband, yearstarted);

      break;

>>>>>>> parent of a7315e6 (..)
    
    case "2":   // Ta bort ett band i databasen
    removePerson();
    break;

<<<<<<< HEAD
    case "7": // Skriv ut inlaggda musiker och band
      console.clear()
      personLista.skrivUtPersoner();
      prompt('Tryck enter för att återgå till menyn')
      break;

    case "8": // Avsluta programmet
      run = false;

=======
    
    case 3: // Skapa en musiker i databasen

    const nameofartist = prompt('Ange namnet på musikern: ');
    const yearbirth = Number(prompt('Ange årtalet när artisten är född [19xx]: '));
>>>>>>> parent of a7315e6 (..)

    personLista.addMusikerToList(nameofartist, yearbirth);
   
    break;

    case "3":   // Ta bort en musiker ifrån databasen
    // Remove a musician from JSON
    const artistNameToRemove = prompt('Ange namnet på musikern som ska tas bort från databasen: ');
    // Remove the musician by name
    removePerson();
    break;

    case "5": // Lägg till musiker i ett band

    
      personLista.skrivUtPersoner();
    
 
      break;
    

  case 6: // Tabort en musiker ifrån ett band
      removePerson();
    break;
    

  case "7": // Avsluta programet
    process.exit(0);
    break;

  case "8": // Skriv ut alla musiker och band
  personLista.skrivUtPersoner(); // Skriver ut listan på alla hundar med index i början.


  default:
    console.log('Ogiltigt val, försök igen!');
    break;  
          
  }   
    


}

