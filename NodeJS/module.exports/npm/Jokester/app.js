const jokes = require("give-me-a-joke");
const colors = require("colors");

jokes.getRandomCNJoke((joke) => {
  // using only give-me-a-joke package
  console.log(joke);
  // using both packages, give-me-a-joke and colors
  console.log(joke.rainbow);
  console.log(joke.trap);
});
