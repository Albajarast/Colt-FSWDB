//****************************//
// .getElementById() exercise //
//****************************//
const image = document.getElementById("unicorn");
const heading = document.getElementById("mainHeading");

//****************************************************************//
// .getElementsByTagName() and .getElementsByClassName() practice //
//****************************************************************//
const allImages = document.getElementsByTagName("img");
const squareClassImag = document.getElementsByClassName("square");

//***************************//
// .querySelector() practice //
//***************************//
const paragraph = document.querySelector("p"); // It returns the first matching element
const paragraphs = document.querySelectorAll("p"); // It returns a collection of all matching paragraph elements

const myClass = document.querySelector(".myClass"); // It returns the first matching element with class "myClass"
const myId = document.querySelector("#myId"); // It returns the first matching element with id "myID"

//***************************//
// .querySelector() exercise //
//***************************//

const doneTodos = document.querySelectorAll(".done");
const checkbox = document.querySelector('input[type="checkbox"]');

//***************************************************//
// .innerHTML() .textContent() .innerText() exercise //
//***************************************************//

document.querySelector("span").innerText = "Disgusting";

//**********************************//
// manipulating attributes exercise //
//**********************************//
document
  .querySelector("#egg")
  .setAttribute(
    "src",
    "https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg"
  );
document.querySelector("#egg").setAttribute("alt", "chicken");

//alternative methods:
document.querySelector("#egg").src =
  "https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg";
document.querySelector("#egg").alt = "chicken";

//******************************//
// style manipulation exercises //
//******************************//
const container = document.querySelector("#container");
container.style.textAlign = "center";
const image = document.querySelector("img");
image.style.width = "150px";
image.style.borderRadius = "50%";

// Rainbow exercise
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const rainbow = document.querySelectorAll("span");
for (let i = 0; i < rainbow.length; i++) {
  rainbow[i].style.color = colors[i];
}
// alternative method to access each letter using the .entries() method of an array,
// that generates an array iterator
for (let [index, letter] of rainbow.entries()) {
  letter.style.color = colors[index];
}

//*********************//
// classList exercises //
//*********************//
const liList = document.querySelectorAll("li");
for (let li of liList) {
  li.classList.toggle("highlight");
}

//*********************************************************//
// Button practice using createElement() and appendChild() //
//*********************************************************//
const container = document.querySelector("#container");

for (let i = 0; i < 100; i++) {
  const button = document.createElement("button");
  button.innerText = "Hey!";
  container.appendChild(button);
}

//***********************************//
// Pokemon exercise - pokeapi images //
//***********************************//
const container = document.querySelector("#container");
for (let i = 1; i <= 150; i++) {
  const sprite = document.createElement("img");
  sprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  container.appendChild(sprite);
}
