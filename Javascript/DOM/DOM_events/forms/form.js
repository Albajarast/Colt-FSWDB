const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = form.elements.product;
  const quantity = form.elements.qty;
  addToList(product, quantity);
  product.value = "";
  quantity.value = "";
  document.querySelector("#product").focus();
});

function addToList(product, qty) {
  let newItem = document.createElement("li");

  const list = document.querySelector("#list");

  newItem.innerText = `${qty.value} ${product.value}`;
  list.appendChild(newItem);
}
