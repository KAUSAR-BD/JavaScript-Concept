// A customer purchases products from three categories: Electronics worth 5,000, Clothing worth 3,000, and Grocery worth 2,000. The store offers a 10% discount on Electronics and a 20% discount on Clothing if the clothing purchase exceeds 2,500. Grocery items do not receive any discount. After applying these category-wise discounts, if the total amount exceeds 8,000, an additional 5% discount is applied to the discounted total. Furthermore, a coupon worth 500 can be used only if at least one Electronics item is purchased. After all applicable discounts and coupons are applied, a VAT of 7.5% is added to the final amount. Calculate the total amount the customer must pay.


let electronics = 5000;
let clothing = 3000;
let grocery = 2000;
let coupon = 500;

let electronicsDiscount = electronics - electronics * 0.1;

let clothingDiscount = clothing > 2500 ? clothing - clothing * 0.2 : clothing;

let afterDiscountTotalAmount = electronicsDiscount + clothingDiscount + grocery;

if (afterDiscountTotalAmount > 8000) {
  afterDiscountTotalAmount =
    afterDiscountTotalAmount - afterDiscountTotalAmount * 0.05;
}

let couponAmount = afterDiscountTotalAmount;

if (electronics > 0) {
  couponAmount = afterDiscountTotalAmount - coupon;
}

let finalAmount = couponAmount + couponAmount * 0.075;

console.log(finalAmount); 
