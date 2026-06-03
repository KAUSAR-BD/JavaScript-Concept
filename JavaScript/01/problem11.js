// A triangle has sides 5, 12, and 13. Is it a right triangle?

let a = 5, b = 12, c = 13;

let isRightTriangle = (a**2 + b**2 === c**2);

if(isRightTriangle){
  console.log("It's a right triangle");
}else{
  console.log("It's not a right triangle");
}


