// Define the Band class
export class Band {
  constructor(name, yearstarted) {
    this.name = name;
    this.info = '';
    this.yearstarted = yearstarted;
    this.yearended = null;
    this.currentmembers = [];
    this.earliermembers = [];
  }

  changeInfo(info) {
    this.info = info;
  }

  end(year) {
    this.yearended = year;
  }

  addToCurrent(musician) {
    this.currentmembers.push(musician);
  }

  removeFromCurrent(musician) {
    const index = this.currentmembers.indexOf(musician);
    if (index !== -1) {
      this.currentmembers.splice(index, 1);
      musician.addToEarlierBand(this);
    }
  }
}

// Define the Musiker class that inherits from Band
export class Musiker extends Band {
  constructor(name, yearbirth) {
    super(name, null);
    this.yearbirth = yearbirth;
    this.instrumentations = [];
  }

  addInstrument(instrument) {
    this.instrumentations.push(instrument);
  }

  getYearBirth() {
    return this.yearbirth;
  }

  setYearBirth(yearbirth) {
    this.yearbirth = yearbirth;
  }

  addBand(band) {
    this.currentbands.push(band);
  }

  addToEarlierBand(bandName) {
    this.earlierbands.push(bandName);
  }
}
