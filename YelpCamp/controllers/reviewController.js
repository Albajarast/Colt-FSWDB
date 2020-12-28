const Campground = require("../models/campgrounds");
const Review = require("../models/review");

module.exports.createOne = async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  const review = new Review(req.body.review);
  campground.reviews.push(review);
  review.author = req.user._id;
  await review.save();
  await campground.save();
  req.flash("success", "A new review has been successfully submited");
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.deleteOne = async (req, res) => {
  const { id, reviewId } = req.params;
  await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review successfully deleted");
  res.redirect(`/campgrounds/${id}`);
};
