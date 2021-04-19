// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//   let reversedStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str.charAt(i);
//   }
//   return reversedStr;
// }

// function reverse(str) {
//   let reversedStr = "";
//   for (character of str) {
//     reversedStr = character + reversedStr;
//   }
//   return reversedStr;
// }

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

// function reverse(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverse(str.substr(1)) + str.charAt(0);
//   }
// }

module.exports = reverse;
