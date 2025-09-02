{
// JS VS TS
// dinamic tipe data -> statistik tipe data
// tipe data yang bisa di ubah -> tipe data yang tidak bisa diubah

let fullName = "fadil Rifaldy" //string - implisit style
fullName= "budiman"; //number
fullName = "afan" //null


let firstName:any = "joko"; // semua tipe data

let price: number = 5000; //explisit type
let discount = 1000;

console.log(price - discount);

price = 20000

console.log(price-discount)

// cara TS
// Compile = mengubah suatu hal dari satu bentuk ke bentuk lainnya
// install typescript = 'npm install typescript'
}