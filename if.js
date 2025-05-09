// Conditional statements
// if
let year = 2025;
if (year == 2025) console.log("happy new year"); // (1)
if (year == 2025) {
    console.log("happy new year");
    console.log("in 2025");
} else {
    console.log(`have written ${year} but we are in 2025.`)
}

// else if
if (year == 2025) {
    console.log("happy new year");
    console.log("in 2025");
} else if(year < 2025){
    console.log(`have written ${year} but it passed.`)
} else if(year > 2025){
    console.log(`have written ${year} but it is not reached.`)
}



