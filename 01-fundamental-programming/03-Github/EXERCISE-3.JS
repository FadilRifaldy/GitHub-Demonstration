// // no.1 Write a code to display the multiplication table of a given integer.
let angka = 9
let batas = 10
for(i=1;i<=batas;i++){
console.log(angka+"x"+i+"="+angka*i)
}

// // no.2 Write a code to check whether a string is a palindrome or not.
// let kata = "madam"
// let reversed = kata.split("").reverse().join("")

// if(kata === reversed){
//     console.log(kata + " Palindrom")
// }else{
//     console.log(kata + " not Palindrom")
// }

// // no. 3 Write a code to convert centimeter to kilometer.
// let cm = 100000
// let perhitungan = cm/100000
// console.log(perhitungan+"km")

// // no.4 Write a code to format number as currency (IDR)
// let value = 1000
// let rupiah = value.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
// console.log(rupiah)

// // no. 5 Write a code to remove the first occurrence of a given “search string” from a string
let str = "hello world"
let hasil = str.replace("ell", "")
console.log(hasil)

// // no.6 Write a code to capitalize the first letter of each word in a string
// kode 1
// let input = "hello world"
// let letter = input.split(" ")
// let result = ""
// for(i=0;i<letter.length;i++){
//     let first = letter[i].charAt(0).toUpperCase()
//     let second = letter[i].slice(1)
//     result +=first+second

//     if(i<letter.length-1){
//         result+=" "
//     }
// }
// console.log(result)

// // kode 2
// let kalimat = "hello world from javascript";
// let hasil = kalimat.split(" ") .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1)) .join(" "); 
// console.log(hasil);

// no.7 Write a code to swap the case of each character from string
// let inputText = "ALKSbnshhhbsAUIBhh"
// let textSwapped = ""
// for(i=0;i<inputText.length;i++){
//     let text = inputText[i]
//     if(text === text.toUpperCase()){
//         textSwapped += text.toUpperCase()
//     }else{
//         textSwapped += text.toLowerCase()
//     }
// }
// console.log(textSwapped)

// no.8 Write a code to find the largest of two given integers
// let num1 = 42
// let num2 = 50
// if (num1>num2){
//     console.log(num1)
// }else{
//     console.log(num2)
// }

//no.9 Write a conditional statement to sort three numbers
let num1 = 1000
let num2 = 100
let num3 = 50
let kecil, sedang, besar
if (num1<=num2 && num1<=num3){
    kecil=num1
    if(num2<=num3){
        sedang=num2
        besar=num3
    }else{
        sedang=num3
        besar=num2
    }
}else if(num2<=num1 && num2<=num3){
    kecil=num2
    if(num1<=num3){
        sedang=num1
        besar=num3
    }else{
        sedang=num3
        besar=num1
    }
}else{
    kecil=num3
    if (num1 <= num2) {
    sedang = num1;
    besar = num2;
  } else {
    sedang = num2;
    besar = num1;
  }
}
console.log(kecil,sedang,besar)

// no.10 Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
let input ="halo"
if (typeof input === "string"){
    console.log(1)
}else if(typeof input === "number"){
    console.log(2)
}else{
    console.log(3)
}

// // no.11 Write a code to change every letter a into * from a string of input
let inputKata = "An apple a day keeps the doctor away".toLowerCase()
let letter = inputKata.replace(/a/g, "*");

console.log(letter);











