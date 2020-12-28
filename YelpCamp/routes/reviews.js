const express = require("express");
const { models } = require("mongoose");
const router = express.Router({ mergeParams: true });
const Campground = require("../models/campgrounds");
const Review = require("../models/review");
const catchAsync = require("../utils/catchAsync");
const ExpressError = require("../utils/ExpressError");
const { reviewVSchema } = require("../validation_Schemas");
const { isLoggedIn } = require("../middleware");

const validateReview = (req, res, next) => {
  const { error } = reviewVSchema.validate(req.body);

  if (error) {
    const msg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

router.post(
  "/",
  validateReview,
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash("success", "A new review has been successfully submited");
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

router.delete(
  "/:reviewId",
  isLoggedIn,
  catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review successfully deleted");
    res.redirect(`/campgrounds/${id}`);
  })
);

module.exports = router;
