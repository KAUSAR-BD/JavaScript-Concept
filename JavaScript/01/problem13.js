// You earn 800 taka today and decide to save 30% of it. Thirty percent of 800 taka is 240 taka, so you save 240 taka. The remaining 560 taka is available for spending. Since your spending amount is more than 500 taka, you will buy a shirt. Therefore, after saving 240 taka, you will spend 560 taka and buy a shirt.




let income = 800;
let savings = income * 0.3;
let spending = income - savings;

if (spending > 500) {

  console.log("You will buy a shirt");

} else if (spending >= 300 && spending <= 500) {

  console.log("You will buy snacks");

} else {

  console.log("You will just save the money");
  
}
