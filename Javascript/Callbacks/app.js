const delay = 1000;
const colorBox = document.getElementById("colorBox");
colorBox.style.transition = `background-color ${delay}ms ease-in-out`;
const colorBox2 = document.getElementById("colorBox2");
colorBox2.style.transition = `background-color ${delay}ms ease-in-out`;

// Function with promises
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      colorBox.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

const rainbow = (delay) => {
  delayedColorChange("violet", delay)
    .then(() => delayedColorChange("indigo", delay))
    .then(() => delayedColorChange("blue", delay))
    .then(() => delayedColorChange("green", delay))
    .then(() => delayedColorChange("yellow", delay))
    .then(() => delayedColorChange("orange", delay))
    .then(() => delayedColorChange("red", delay));
};

rainbow(delay);
setInterval(() => {
  rainbow(delay);
}, delay * 7);

// Async function (automatically generates a promise)

const delayedColorChange2 = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      colorBox2.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function rainbow2(delay) {
  await delayedColorChange2("red", delay);
  await delayedColorChange2("orange", delay);
  await delayedColorChange2("yellow", delay);
  await delayedColorChange2("green", delay);
  await delayedColorChange2("blue", delay);
  await delayedColorChange2("indigo", delay);
  await delayedColorChange2("violet", delay);
}

rainbow2(delay);
setInterval(() => {
  rainbow2(delay);
}, delay * 7);
