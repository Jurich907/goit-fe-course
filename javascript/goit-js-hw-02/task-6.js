"use strict";

let input;
const numbers = [];
let total = 0;

input = prompt("enter numbers");

while (input !== null) {
  if (isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(Number(input));
  }
  input = prompt("enter numbers");
}

for (let i = 0; i < numbers.length; i += 1) {
  total = total + numbers[i];
}

console.log(`Общая сумма чисел равна ${total}`);
