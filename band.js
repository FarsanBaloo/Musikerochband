export default class band {

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
   this.yearstarted = yearstarted;  //int
   this.yearended = none;           //int
   
   
   this.currentmembers = [];       
   this.earliermembers = [];  
  }

  changeinfo() {
    this.info = info;
  }

  ended(year)
  {
    this.yearended = year;
  }


  addtocurrent(member) 
  {
    this.members.push(member);
  }

  removfromcurrent(member) 
  {
    this.members.pop(member);
    this.earliermembers.push(member);
  }


}