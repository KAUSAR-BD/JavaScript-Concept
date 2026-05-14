// You are playing a game where you start with 100 points. Each mistake deducts 10 points from your score. If you make 3 mistakes, calculate your remaining points and display the result in the console.


let initialPint = 100;
let mistakes = 3;

let pointLost = mistakes * 10;
let remainingPionts = initialPint - pointLost;

console.log("Remaining points:", remainingPionts);
