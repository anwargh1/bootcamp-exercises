/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function (number, currentNumber = number) {
  if (number === 1 || number < 1) {
    return currentNumber;
  }

  currentNumber *= number - 1;
  number--;

  return findFactorial(number, currentNumber);
};

//Exercise 2
const reverseString = function (string, newString = "") {
  if (string.length === 0) {
    return newString;
  }
  newString += string.slice(string.length - 1);
  string = string.slice(0, string.length - 1);

  return reverseString(string, newString);
};

//Exercise 3
const arr1 = [1, 2, 3];
const arr2 = [];

const swap = function (arr1, arr2) {
  if (arr1.length === 0) {
    return;
  }
  arr2.push(arr1.splice(0, 1)[0]);

  return swap(arr1, arr2);
};

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap };
