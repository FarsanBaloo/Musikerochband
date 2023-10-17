// Define the Band class
export class Band {

  #name;
  #info;
  #yearstarted;
  #yearended;
  #current;
  #earlier;

  constructor(name, info='', yearstarted= '', yearended= '') {
    this.#name = name;
    this.#info = info;
    this.#yearstarted = yearstarted;
    this.#yearended = null;
    this.#current = [];
    this.#earlier = [];
  }

  get information(){
    return this.#info; 
  }

  set information(newinfo) {
    this.#info = newinfo;
  }

  get year() {
    return this.#yearended;
  }

   set year(newyear) {
    this.#yearended = newyear;
  }

  get current() {
    return this.#current;

  }

  set current(newcurrent) {
    this.#current.push(newcurrent);
  }

  get earlier() {
    return this.#earlier;
  }

  set earlier(newearlier) {
    this.#earlier.push(newearlier);
  }


    // Skapar ett objekt med bandets egenskaps information. 
  // Används när vi ska skicka in till "databasen.json". 
  databandInfo() {
    return {
      "Name": this.#name,
      "Info": this.#info,
      "Yearstarted": this.#yearstarted,
      "Yearended": this.#yearended,
      "Currentmembers": this.#current,
      "Earliermembers": this.#earlier
    };
  }


}

// Define the Musiker class that inherits from Band
export class Musiker extends Band {

  #yearbirth;
  #instrumentations;



  constructor(name, yearbirth) {
    super(name, null);
    this.#yearbirth = yearbirth;
    this.#instrumentations = [];
  }

  get Instrument() {
    return this.#instrumentations;
  }

  set Instrument(newinstrument) {
    this.#instrumentations.push(newinstrument);
  }

  get YearBirth() {
    return this.#yearbirth;
  }

  set YearBirth(newyearbirth) {
    this.#yearbirth = newyearbirth;
  }


    // Skapar ett objekt med musikerns egenskaps information. 
  // Används när vi ska skicka in till "databasen.json". 
  datamusikerInfo() {
    super.BandInfo();

    return {

      "Name": this.name,
      "Info": this.info,
      "Yearbirth": this.#yearbirth,
      "Instrument": this.#instrumentations,
      "Currentband": this.current,
      "Earlierband": this.earlier,
  
    };
  }


}
