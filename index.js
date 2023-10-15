import Band from "./band.js";
import Musiker from "./musiker.js";
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
  let database = readdatabase(); // Declare "database" with "let"
  console.clear();

  console.log('Meny Musik databasen');
  console.log('1. Skapa ett band');
  console.log('2. Ta bort ett band');
  console.log('3. Skapa en musiker');
  console.log('4. Ta bort en musiker');
  console.log('5. Lägg till en musiker i ett band');
  console.log('6. Ta bort en musiker från ett band');
  console.log('7. Avsluta programmet');

  let val = Number(prompt('Välj ett alternativ: '));

  switch (val) {
    // Create a band
    case 1:
      const nameofband = prompt('Ange namnet på bandet: ');
      const yearstarted = Number(prompt('Ange årtalet bandet skapades: '));
      const bandet = new Band(nameofband, yearstarted); // Use "Band" class

      // Save the object to JSON
      database.push(bandet);
      fs.writeFileSync('./database.json', JSON.stringify(database, null, 2));
      break;

    case 2:
      // Remove a band from JSON
      const bandNameToRemove = prompt('Ange namnet på bandet som ska tas bort från databasen: ');
      // Remove the band by name
      database = database.filter(item => item.name !== bandNameToRemove);
      // Save the updated object to JSON
      fs.writeFileSync('./database.json', JSON.stringify(database, null, 2));
      break;

    case 3:
      // Create a musician
      const nameofartist = prompt('Ange namnet på musikern: ');
      const yearbirth = Number(prompt('Ange årtalet när artisten är född [19xx]: '));
      const musician = new Musiker(nameofartist, yearbirth); // Use "Musiker" class

      // Save the object to JSON
      database.push(musician);
      fs.writeFileSync('./database.json', JSON.stringify(database, null, 2));
      break;

    case 4:
      // Remove a musician from JSON
      const artistNameToRemove = prompt('Ange namnet på musikern som ska tas bort från databasen: ');
      // Remove the musician by name
      database = database.filter(item => item.name !== artistNameToRemove);
      // Save the updated object to JSON
      fs.writeFileSync('./database.json', JSON.stringify(database, null, 2));
      break;

    case 5:
      // Add an artist to a band
      const artistNameToAdd = prompt('Ange namnet på musikern: ');
      const bandNameToAddTo = prompt('Ange namnet på bandet: ');
      // Find the band by name and add the member
      const bandToAddTo = database.find(item => item.name === bandNameToAddTo);
      if (bandToAddTo) {
        bandToAddTo.addtocurrent(artistNameToAdd); // Use "addtocurrent" method
      }
      // Save the updated object to JSON
      fs.writeFileSync('./database.json', JSON.stringify(database, null, 2));
      break;

    case 6:
      // Remove an artist from a band
      const artistNameToRemoveFrom = prompt('Ange namnet på musikern: ');
      const bandNameToRemoveFrom = prompt('Ange namnet på bandet: ');
      // Find the band by name and remove the member
      const bandToRemoveFrom = database.find(item => item.name === bandNameToRemoveFrom);
      if (bandToRemoveFrom) {
        bandToRemoveFrom.removfromcurrent(artistNameToRemoveFrom); // Use "removfromcurrent" method
      }
      // Save the updated object to JSON
      fs.writeFileSync('./database.json', JSON.stringify(database, null, 2));
      break;

    case 7:
      // Exit the program
      process.exit();
      break;

    default:
      console.log('Ogiltigt menyval, försök igen');
      break;
  }
}

