const palindromes = function (str) {
// if reversing a string returns the same as the original string, return true. else return false.
  const cleanStr = str.toLowerCase().replace(/[^\w]|_/g, '');
  const len = cleanStr.length;
  const mid = Math.floor(len / 2);
  console.log(cleanStr);

  for (let i = 0; i < mid; i++) {
    if (cleanStr[i] !== cleanStr[len - 1 - i]) {
      return false;
    }
  }

  return true;
};

console.log(palindromes('Racecar!'));

// Do not edit below this line
module.exports = palindromes;
