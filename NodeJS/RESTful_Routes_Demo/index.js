const express = require("express");
const { parse } = require("path");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: uuid(),
    username: "Jaime",
    comment: "Probando esto de las RESTful routes",
  },
  {
    id: uuid(),
    username: "Pepe",
    comment: "El curso de SEO del ayuntamiento es totalmente decepcionante",
  },
  {
    id: uuid(),
    username: "Carlos",
    comment: "Tengo los cojones largos!",
  },
  {
    id: uuid(),
    username: "El abogado",
    comment: "Para abogado el que tengo aquí colgado",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const newComment = req.body;
  newComment.id = uuid();
  comments.push(newComment);
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((comment) => comment.id === id);
  res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params; //get comment's id
  const comment = comments.find((comment) => comment.id === id); //find comment using the id
  res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params; //get comment's id
  const foundComment = comments.find((comment) => comment.id === id); //find comment using the id
  const newCommentText = req.body.comment;
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
