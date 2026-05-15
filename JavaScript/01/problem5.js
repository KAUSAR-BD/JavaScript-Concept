// Store your birth year, for example 2001, in one variable. Then store your current age in another variable and display it in the console.


let myBirthYear = 1998;
let currentYear = new Date().getFullYear();
let age = currentYear - myBirthYear;

console.log("My current age:", age);