{// for let -> general type. bisa digunakan loop secara general
// for (let i=0; i<10; i++)

// for of -> kita pakai untuk melakukan looping di suatu array
// for(let i of array)

// for in -> kita pakai untuk melakukan looping di suatu array atau object
// for(let i in array/object)

// contoh for of
let array1 = [100,200,300]
for (let element of array1){
        console.log(element)

}

// LOOP 1
// element = 100
// console.log(element) => console.log(100)

// LOOP 2
// element = 200
// console.log(element) => console.log(200)

// LOOP 3
// element = 300
// console.log(element) => console.log(300)


// contoh for in
let array2 = ["joko", "bowo","bahlil"]
for(let index in array2){
    console.log(index)
}

let object1 ={name: "joko", age:25, address:"solo"}
for(let key in object1){
    console.log(key)
    console.log(object1[key])
}

// NOTES
 













}