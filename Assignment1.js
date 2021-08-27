// Input.....
const readline = require("readline-sync");
  
// Taking Array from User....
let a = Number(readline.question());
let number = [];
for (let i = 0; i < a; ++i) {
  number.push(Number(readline.question()));
}
//console.log(number); //demo

// Taking Target form User....
let target = Number(readline.question());
//console.log(target); //demo

// Process....
for(var i = 0; i < a; i++){
    for(var j = i + 1; j < a; j++){
        if(number[i] + number[j] == target){
            // Output....
            console.log(i, j);
        }
    }
}
