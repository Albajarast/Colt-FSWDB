const button = document.querySelector("#color");

button.addEventListener("click", function () {
  const newColor = setColor(randomColor());
  const newComplementaryColor = setColor(complementary(randomColor()));

  document.documentElement.style.setProperty("--bg-primary", newColor);
  document.documentElement.style.setProperty(
    "--bg-primary-complementary",
    newComplementaryColor
  );

  const h1 = document.querySelector("h1");
  h1.innerText = newColor;
});

function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return [r, g, b];
}

function setColor(array) {
  const r = array[0];
  const g = array[1];
  const b = array[2];
  return `rgb(${r}, ${g}, ${b})`;
}

function complementary(array) {
  const r = Math.abs(array[0] - 255);
  const g = Math.abs(array[1] - 255);
  const b = Math.abs(array[2] - 255);

  const complementaryColor = [r, g, b];

  return complementaryColor;
}
