"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const refs = {
  doc: document.querySelector("body"),
  startButton: document.querySelector('button[data-action="start"]'),
  stopButton: document.querySelector('button[data-action="stop"]')
};

const min = 0;
const max = colors.length;
let interval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startButton.addEventListener("click", () => {
  interval = setInterval(() => {
    refs.doc.style.backgroundColor =
      colors[randomIntegerFromInterval(min, max)];
  }, 500);
  refs.startButton.disabled = true;
});

refs.stopButton.addEventListener("click", () => {
  clearInterval(interval);
  refs.startButton.disabled = false;
});
