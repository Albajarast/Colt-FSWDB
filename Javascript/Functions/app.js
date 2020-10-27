const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9];
const array3 = [];

function lastElement(array) {
  if (array.length > 0) {
    return array[array.length - 1];
  }
  return null;
}

console.log(lastElement(array1));
console.log(lastElement(array2));
console.log(lastElement(array3));

function capitalize(string) {
  let capitalLetter = string[0].toUpperCase();
  return capitalLetter + string.slice(1, string.length);
}

console.log(capitalize("marroquí"));

function sumArray(numArray) {
  let sum = 0;
  for (let num of numArray) {
    sum += num;
  }
  return sum;
}

function returnDay(num) {
  switch (num) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return null;
  }
}

console.log(returnDay(1));
console.log(returnDay(3));
console.log(returnDay(52));

const squareNum = function (x) {
  return x * x;
};

const square = {
  area: function (side) {
    return side ** 2;
  },
  perimeter: function (side) {
    return side * 4;
  },
};

names = ["   timothee", "   darth_hater  ", "sassyfrassy   ", "   elton john"];

const cleanNames = function (array) {
  const newArray = array.map(function (element) {
    return element.trim();
  });
  return newArray;
};

//same result with nested arrow functions
const cleanNames2 = (array) => array.map((name) => name.trim());

const id1 = setTimeout(() => {
  console.log("Helloooo!");
}, 3000);

const id2 = setInterval(() => {}, 200);

clearInterval(id2); //It stops the interval set in the function above

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = (numArray) => numArray.filter((n) => n % 2 === 1);
const evenNumbers = (numArray) => numArray.filter((n) => n % 2 === 0);

// .filter() exercise
userNames = [
  "mark",
  "staceysmom1978",
  "q29832128232323",
  "carrie98",
  "MoanaFan",
];

const validUserNames = (array) => array.filter((name) => name.length < 10);

// .some() and .every() methods exercise
const nums1 = [2, 4, 6, 8];
const nums2 = [1, 4, 6, 8];
const nums3 = [1, 2, 3];

const allEvens = (numArray) => numArray.every((num) => num % 2 === 0);

//.reduce() practice

const prices = [1.5, 9.9, 34.5, 55.9, 90.99, 0.99];

//without .reduce() method
let total = 0;
for (let price of prices) {
  total += price;
}
console.log(total);

// with .reduce() method
prices.reduce((total, price) => {
  return total + price;
});

// find min value on the prices array
prices2.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

// Arrow functions and this keyword
const person3 = {
  firstName: "David",
  lastName: "López Albajara",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this.fullName());
    }, 3000);
  },
};
