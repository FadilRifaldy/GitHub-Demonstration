{
// toString -> mengubah array menjadi string
let array1=[1,2,3]
console.log(array1.toString())

// JOIN -> Menggabungkan array menjadi sebuah string. Kita bisa menentukan karakter penghubungnya
let array2 = [1,2,3,4,5]
console.log(array2.join())
console.log(array2.join("-"))
console.log(array2.join(" "))

// POP -> Mengambil dan menghilangkan element terakhir dari suatu array
let array3 = [1,2,3,4,5]
console.log(array3.pop())
console.log(array3)

let lastIndex = array3[array3.length-1]

// push -> Menambah element baru di akhir suatu array
let array4 = [1,2,3,4,5]
console.log(array4)
array4.push(6)
console.log(array4)

// shift -> Mengambil dan menghilangkan element pertama dari suatu array
let array5=[1,2,3,4,5]
console.log(array5)
array5.shift()
console.log(array5)

// unshift -> Menambah element baru di awal suatu array
let array6=[1,2,3,4,5]
console.log(array6)
array6.unshift(6)
console.log(array6)

// concat
// menggabungkan dua atau lebih array menjadi satu array
let array7: (number|string|null)[] = [1,2,3,4,5]
let array8: (number|string|null)[] = [10,20,30]
let array9: (number|string|null)[] = array7.concat(array8, [100,200,300], 1,2,3,null)
console.log(array9)

// splice -> memotong atau menghapus beberapa element dari sebuah array
// .splice(starting point, delete count, item1 item 2 dst)
let array10 = ["jan","March","April","June"]
console.log(array10.splice(1))
console.log(array10)

let array11 = ["jan","feb","April","June"]
console.log(array11.splice(1,1))
console.log(array11)

let array12 = ["jan","feb","April","June"]
console.log(array12.splice(1,1,"Desember"))
console.log(array12)

// slice -> mengambil beberapa element dari sebuah array (copy)
// array.slice(start,end)
let array13 = ["jan","March","April","June","Jule","Agustus"]
console.log(array13.slice(1,4))
console.log(array13)

// map ->memanipulasi array baru dari hasil manipulasi array lama
// Array.map((value, index, array)) => {})

let array14 = [10,20,30]
let array15 = array14.map((value,index,array) => {return value * 2})
console.log(array15)

// array = []

// loop 1
// value = 10
// index = 0
// array = [10,20,30]
// return value * 2 => 10 * 2 = 20
// array result = [20]

// LOOP 2
  // value = 20
  // index = 1
  // array = [10, 20, 30]
  // return value * 2 => 20 * 2 = 40
  // array result = [20, 40]

  // LOOP 3
  // value = 30
  // index = 2
  // array = [10, 20, 30]
  // return value * 2 => 30 * 2 = 60
  // array result = [20, 40, 60]

  const studentData = [
    { name: "Joko", age: 22 },
    { name: "Bowo", age: 25 },
    { name: "Bahlil", age: 30 },
  ];
  const studentNames = studentData.map((value) => {
    return value.name;
  });
  console.log(studentNames);


/* ---------------------------------- NOTES --------------------------------- */
  console.log(String(1000));
  console.log(String({ name: "Jane Doe" }));

  const userData = {
    name: "John Doe",
    greetings: function () {
      return "Hellooo";
    },
  };

  console.log(userData.name);
  console.log(userData.greetings());

  const Array = {
    pop: () => {},
    join: () => {},
  };
}