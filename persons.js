import fs from "fs";
import Band from "./Band.js";
import Musiker from "./Musiker.js";

export default class Personer {
  #persons = []; // Listan som håller alla musiker och band

  constructor() {
    this.#fetchData();
  }

  get persons() {
    return this.#persons;
  }

// Läser in alla musiker och band från "database.json". 
  #fetchData() {
    const jsonString = fs.readFileSync("database.json");
    const data = JSON.parse(jsonString);
   // Populerar #Lista med musiker och band -objekt, då kommer vi få tillgång till alla metoder i klassen.
    for (let i = 0; i < data.length; i++) {
      if (data[i].Info === "Band") {
        this.#persons.push(new Band(data[i].Name, data[i].Yearstarted, data[i].Yearended));
      } else if (data[i].Info === "Musiker") {
        this.#persons.push(new Musiker(data[i].Name, data[i].Yearbirth));
      }
    }
  }
  //Skriver ut index och hund-objektens namn 
  skrivUtPersoner() {
    for (let i = 0; i < this.#persons.length; i++) {
      console.log(`${i + 1}. ${this.#persons[i].name}`);
    }
  }

  addMusikerToList(namemusiker, yearbirth) {
    this.#persons.push(new Musiker(namemusiker, yearbirth)); 
    this.#updateJsonFile(); // Uppdaterar "databasen.json". 
  }

  addBandToList(nameband, yearstarted) {
    this.#persons.push(new Band(nameband, yearstarted)); 
    this.#updateJsonFile(); // Uppdaterar "databasen.json".
  }

  addMusikerToBand(musikerIndex, bandIndex) {

    const band = this.#persons[bandIndex];
    const musiker = this.#persons[musikerIndex];
  
    if (band instanceof Band && musiker instanceof Musiker) {
      // Check if the musician is already in the band
      const alreadyInBand = band.current.some(memberName => memberName === musiker.name);
      if (alreadyInBand) {
        console.log(`${musiker.name} är redan medlem i ett band ${band.name}.`);
      } else {
        band.current.push(musiker.name); 
        musiker.current.push(band.name); 
        console.log(`${musiker.name} har laggt till i ${band.name}.`);
        this.#updateJsonFile(); 
      }
    } else {
      console.log('Ogiltigt vall');
    }
  
    // Lägger till musiker i current band
    if (!band.current.includes(musiker.name)) {
      band.current.push(musiker.name);
    }

    // Lägger till bandet i musikerns current band
    if (!musiker.current.includes(band.name)) {
      musiker.current.push(band.name);
    }

    this.#updateJsonFile(); // Uppdaterar "Hundar.json".
  }

  removePersonFromList(index) {
    this.#persons.splice(index, 1); 
    this.#updateJsonFile(); // Uppdaterar "Hundar.json".
  }

  getLength() {
    return this.#persons.length;
  }

  #updateJsonFile() {
    let tempList = []; // Skapar en temporär lista som ska sparas i "databasen.json".

    for (let i = 0; i < this.#persons.length; i++) {
      // Använder dataInfo som ger mig ett nytt objekt med alla musiker och band objektet egenskaps information.
      // Om vi sparar musiker och band-objektet direkt, kommer inte informationen från privata egenskaper med.
      if (this.#persons[i] instanceof Band) {
        tempList.push(this.#persons[i].databandInfo());
      } else if (this.#persons[i] instanceof Musiker) {
        tempList.push(this.#persons[i].datamusikerInfo());
      }
    }

    fs.writeFileSync('./database.json', JSON.stringify(tempList, null, 2));
    console.log('Data written to file');
  }
}
