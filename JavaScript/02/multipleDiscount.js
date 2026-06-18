// A retail store offers a tiered discount scheme on purchases. For a purchase worth X, no discount is applied to the first 2000. The next 3000 of the purchase value receives a 10% discount, while any amount exceeding 5000 is eligible for a 20% discount. Once all applicable discounts have been applied, the customer receives an additional 300 coupon discount if the discounted total exceeds 4000. Finally, a 5% VAT is charged on the resulting amount. Given the value of X, determine the final amount the customer must pay.


let x = 3000 + 2000; 

let amount;

if (x <= 2000) {
    amount = x;
} 
else if (x <= 5000) {
    amount = 2000 + (x - 2000) * 0.9;
} 
else {
    amount = 2000 + (3000 * 0.9) + (x - 5000) * 0.8;
}

if (amount > 4000) {
    amount -= 300;
}

let finalAmount = amount * 1.05;

console.log(finalAmount);