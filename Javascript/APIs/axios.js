// Bitcoin Price with axios

// axios
//   .get("https://api.cryptonator.com/api/full/btc-usd")
//   .then((res) => {
//     console.log(res.data.ticker.price);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const fetchBitcoinPrice = async () => {
  try {
    const res = await axios.get("https://api.cryptonator.com/api/full/btc-usd");
    console.log(res.data.ticker.price);
  } catch (err) {
    console.log("THERE HAS BEEN AN ERROR!!! ", err);
  }
};

const button = document.querySelector("#jokeButton");

button.addEventListener("click", () => {
  addNewJoke();
});

const joke = document.querySelector("#jokeDisplay");

const getDadJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  return res.data.joke;
};

const addNewJoke = async () => {
  const joke = await getDadJoke();
  jokeDisplay.innerText = joke;
};

//-------------------
// TV Shows search
//-------------------

const searchResults = document.querySelector("#search-results");

const form = document.querySelector("#search-form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const searchTerm = this.elements.query.value;
  const config = {
    params: {
      q: searchTerm,
    },
  };
  const movies = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  console.log(movies.data);
  getImagesAndAppend(movies.data);
});

const getImagesAndAppend = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      searchResults.append(img);
    }
  }
};
