const Campground = require("../models/campgrounds");

module.exports.index = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
};

module.exports.create = async (req, res, next) => {
  const newCamp = new Campground(req.body.campground);
  newCamp.author = req.user._id;
  await newCamp.save();
  req.flash("success", "Successfully made a new campground");
  res.redirect(`/campgrounds/${newCamp._id}`);
};

module.exports.showOne = async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("author");
  if (!campground) {
    req.flash("error", "Cannot find that campground");
    res.redirect("/campgrounds");
  }
  res.render("campgrounds/show", { campground });
};

module.exports.updateOne = async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  req.flash("success", "Campground successfully updated");
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.editOne = async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  if (!campground) {
    req.flash("error", "Cannot find that campground");
    res.redirect("/campgrounds");
  }
  res.render("campgrounds/edit", { campground });
};

module.exports.destroyOne = async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndDelete(id);
  req.flash("success", "Campground successfully deleted");
  res.redirect("/campgrounds");
};
