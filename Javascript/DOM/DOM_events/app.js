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

const thirdBtn = document.querySelector("#thirdBtn");
thirdBtn.addEventListener("click", function () {
  alert("Clicked!");
});

function twist() {
  console.log("TWIST!");
}

function shout() {
  console.log("SHOUT!");
}

const twistAndShout = document.querySelector("#twistAndShout");

twistAndShout.addEventListener("click", twist);
twistAndShout.addEventListener("click", shout);

// Click events Exercise

const hello = document.querySelector("#hello");
const goodbye = document.querySelector("#goodbye");

hello.addEventListener("click", function () {
  console.log("hello");
});

goodbye.addEventListener("click", function () {
  console.log("goodbye");
});
