export default class Band {
  name;
  info;
  yearstarted;
  yearended;
  members;
  instrumentals;
  earliermembers;
  currentmembers;

  constructor(nameofband, yearstarted) {
    this.name = nameofband;
    this.info = '';
    this.yearstarted = yearstarted;  // int
    this.yearended = '';           // int
    this.currentmembers = [];
    this.earliermembers = [];
  }

  changeinfo(info) {
    this.info = info;
  }

  ended(year) {
    this.yearended = year;
  }

  addtocurrent(member) {
    this.currentmembers.push(member);
  }

  removfromcurrent(member) {
    const index = this.currentmembers.indexOf(member);
    if (index !== -1) {
      this.currentmembers.splice(index, 1);
      this.earliermembers.push(member);
    }
  }
}
