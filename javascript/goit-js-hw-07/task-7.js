"use strict";

const fontControl = document.querySelector("#font-size-control");
const textTitle = document.querySelector("#text");
textTitle.style.fontSize = "16px";

const valueFontSize = () => {
  const fontSize = 16;
  const textZoom = (fontControl.value / 100) * 2;
  textTitle.style.fontSize = `${fontSize * textZoom}px`;
};

fontControl.addEventListener("input", valueFontSize);