module.exports = class School {
  constructor() {
    this.studentBody = {};
  }
  roster() {
    return this.studentBody;
  }
  add(name, year) {
    if (this.studentBody[year] == undefined) {
      this.studentBody[year] = [name];
    } else {
      this.studentBody[year].push(name);
      this.studentBody[year].sort();
    }
  }
  grade(year) {
    if (this.studentBody[year] == undefined) {
      return [];
    } else {
      return this.studentBody[year].sort();
    }
  }
}
