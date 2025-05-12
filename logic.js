// Logical Operators
// OR || one of them must be true
let health = false;
let height = 180;
let Rwandan = false;

// if (health === true || height > 170 || Rwandan === true) {
//     console.log("allow to be soldier")
// } else {
//     console.log("not allow to be soldier")
// }

// AND && all must be true
let allowed;
if (health === true && height > 170 && Rwandan === true) {
    allowed = true;
    // console.log("allow to be soldier")
} else {
    // console.log("not allow to be soldier")
    allowed = false;
}
// Not !
if (!allowed) {
    console.log("not allow to be soldier")
} else {
    console.log("allow to be soldier")
}
// ?? = Nullish coleasing operator
let name = null;
console.log(name ?? "Name")


