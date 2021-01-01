const Campground = require("../models/campgrounds");
const { cloudinary } = require("../cloudinary/");
const mpbGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapbox_TOKEN = process.env.MAPBOX_PB_TOKEN;
const geocoder = mpbGeocoding({ accessToken: mapbox_TOKEN });

module.exports.index = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
};

module.exports.create = async (req, res, next) => {
  const newCamp = new Campground(req.body.campground);
  // Get geolocation data from mapbox
  const campGeometry = await geocoder
    .forwardGeocode({
      query: req.body.campground.location,
      limit: 1,
    })
    .send();
  // save to the new campground the geolocation data
  newCamp.geometry = campGeometry.body.features[0].geometry;
  // Append the uploaded images to the new campground
  newCamp.images = req.files.map((file) => ({
    url: file.path,
    filename: file.filename,
  }));
  // Associate the current logged user as the author of the new campground
  newCamp.author = req.user._id;
  // Save campground in the campgrounds DB collection
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
  const newImages = req.files.map((file) => ({
    url: file.path,
    filename: file.filename,
  }));

  // add new uploaded images
  campground.images.push(...newImages);
  await campground.save();

  // delete images if any is selected
  if (req.body.deleteImages) {
    for (let filename of req.body.deleteImages) {
      await cloudinary.uploader.destroy(filename);
    }
    await campground.updateOne({
      $pull: { images: { filename: { $in: req.body.deleteImages } } },
    });
  }
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
  const campground = await Campground.findById(id);
  for (let image of campground.images) {
    await cloudinary.uploader.destroy(image.filename);
  }
  campground.delete();
  req.flash("success", "Campground successfully deleted");
  res.redirect("/campgrounds");
};
