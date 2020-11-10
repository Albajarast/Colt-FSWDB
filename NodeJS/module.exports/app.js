const math = require("./math");

console.log(math.square(2));
console.log(math.add(2, 3));
console.log(math.PI);

const allCats = require("./shelter");

for (let cat of allCats) {
  console.log(cat);
}
