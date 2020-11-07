const secondBtn = document.querySelector("#secondBtn");

secondBtn.onclick = function () {
  console.log("You clicked me!");
  console.log(`I'm printing from app.js!`);
};

function scream() {
  console.log("AAAAAAAAAAAAAAHH");
  console.log("Stop touching me!");
}

secondBtn.onmouseenter = scream;
