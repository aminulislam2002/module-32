// Exampl 01
const numbers = [10, 20, 30, 40];
const output = [];
for (const number of numbers) {
  const double = number * 2;
  output.push(double);
}
console.log(output);

// Example 02

function getDouble(numbers) {
  const output = [];
  for (const number of numbers) {
    const double = doubleIt(number);
    output.push(double);
  }
  return output;
}

const doubleIt = (num) => num * 2;

const result = getDouble(numbers);
console.log(result);

// Exaple 03 (Short cut)
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);
const makeDouble01 = numbers.map((num) => num * 2);
console.log(makeDouble01);
const makeDouble02 = numbers.map((x) => x * 2);
console.log(makeDouble02);
const makeDouble03 = [10, 20, 30, 40].map((x) => x * 2);
console.log(makeDouble03);
/**
 * 1. get an array
 * 2. for every elements do somethings (example: do double)
 * 3. store the result in an array
 * 4. return the result array
 */
