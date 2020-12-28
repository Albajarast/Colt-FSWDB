const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");

router.get("/register", (req, res) => {
  res.render("user/register");
});

router.post(
  "/register",
  catchAsync(async (req, res, next) => {
    try {
      const { email, username, password } = req.body;
      const user = new User({ email, username });
      const registeredUser = await User.register(user, password);
      req.login(registeredUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash(
          "success",
          "You have successfully registerd. Welcome to Yelp Camp!"
        );
        res.redirect("/campgrounds");
      });
    } catch (err) {
      req.flash("error", err.message);
      res.redirect("/register");
    }
  })
);

router.get("/login", (req, res) => {
  res.render("user/login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const { username } = req.user;
    // Capitalize the first letter of the username
    const showUser = username.replace(/^\w/, (c) => c.toUpperCase());
    req.flash("success", `Welcome back ${showUser}!`);
    const redirectURL = req.session.returnTo || "/campgrounds";
    delete req.session.returnTo;
    res.redirect(redirectURL);
  }
);

router.get("/logout", (req, res) => {
  const { username } = req.user;
  // Capitalize the first letter of the username
  const showUser = username.replace(/^\w/, (c) => c.toUpperCase());
  req.logOut();
  req.flash("success", `Goodbye ${showUser}!`);
  res.redirect("/campgrounds");
});

module.exports = router;
