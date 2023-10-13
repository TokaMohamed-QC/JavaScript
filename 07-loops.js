// For loops
const names = ["Toka", "Mohamed"];

for (let i = 0; i < names.length ; i++){
    console.log(names[i]);
}

const numbers = [1, 2, 3, 4]

for (let j = 0; j < numbers.length; j++){
    console.log(numbers[j]);
}

// While loops
let password ="tomorrow"
let userGuess =""

while (userGuess != password){
    userGuess = prompt("Please enter your password")
}
alert("Login Successful");

//Do - While
let factorial = 1;
let number = 5;

do{
    factorial *= number;
    number--;
}
while(number > 0)

console.log(factorial);
