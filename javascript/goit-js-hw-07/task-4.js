"use strict";

const counterOfNumbers = document.querySelector("#counter");
const valueOfNumbers = document.querySelector("#value");
valueOfNumbers.textContent = 0;

const numbers = {
  state: {
    value: 0
  },
  decrement() {
    this.state.value -= 1;
  },
  increment() {
    this.state.value += 1;
  }
};

const changeNumbers = ({ target }) => {
  numbers[target.dataset.action]();
  value.textContent = numbers.state.value;
};

counterOfNumbers.addEventListener("click", changeNumbers);
