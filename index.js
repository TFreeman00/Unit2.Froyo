// const dinner = {
//   hanburger: 12,
//   steak: 20,
//   soup: 8,
//   macAndCheese: 14,
//   soupAndSalad: 16,
// };

// console.log(dinner);

// const price = Object.values(dinner);
// let = totalCost = 0;
// for (let i = 0; i < price.length; i++) {
//   totalCost += price[i];
// }

// console.log(totalCost);

// dinnerCost = (total) => {
//   for (let i = 0; i < price.length; i++) {
//     return total;
//   }
// };

// froyo Assignment

// console

const userInputString = prompt(
  "Please enter some flavors separated by commas.",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

// split the input
const flavors = (stringArray = userInputString.split(","));

// initial objects
const order = {
  vanilla: 0,
  strawberry: 0,
  coffee: 0,
};

// one way to write it

for (let i = 0; i < flavors.length; i++) {
  if (flavors[i] === "vanilla") {
    order.vanilla++;
  }
  if (flavors[i] === "strawberry") {
    order.strawberry++;
  }
  if (flavors[i] === "coffee") {
    order.coffee++;
  }
}

// A more consice way to write the code not completely grasped i knoe we will learn this next
// const order = flavors.reduce((acc, flavor) => {
//   acc[flavor.trim()] = (acc[flavor.trim()] || 0) + 1;
//   return acc;
// }, {});

console.log(order);
