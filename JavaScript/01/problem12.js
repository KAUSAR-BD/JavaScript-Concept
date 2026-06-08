// A number is increased by 15% and becomes 230. What was the original number?


const finalValue = 230;
const increasePercent = 15;

const originalNumber = finalValue / (1 + increasePercent / 100);

console.log(originalNumber.toFixed(2));
