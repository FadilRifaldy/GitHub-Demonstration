// break
// hard stop. (switch cas & loop)

for(let i = 0; i<10;i++){
    if(i === 5){
         console.log("angka 5 ditemukan")
         break
    }
    console.log("loop")

}

let studentList = ["joko","anwar","widodo","eko","patria"]
for(let i=0;i<studentList.length;i++){
    if(studentList[i] === "widodo"){
        console.log("widodo ditemukan")
        break
    }else{
        console.log("widodo tidak ditemukan")
    }

}

// continue
// soft stop/skipped
for (let i = 0; i<5;i++){
    if (i ===2){
        continue
    }
    console.log(i)
}

/* ---------------------------------- NOTES --------------------------------- */
const arrayRandom = [1, 2, null, undefined, "hello"];
console.log(arrayRandom.length);