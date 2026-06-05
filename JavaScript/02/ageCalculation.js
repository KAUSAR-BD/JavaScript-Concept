// A grandfather is 6 times as old as his grandson. Their ages add up to 84. How old are they?

// x + 6x = 84
// 7x = 84
// x = 12

// grandson = total/multiplier + 1
// grandfather = total - grandson

let totalAgeSum = 84;
let ageMultiplier = 6;

let grandsonAge = totalAgeSum / (ageMultiplier + 1);
console.log("Grandson:",grandsonAge);

let grandfatherAge = totalAgeSum - grandsonAge;
console.log("Grandfather:",grandfatherAge);

