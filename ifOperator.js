// condition operators
// operators `?`
// example;
// person has age from 18, allow to enter
// another not allow to enter
// condition ? value1 : value2;
let age = 25;
let allow  = age >= 18 ? "yes" : "not"
// console.log(allow)

// if (age > 21) {
//     console.log("allow to get married!")
// } else {
//     console.log("not allow to get married!")
// }
// age > 21 ? console.log("allow to get married!") : console.log("not allow to get married!")

age < 21 ? console.log("allow to get married!") : age > 30 ? console.log("late to get married!")
: console.log("not allow to get married!")