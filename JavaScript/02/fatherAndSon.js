// A father is 3 times as old as his son. Their ages add up to 48. How old is the son and father?

// x + 3x = 48
// 4x = 48
// x = 12

// son = total/multiplier + 1
// father = total - son

let totalAgeSum = 48;
let ageMultiplier = 3;

let sonAge = totalAgeSum / (ageMultiplier + 1);
console.log("Son:",sonAge);

let fatherAge = totalAgeSum - sonAge;
console.log("Father:",fatherAge);

