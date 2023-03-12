const numbers = [10, 20, 30, 40, 50];
const halfOffNumber = numbers.map((half) => half / 2);
console.log(halfOffNumber);
const friends = ["Aminul", "Tamima", "Emon0", "Ema", "Mihtun", "Miraj"];
const firstLetterOffFriends = friends.map((fLetter) => fLetter[0]);
console.log(firstLetterOffFriends);
const friendsNameLength = friends.map((fLength) => fLength.length);
console.log(friendsNameLength);
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
const productsName = products.map((names) => names.name);
console.log(productsName);
const productsModel = products.map((pModel) => pModel.model);
console.log(productsModel);
