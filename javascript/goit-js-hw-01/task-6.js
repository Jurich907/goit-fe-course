"use strict";

let input;
let total = 0;

while (input !== null) {
  input = prompt("Введите число");
  total += Number(input);
}

alert(`Общее число равно ${total}`);
