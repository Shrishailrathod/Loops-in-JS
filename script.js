//  loops in javascript
// we use loops to perform repeated actions 
// for example if you are designed a task to print numbers from 1 to 100 it will be very hectic to do it manually 
// loops helps to automate (helps us to do ) such tasks easily 


// for loop
for(let i=0; i<100; i++){
    console.log(i+);
}

for in loop
const obj = {
    Name:"Rathod",
    age:22,
    comapany:"Rathod IT solutions",

}

for(const key in obj){
    const element = obj[key];
    console.log(key,element);

}

// // for of-loop
for (const c of "Rathod") {
    console.log(c);
}

// while loop
let i = 2;
while (i < 20) {
    console.log(i);
    i++;
}

// do while-loop
// here first it will run 1 time and then checks the condition
let i = 10;
do {
    console.log(i);
    i++;
} while (i < 6);
