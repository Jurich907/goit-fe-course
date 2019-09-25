"use strict";

const findLongestWord = function(str) {
  let arr = str.split(" ");
  let max = arr[0];
  for (const el of arr) {
    if (el.length > max.length) {
      max = el;
    }
  }
  return max;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
