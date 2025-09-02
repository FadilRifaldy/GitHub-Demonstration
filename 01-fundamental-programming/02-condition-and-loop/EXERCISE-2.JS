// // no. 1 Write a code to check whether the number is odd or even
// let number = 2
// if(number % 2 === 0){
//     console.log(number +" adalah bilangan genap");
// }else{
//     console.log(nuumber +" adalah bilangan ganjil");
// }

// // no. 2 Write a code to check whether the number is prime number or not
// let angka = 6

// if (angka <= 1) {
//   console.log(angka + " adalah bukan bilangan prima");
// } else {
//   let prima = true;
  
//   for (let i = 2; i <= Math.sqrt(angka); i++) {
//     if (angka % i === 0) {
//       prima = false;
//       break;
//     }
//   }

//   if (prima) {
//     console.log(angka + " adalah bilangan prima");
//   } else {
//     console.log(angka + " adalah bukan bilangan prima");
//   }
// }

// // no 3. Write a code to find the sum of the numbers 1 to N
// let N = 5
// let total = 0
// let proses = ""

// for (let i = 1; i <= N; i++){
//     total += i;
//     proses += i;
//     if(i < N){
//         proses += "+"
//     }
// }
// console.log(N +"->" + proses+"=" + total)

// no. 4 Write a code to find factorial of a number
// kode 1
let X = 5
let factorial = 1
let flow = ""

for (let i = X; i >= 1; i--){
    factorial *= i
    flow += i
    if (i > 1){
        flow +="x"
    }
}
console.log(X+"!"+ "->" + flow+ "=" + factorial)

// kode 2
let A = 5
let faktorial = 1
for (let i=A; i>=1; i--){
    faktorial *= i
}
console.log(A +"!"+"="+faktorial)

//no. 5 Write a code to print the first N fibonacci numbers
let N = 15
let awalan1 = 1
let awalan2 = 1
sum=1
sum = awalan1 + awalan2
for (let i=2; i<N; i++){
    sum = awalan1+awalan2
    awalan1=awalan2
    awalan2=sum
}
console.log(N+"="+sum)


