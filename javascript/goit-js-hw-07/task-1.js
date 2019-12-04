"use strict";

const selectedCategories = document.querySelectorAll(".item");
console.log(selectedCategories.length);

const titles = selectedCategories.forEach(item =>
  console.log(
    item.querySelector("h2").textContent,
    item.lastElementChild.children.length
  )
);
