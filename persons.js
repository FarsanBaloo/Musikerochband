import fs from "fs";
import { Band } from "./Band.js";
import { Musiker } from "./Musiker.js";

export default class Personer {
  #persons = []; // Listan som håller alla musiker och band

  constructor() {
    this.#fetchData();
  }

  get persons() {
    return this.#persons;
  }

  // Reads all database from "database.json".
  #fetchData() {
    const jsonString = fs.readFileSync("database.json");
    const data = JSON.parse(jsonString);

    for (let i = 0; i < data.length; i++) {
      if (data[i].Info === "Band") {
        this.#persons.push(new Band(data[i].Name, data[i].Yearstarted, data[i].Yearended));
      } else if (data[i].Info === "Musiker") {
        this.#persons.push(new Musiker(data[i].Name, data[i].Yearbirth));
      }
    }
  }

  skrivUtPersoner() {
    for (let i = 0; i < this.#persons.length; i++) {
      console.log(`${i + 1}. ${this.#persons[i].name}`);
    }
  }

  addMusikerToList(namemusiker, yearbirth) {
    this.#persons.push(new Musiker(namemusiker, yearbirth)); 
    this.#updateJsonFile(); 
  }

  addBandToList(nameband, yearstarted) {
    this.#persons.push(new Band(nameband, yearstarted)); 
    this.#updateJsonFile(); 
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
        band.current.push(musiker.name); // Add the musician to the band's list of members
        musiker.current.push(band.name); // Reflect that the musician is part of this band
        console.log(`${musiker.name} har laggt till i ${band.name}.`);
        this.#updateJsonFile(); // Update the JSON file with the new data
      }
    } else {
      console.log('Ogiltigt vall');
    }
  

    // Add the musician to the band's current members
    if (!band.current.includes(musiker.name)) {
      band.current.push(musiker.name);
    }

    // Add the band to the musician's current band
    if (!musiker.current.includes(band.name)) {
      musiker.current.push(band.name);
    }

    this.#updateJsonFile();
  }

  removePersonFromList(index) {
    this.#persons.splice(index, 1); 
    this.#updateJsonFile(); // Updates "database.json".
  }

  getLength() {
    return this.#persons.length;
  }

  #updateJsonFile() {
    let tempList = [];

    for (let i = 0; i < this.#persons.length; i++) {
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
