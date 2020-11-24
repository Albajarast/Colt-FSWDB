const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("APP Running and listening on Port 3000");
});

// app.use((req, res) => {
//   console.log("We got a new request!");
//   res.send("Hello, we got your request");
// });

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`Browsing the ${subreddit} route!`);
});

app.get("/r/:subreddit/:postID", (req, res) => {
  const { subreddit, postID } = req.params;
  res.send(
    `<h1>Browsing the ${subreddit} route! And the postID is: ${postID}</h1>`
  );
});

app.get("/", (req, res) => {
  res.send("Home route reached!");
});

app.get("/dogs", (req, res) => {
  res.send("Dogs route reached!");
});

app.post("/cats", (req, res) => {
  res.send("POST request to /cats!!! This is not a GET request!!!");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`<h1>Search results for: ${q}<h1>`);
});

// matches every request
app.get("*", (req, res) => {
  res.send("I don't know that route");
});
