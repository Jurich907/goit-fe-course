"use strict";

const checkForSpam = function(str) {
  const lowetStr = str.toLowerCase();
  let res = "";
  if (lowetStr.includes("spam") || lowetStr.includes("sale")) {
    res = true;
  } else {
    res = false;
  }
  console.log(lowetStr);
  return res;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
