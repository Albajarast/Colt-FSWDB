const express = require("express");
const path = require("path");
const app = express();
const data = require("./data.json");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); //sets the views directory to the relative path where the index.js is executed

app.get("/", (req, res) => {
  res.render("home", { name: "Homepage" });
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 100 + 1);
  res.render("rand", { random: num, name: "Random number generator" });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const subredditData = data[subreddit];
  if (subredditData) {
    res.render("subreddit", { ...subredditData });
  } else {
    res.render("notFound", { subreddit });
  }
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"];
  res.render("cats", { cats: cats, name: "Cats" });
});

app.listen(3000, () => {
  console.log("App running and listening on PORT 3000");
});
