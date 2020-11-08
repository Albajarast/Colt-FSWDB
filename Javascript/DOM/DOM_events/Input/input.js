const usernameInput = document.querySelector("#username");
const h1 = document.querySelector("h1");

usernameInput.addEventListener("input", (e) => {
  if (usernameInput.value !== "") {
    h1.innerText = "Welcome, " + usernameInput.value;
  } else {
    h1.innerText = "Enter Your Username";
  }
});
