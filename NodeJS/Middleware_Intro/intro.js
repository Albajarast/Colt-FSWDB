const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("common"));

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "albajara") {
    return next();
  }
  res.send("Sorry, you need a password");
};

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF WOOF");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("Sometimes I'm annoying");
});

app.listen("3000", () => {
  console.log("App running and listening on PORT 3000");
});
