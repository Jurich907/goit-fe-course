'use strict'

// -----------------1


let input;
const numbers = [];
let total = 0;

input = prompt('enter numbers');

while (input !== null) {
    if (isNaN(Number(input))){
        alert('Было введено не число, попробуйте еще раз');
    } else {
        numbers.push(Number(input));
    }
    input = prompt('enter numbers');
}

for (let i = 0; i < numbers.length; i += 1) {
    total = total + numbers[i];
}

console.log(`Общая сумма чисел равна ${total}`);


// -----------------2


const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let inputSecond;

while (true) {
    inputSecond = prompt('enter password');
    if (inputSecond === null) {
        break;
    }
    else if (passwords.includes(inputSecond)) {
        alert('Добро пожаловать');
        break;
    } else if (attemptsLeft > 1) {
        attemptsLeft = attemptsLeft - 1;
        alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
    } else {
        alert('У вас закончились попытки, аккаунт заблокирован!');
        break;
    }
}