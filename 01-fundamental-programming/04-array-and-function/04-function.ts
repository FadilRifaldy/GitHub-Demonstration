// finalPrice = originalPrice - (originalPrice * discountRate)

// return -> mengembalikan nilai dari fungsi

// /* ----------------------------- Function Reuse ----------------------------- */
// kode 1
function calculateDiscountPrice1(originalPrice, discountRate) {
  const result = originalPrice - originalPrice * discountRate
  return result
}

const finalPrice3 = calculateDiscountPrice1(1_000_000, 10 / 100);
console.log(finalPrice3)

// kode 2
function calculateDiscountPrice2(originalPrice, discountRate){
    return originalPrice - originalPrice * discountRate
}
console.log(calculateDiscountPrice2(1000000,90/100))

/*
1. const finalPrice3 = calculateDiscountPrice(1_000_000, 10 / 100);
2. const finalPrice3 = function calculateDiscountPrice(originalPrice, discountRate) {
    return originalPrice - originalPrice * discountRate;
  }
3. const finalPrice3 = function calculateDiscountPrice(1_000_000, 10 / 100) {
    return 1_000_000 - 1_000_000 * 10 / 100;
  }
4. const finalPrice3 = function calculateDiscountPrice(1_000_000, 10 / 100) {
    return 900_000
  }
5. 4. const finalPrice3 = 900_000
*/

/* -------------------------------- Structure ------------------------------- */
/*
function functionName(parameter1, parameter2, paramter3) {
  code to be executed
  return functionResult
}
*/

/* ------------------- Function declaration vs expression ------------------- */
// Perbedaan: 1. syntax, 2. hoisting

// Function declaration
function greeting1() {
  return "Helloooo";
}

console.log(greeting1());

// Function expression
// const greeting2 = function greeting() {
//   return "Helloooo";
// }; // bentuk 1

// const greeting2 = function () {
//   return "Helloooo";
// }; // bentuk 2

const greeting2 = () => {
  return "Helloooo";
}; // bentuk 3 | arrow function

console.log(greeting2());

/* ---------------------------------- NOTES --------------------------------- */
const someArray = [1, 2, 3];
someArray.map((value) => {});
someArray.map(function (value) {});
someArray.map(function someFunction(value) {});