
import {Band,Musiker} from "./class.js";
import fs from 'fs';

import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

function readdatabase() {
  let befintligdata = [];

  try {
    const datajson = fs.readFileSync('./database.json', 'utf8');
    befintligdata = JSON.parse(datajson);

    if (!Array.isArray(befintligdata)) {
      befintligdata = [];
    }
  } catch (err) {

  }

  return befintligdata;
}

while (true) {
  let database = readdatabase(); // Read the database file and store it Java object "database"
  console.clear();

  console.log('Meny Musik databasen');
  console.log(''); // Empty line

  console.log('1. Skapa ett band');
  console.log('2. Ta bort ett band');
  console.log('3. Skapa en musiker');
  console.log('4. Ta bort en musiker');
  console.log('5. Lägg till en musiker i ett band');
  console.log('6. Ta bort en musiker från ett band');
  console.log('7. Avsluta programmet');

  console.log(''); // Empty line
  let val = Number(prompt('Välj ett alternativ: '));


  switch (val) {
  
    case 1: // Lägg till ett band i databasen
      const nameofband = prompt('Ange namnet på bandet: ');
      const yearstarted = Number(prompt('Ange årtalet bandet skapades: '));
      const bandet = new Band(nameofband, yearstarted); // Use "Band" class

      // Lägg till objektet "bandet" i java objektet database
      database.push(bandet);
      break;

    
    case 2:   // Ta bort ett band i databasen
    const bandNameToRemove = prompt('Ange namnet på bandet som ska tas bort från databasen: ');
    // ta bort ett band helt i java objectet "database" med hjälp av filter metoden 
    database = database.filter(item => item.name !== bandNameToRemove);
    break;

    
    case 3: // Skapa en musiker i databasen

    const nameofartist = prompt('Ange namnet på musikern: ');
    const yearbirth = Number(prompt('Ange årtalet när artisten är född [19xx]: '));
    const musician = new Musiker(nameofartist, yearbirth); // Use "Musiker" class

    database.push(musician);
    break;

    case 4:   // Ta bort en musiker ifrån databasen
    // Remove a musician from JSON
    const artistNameToRemove = prompt('Ange namnet på musikern som ska tas bort från databasen: ');
    // Remove the musician by name
    database = database.filter(item => item.name !== artistNameToRemove);
    break;

    case 5: // Lägg till musiker i ett band

    
      const musician1 = prompt('Ange namnet på musikern som skall läggas till i ett band: ');
      const band1 = prompt('Ange namnet på bandet som musikern skall tillhöra: ');
    
      // Find the band by name
      const band2 = database.find(item => item.name === band1);
    
      if (band2 && band2.currentmembers) {
        band2.currentmembers.push(musician1);
    
        // Update the JSON structure to reflect the changes
        const bandIndex1 = database.indexOf(band2);
        database[bandIndex1] = band2;
    
        // Save the updated object to JSON
        fs.writeFileSync('./database.json', JSON.stringify(database, null, 2));
      } else {
        console.log('Bandet hittades inte i databasen.');
      }
      break;
    

  case 6: // Tabort en musiker ifrån ett band
    const musiker = prompt('Ange namnet på musikern som skall tas bort ifrån ett band: ');
    const bande = prompt('Ange namnet på bandet som musikern inte skall tillhöra: ');
  
    // Find the band by name
    const band = database.find(item => item.name === bande);

    for (let i = 0; i < band.currentmembers.length; i++) {
      if (band.currentmembers[i] === musiker) 
      {
        band.currentmembers.splice(i, 1);
      }
    }

    // Update the JSON structure to reflect the changes
    const bandIndex = database.indexOf(band);
    database[bandIndex]= band;
    
    break;
    

  case 7: // Avsluta programet
    fs.writeFileSync('./database.json', JSON.stringify(database, null, 2));
    process.exit(0);
    break;

  default:
    console.log('Felaktigt val, försök igen!');
    break;  
          
  }   
    
  // Save the updated object to JSON
  fs.writeFileSync('./database.json', JSON.stringify(database, null, 2));

}

