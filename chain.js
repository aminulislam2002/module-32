const users = [{ name: "Aminul", id: 130, depeartment: "CST" }];
// get name
console.log(users[0].name); // return Aminul
const data = {
  name: "Emon",
  emonData: [
    { name: "Aminul", id: 130, depeartment: "CST" },
    { name: "Aminul Islam", id: 131, depeartment: "CST" },
  ],
};
console.log(data.emonData[0].name); // return Amiul

const emonAddress = {
  country: "Bangladesh",
  homeDistric: {
    zilla: "Pirojpur",
    homeTown: {
      upoZilla: "Mathbaria",
      home: {
        postOffice: "Bukhaitola Bandhob Para",
        hous: {
          street: "East Bukhaitola",
          housNomber: 101,
          floor: "Third floor",
          floorSide: "Right",
        },
      },
    },
  },
};
// Get Floor Side
console.log(emonAddress.homeDistric.homeTown.home.hou?.floorSide); // This is Optional Chaining
console.log(emonAddress.homeDistric.homeTown.home.hous.floorSide); // return Right
