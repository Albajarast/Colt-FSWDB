const { kMaxLength } = require("buffer");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/movieApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Open");
  })
  .catch((err) => {
    console.log("Connection error!");
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// Create a new entry in the collection 'movies' of the DB 'movieApp'
// const amadeus = new Movie({
//   title: "Amadeus",
//   year: 1986,
//   score: 9.2,
//   rating: "R",
// });

// In order to storage in the DB and collection we need to save it
// amadeus.save()

// Movie.insertMany([
//   { title: "Amelie", year: 2001, socre: 8.3, rating: "R" },
//   { title: "Alien", year: 1979, socre: 8.1, rating: "R" },
//   { title: "The Iron Giant", year: 1999, socre: 7.5, rating: "PG" },
//   { title: "Stand by Me", year: 1986, socre: 8.5, rating: "R" },
//   { title: "Moonrise Kingdom", year: 2012, socre: 7.3, rating: "PG.13" },
// ])
//   .then((data) => {
//     console.log("Insert Many finalized successfully");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("There has been an error!");
//     console.log(err);
//   });
