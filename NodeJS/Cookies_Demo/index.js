const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("HO HO HO! SANTA HAS COME!");
});

app.get("/greet", (req, res) => {
  const { name, animal } = req.cookies;
  res.send(`HEY THERE, ${name}! You are an: ${animal}`);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "Stevie Wonder");
  res.cookie("animal", "Amazing Giant Bee!");
  res.send("OK, SENT YOU A COOKIE!!!");
});

app.listen("3000", (req, res) => {
  console.log("App running and listening on PORT 3000");
});
