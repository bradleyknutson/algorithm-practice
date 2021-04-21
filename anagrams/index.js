// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const stringAMap = mapString(stringA);
  const stringBMap = mapString(stringB);

  if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length)
    return false;
  for (char in stringAMap) {
    if (stringAMap[char] !== stringBMap[char]) return false;
  }
  return true;
}

const mapString = (str) => {
  const strMap = {};
  for (char of str.replace(/[^\w]/g, "").toLowerCase()) {
    strMap[char] = strMap[char]++ || 1;
  }
  return strMap;
};

// function anagrams(stringA, stringB) {
//   return sortStr(stringA) === sortStr(stringB);
// }

// const sortStr = (str) => {
//   return str.replace(/[^\w]/g).toLowerCase().split("").sort().join("");
// };

module.exports = anagrams;
