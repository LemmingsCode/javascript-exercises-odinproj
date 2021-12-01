const fibonacci = function (input) {
  if (input < 0) return 'OOPS';
  const strToNum = parseInt(input, 10);
  let n1 = 0; let n2 = 1; let
    nextTerm;
  for (let i = 1; i <= strToNum; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return n1;
};

console.log(fibonacci(''));

// Do not edit below this line
module.exports = fibonacci;
