//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// ```plain
// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400
// ```

module.exports = class Year {
  constructor(input) {
    this.year = input
  }
  isLeap() {
  return this.year % 4 === 0 && (this.year % 100 != 0 || this.year % 400 === 0);
  }
}
// module.exports = class Year {
//   constructor(input) {
//     return this.number = input
//   }
//   isLeap() {
//     if (this.number % 400 === 0) {
//       return true;
//     } else if (this.number % 100 === 0) {
//       return false
//     } else if (this.number % 4 === 0) {
//       return true
//     } else {
//       return false
//     }
//   }
// }


// var Year = function(year) {
//   this.year = year;
// }

// Year.prototype.isLeap = function() { 
   // Test if year is leap year 
//   return this.year%4==0 && (this.year%100!=0 || this.year%400==0);
// }

// module.exports = Year;
