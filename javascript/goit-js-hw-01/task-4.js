"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = "";
let lostCredits = "";

const droidsPurchase = prompt("How many droids would you like to buy?");

if (droidsPurchase === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = droidsPurchase * 3000;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    if (totalPrice < credits) {
      lostCredits = credits - totalPrice;
      console.log(
        `Вы купили ${droidsPurchase} дроидов, на счету осталось ${lostCredits} кредитов.`
      );
    }
  }
}
