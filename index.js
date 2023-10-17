
import fs from 'fs';
import Personer from "./persons.js";

import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

// När vi skapar ett nytt Hundar-objekt kommer constructor att
// läsa in hundarna från JSON-filen. 
const personLista = new Personer();



function removePerson() {
  personLista.skrivUtPersoner(); // Skriver ut listan på alla hundar med index i början.
  const val = prompt("Skriv in index för det du vill tabort ->");

  if (Number(val).toString() === "NaN") { // Kollar så att val går att parsa till ett nummer.
    console.log("Måste skriva in ett tal!");
  }
  if (val <= personLista.getLength() && val >= 1) {
    hundLista.removePersonFromList(Number(val) - 1); // Tar det inskrivna valet och minskar med 1. (för arrays index börjar på 0)
  } else {
    console.log(`Talet måste vara mellan 1 och ${personLista.getLength()}`);
  }
}


while (true) {
  console.clear();

  console.log('Meny Musik databasen');
  console.log(''); // Empty line

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
      const yearstarted = Number(prompt('Ange årtalet bandet skapades: '));

      personLista.addBandToList(nameofband, yearstarted);

      break;

    
    case "2":   // Ta bort ett band i databasen
    removePerson();
    break;

    
    case 3: // Skapa en musiker i databasen

    const nameofartist = prompt('Ange namnet på musikern: ');
    const yearbirth = Number(prompt('Ange årtalet när artisten är född [19xx]: '));

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

