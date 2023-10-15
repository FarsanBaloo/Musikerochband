export default class musiker {

  name;
  info;
  yearbirth;
  currentbands;
  earlierbands;
  instrumentations;

  constructor(name, yearbirth) {
    this.name = name;
    this.info = '';
    this.yearbirth = yearbirth;
    this.currentbands = [];
    this.earlierbands = []
    this.instrumentations = [];
  
  }

  addband(band) {
    this.currentbands.push(band);
  }

  addinstrument(instrument) {
    this.instrumentations.push(instrument);
  }

  addearlierband(band) {
    this.earlierbands.push(band);
  }

  getname() {
    return this.name;
  }

  getinfo() {
    return this.info;
  }

  getyearbirth() {
    return this.yearbirth;
  }

  getcurrentband() {
    return this.currentbands;
  }

  getinstrumentation() {
    return this.instrumentations;
  }

  getearlierband() {
    return this.earlierbands;
  }

  setname(name) {
    this.name = name;
  }

  setinfo(info) {
    this.info = info;
  }

  setyearbirth(yearbirth) {
    this.yearbirth = yearbirth;
  }

  setcurrentband(currentband) {
    this.currentbands = currentband;
    
  }


}