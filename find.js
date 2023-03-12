const numbers = [55, 10, 20, 15, 25, 35, 50, 30, 3, 14, 19, 28, 45];
const fiveDevidedAll = numbers.filter((number) => number % 5 === 0);
console.log(fiveDevidedAll);
const firstFiveDevided = numbers.find((number) => number % 5 === 0);
console.log(firstFiveDevided);
const products = [
  {
    name: "Vivo",
    model: "Y33s",
    price: 25990,
  },
  {
    name: "Oppo",
    model: "F21s",
    price: 20990,
  },
  {
    name: "Iphone",
    model: "13 Pro Max",
    price: 115000,
  },
];
const cheap = products.find((product) => product.price < 50000);
console.log(cheap)
