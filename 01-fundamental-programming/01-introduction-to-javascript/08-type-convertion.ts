{// string convertion
String(50);
console.log(String(20))
console.log(String(null))
console.log(String(undefined))
console.log(String(true))
console.log(String({undefined}))
console.log(String([1,2,null,undefined,"something", 3]))

// numerik convertion
Number("500");
const score ="100"
console.log(Number(score))
console.log(Number("100A"))

// parseInt
console.log(parseInt("1000"))
console.log(parseInt("1000A"))

console.log(+"1000")

// boolean convertion
Boolean("string here")
console.log(Boolean("Hello"))
console.log(Boolean(""))
console.log(Boolean("1"))
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(null))
console.log(Boolean(undefined))

// falsy value
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(NaN))}