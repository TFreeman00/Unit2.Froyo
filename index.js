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

const flavors = (stringArray = userInputString.split(","));

// for (let i = 0; i < stringArray.length; i++) {
//   const str = stringArray[i];
//   const flavor = parseInt(str);
//   flavors.push(flavor);
// }

console.log(flavors);
console.log(`You have given ${getLength(flavors)} flavors.`);

// length
function getLength(flavors) {
  let length = 0;

  for (let i = 0; i < flavors.length; i++) {
    length++;
  }
  return length;
}
