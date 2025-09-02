/*no.1 Create a function that can create a triangle pattern according to the height we provide like the
following :
01
02 03
04 05 06
07 08 09 10*/


function trianglePattern(height){
  let angka = 1
  let row = ""
  for(i=1;i<=height;i++){
    for(j=1;j<=i;j++){
      row += String(angka).padStart(2, '0') + " "
      angka++
    }
    row += "\n"
  }
  return row
}
console.log(trianglePattern(4))


/*no. 2 Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".
● Parameters : n → total looping
○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
*/
function fizzBuzz(n){
  for(i=1;i<=n;i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz")
    }else if(i % 3 === 0){
      console.log("Fizz")

    }else if(i % 5 ===0){
      console.log("Buzz")
    }else{
      console.log(i)
    }
  }
}
fizzBuzz(20)

/* no. 3 Create a function to calculate Body Mass Index (BMI)
Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))2
● Parameters : weight & height
● Return values :
○ < 18.5 return “less weight”
○ 18.5 - 24.9 return “ideal”
○ 25.0 - 29.9 return “overweight”
○ 30.0 - 39.9 return “very overweight”
○ > 39.9 return “obesity”z
*/
function BMI(weight, height){
  let heightMeter = height / 100;
  let formulaBMI = weight / (heightMeter * heightMeter);
  let result =" "
  if (formulaBMI < 18.5){
    result="Less weight"
  }else if(formulaBMI >= 18.5 && formulaBMI <= 24.9){
    result="ideal"
  }else if(formulaBMI >= 25.0 && formulaBMI <= 29.9){
    result="overweight"
  }else if(formulaBMI >= 30.0 && formulaBMI <= 39.9){
    result="very overweight"
  } else{
    result="obesity"
  }
  return result += " " + formulaBMI.toFixed(2) 
}
console.log((BMI(150,160)))

// no.4 Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
function remove(){
  let angka = [1,2,3,4,5,6,7,8,9,10]
  let result = []

  for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 2 === 0) {   
      result.push(angka[i])     
    }
  }
  return result
}

console.log(remove())


// no.5 Write a function to split a string and convert it into an array of words
function convert(kata) {
  return kata.split(" ")  
}
console.log(convert("hello world")) 


// let input = 10
// let array = []
// for(let i=1;i<=input;i++){
//   array.push(i)
//   // console.log(i)
// }
// console.log(array)















