const numbers = [5, 10, 20, 15, 25, 35, 50, 30, 3, 14, 19, 28, 45];
const bigNumber = numbers.filter((number) => number > 20);
console.log(bigNumber);
const smallNumber = numbers.filter((number) => number < 20);
console.log(smallNumber);
const evenNumber = numbers.filter((number) => number % 2 === 0);
console.log(evenNumber);
const oddNumber = numbers.filter((number) => number % 2 === 1);
console.log(oddNumber);
