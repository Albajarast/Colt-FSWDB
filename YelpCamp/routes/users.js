const express = require("express");
const passport = require("passport");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const userController = require("../controllers/userController");
const { get } = require("./reviews");

router
  .route("/register")
  .get(userController.registerForm)
  .post(catchAsync(userController.registerOne));

router
  .route("/login")
  .get(userController.loginForm)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    userController.login
  );

router.get("/logout", userController.logout);

module.exports = router;
