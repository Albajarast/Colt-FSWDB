const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const { isLoggedIn, isAuthor, validateCampground } = require("../middleware");
const campgroundController = require("../controllers/campgroundController");

router
  .route("/")
  .get(catchAsync(campgroundController.index))
  .post(
    isLoggedIn,
    validateCampground,
    catchAsync(campgroundController.create)
  );

router.get("/new", isLoggedIn, (req, res) => {
  res.render("campgrounds/new");
});

router
  .route("/:id")
  .get(catchAsync(campgroundController.showOne))
  .put(
    isLoggedIn,
    validateCampground,
    catchAsync(campgroundController.updateOne)
  )
  .delete(isLoggedIn, isAuthor, catchAsync(campgroundController.destroyOne));

router.get(
  "/:id/edit",
  isLoggedIn,
  isAuthor,
  catchAsync(campgroundController.editOne)
);

module.exports = router;
