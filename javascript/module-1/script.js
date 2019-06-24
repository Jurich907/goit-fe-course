'use strict'


// ----------------1


const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

const password = prompt('enter password');


if (password === null) {
    message = 'Отменено пользователем!';
} else if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать';
} else {
    message = 'Доступ запрещен, неверный пароль!';
} 

alert(message);



// ----------------2


const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = '';
let lostCredits = '';

const droidsPurchase = prompt('How many droids would you like to buy?');

if (droidsPurchase === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = droidsPurchase * 3000;
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        if (totalPrice < credits) {
            lostCredits = credits - totalPrice;
            console.log(`Вы купили ${droidsPurchase} дроидов, на счету осталось ${lostCredits} кредитов.`);
        }
    }
}


// ----------------3


const country = prompt('Выберите страну');
let price = '';

switch (country.toLowerCase()) {
    case 'китай':
    price = 100;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
    case 'южная америка':
    price = 250;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
    case 'австралия':
    price = 170;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
    case 'индия':
    price = 80;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
    case 'ямайка':
    price = 120;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
    default:
    console.log('В вашей стране доставка не доступна');
}




