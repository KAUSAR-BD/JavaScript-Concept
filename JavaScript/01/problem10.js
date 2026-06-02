// The average of five numbers is 18. Four of the numbers are 12, 20, 15, and 23. What is the fifth number?

// The average of five numbers is 18, total sum 5*18 = 90
// sum of four known number is 12+20+15+23 = 70
// the fith number is 90-70=20


let totalSum = 18 * 5;
let sumOfFourKnownNumbers = 12 + 20 + 15 + 23;

let fifthNumber = totalSum - sumOfFourKnownNumbers;

console.log(fifthNumber);