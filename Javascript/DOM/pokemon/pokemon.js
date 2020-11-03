const container = document.querySelector("#container");
const ENDPOINT_URL = "https://pokeapi.co/api/v2/pokemon/";
let pokemons = [];

const fetchPokemon = async (url, index) => {
  const fetchURL = url + index;
  const res = await fetch(`${fetchURL}`);
  const data = await res.json();
  pokemon.name = data.species.name;
  pokemon.img = data.sprites.front_default;
  pokemon.types = data.types;
};

function getPokemon(URL, index) {
  let pokemon = {};

  fetchPokemon(URL, index);

  return pokemon;
}

pokemon = getPokemon(ENDPOINT_URL, 1);
pokemons.push(pokemon);
console.log(pokemon);

// for (let i = 1; i <= 2; i++) {
//   let index = i;
//   pokemon = getPokemon(ENDPOINT_URL, index);
//   console.log(index, pokemon);
//   pokemons.push(getPokemon(ENDPOINT_URL, index));
// }
// console.log(pokemons);

// for (let i = 1; i <= 9; i++) {
//   const pokemonCard = document.createElement("div");
//   pokemonCard.classList.add("pokemon-card");
//   container.appendChild(pokemonCard);
//   const name = document.createElement("h3");
//   const sprite = document.createElement("img");
//   pokemon = getPokemon(ENDPOINT_URL, i);
//   sprite.src = pokemon.img;
//   name.innerText = pokemon.name;
//   pokemonCard.appendChild(sprite);
//   pokemonCard.appendChild(name);
// }
