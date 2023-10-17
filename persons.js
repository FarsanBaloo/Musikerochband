import fs from "fs";
import {Band, Musiker} from "./person.js";


export default class Personer
{
  #persons = []; // Lista som håller alla Person-objekt.

  constructor() {
    this.#fetchPersonData();
  }

  get persons() {
    return this.#persons;
  }


  // Läser in alla database från "database.json". 
  #fetchPersonData() 
  {
    const jsonString = fs.readFileSync("database.json");
    const data = JSON.parse(jsonString);
    

    // Populerar #persons med Band-objekt, då kommer vi få tillgång till alla metoder i Band-klassen.
    if (this instanceof Band) 
    {
      for (let i = 0; i < data.length; i++) {
        this.#persons.push(new Band(data[i].name,data[i].info, data[i].yearstarted, data[i].yearended, data[i].current, data[i].earlier));
      }
    } 
      
         // Populerar #persons med person-objekt, då kommer vi få tillgång till alla metoder i Musiker-klassen.
    if (this instanceof Musiker) 
    {
      for (let i = 0; i < data.length; i++) {
        this.#persons.push(new Musiker(data[i].name,data[i].info, data[i].yearbirth, data[i].instrumentations, data[i].current, data[i].earlier));
      }
    }
  } 
  

  //Skriver ut index och Person-objektens namn 
  skrivUtPersoner() 
  {
    for (let i = 0; i < this.#persons.length; i++) {
      console.log(`${i + 1}. ${this.#persons[i].name}`);
    }
  }

  addMusikerToList(namemusiker, yearbirth) 
  {
    this.#persons.push(new Musiker(namemusiker,yearbirth)); // Lägger till en ny Musiker i #persons.
    this.#updateJsonFile(); // Uppdaterar "database.json".
  }

  addBandToList(nameband, yearstarted) 
  {
    this.#persons.push(new Band(nameband,yearstarted)); // Lägger till en ny Band i #persons.
    this.#updateJsonFile(); // Uppdaterar "database.json".
  }
  
  
  removePersonFromList(index) 
  {
    this.#persons.splice(index, 1); // Tar bort en Person ifrån #persons.
    this.#updateJsonFile(); // Uppdaterar "database.json".
  }

    #updateJsonFile() 
    {
      let tempList = []; // Skapar en temporär lista som ska sparas i "database.json".

      for (let i = 0; i < this.#persons.length; i++) {
        // Använder dataInfo som ger mig ett nytt objekt med alla Person-objektet egenskaps information.
        // Om vi sparar Person-objektet direkt, kommer inte informationen från privata egenskaper med.
        tempList.push(this.#persons[i].databandInfo());
      }

      fs.writeFileSync('./database.json', JSON.stringify(tempList, null, 2), (err) => {
        if (err) throw err;
        console.log('Data written to file');
      });
    } 


    getLength() 
    {
      return this.#persons.length;
    }
  
  
} 
 
  