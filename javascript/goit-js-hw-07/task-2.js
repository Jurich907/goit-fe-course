"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const listIngredients = document.querySelector("#ingredients");

const getItems = ingredients.map(element => {
  const list = document.createElement("li");
  list.innerText = element;
  return list;
});

listIngredients.append(...getItems);
